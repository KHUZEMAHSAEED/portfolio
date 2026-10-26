import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const MAX = { name: 120, email: 200, subject: 200, message: 5000 };

const escapeHtml = (str) =>
  str.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

// Best-effort throttle: per-instance only, but enough to blunt a burst from one IP.
const recent = new Map();
const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 5;

function isRateLimited(ip) {
  const now = Date.now();
  const hits = (recent.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  recent.set(ip, hits);
  return hits.length > LIMIT;
}

let transporter;
function getTransporter() {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) return null;
  if (!transporter) {
    const port = Number(process.env.SMTP_PORT || 465);
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
  }
  return transporter;
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload in request." },
      { status: 400 }
    );
  }

  try {
    const { name, email, subject, message, honeypot } = body || {};

    // Anti-spam honeypot
    if (honeypot) {
      return NextResponse.json({ error: "Spam detected" }, { status: 400 });
    }

    // Input validation
    if (!name || typeof name !== "string" || name.trim().length < 2 || name.length > MAX.name) {
      return NextResponse.json(
        { error: "Please provide a valid name (at least 2 characters)." },
        { status: 422 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || email.length > MAX.email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 422 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Please enter a message with at least 10 characters." },
        { status: 422 }
      );
    }

    if (message.length > MAX.message || (subject && (typeof subject !== "string" || subject.length > MAX.subject))) {
      return NextResponse.json(
        { error: "Your message is too long — please keep it under 5,000 characters." },
        { status: 422 }
      );
    }

    const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many messages in a short time. Please email directly instead." },
        { status: 429 }
      );
    }

    const clean = {
      name: name.trim().replace(/[\r\n]+/g, " "),
      email: email.trim(),
      subject: (subject || "").trim().replace(/[\r\n]+/g, " "),
      message: message.trim(),
    };
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || "khuzemasaeed@gmail.com";
    const mailSubject = `[Portfolio] ${clean.subject || `New message from ${clean.name}`}`;
    const text = `Name: ${clean.name}\nEmail: ${clean.email}\nSubject: ${clean.subject || "N/A"}\n\nMessage:\n${clean.message}`;

    // 1. SMTP (e.g. Gmail with an app password) — delivers straight to your inbox.
    const smtp = getTransporter();
    if (smtp) {
      try {
        await smtp.sendMail({
          from: process.env.SMTP_FROM || `"Portfolio Contact" <${process.env.SMTP_USER}>`,
          to: recipientEmail,
          replyTo: `"${clean.name.replace(/"/g, "")}" <${clean.email}>`,
          subject: mailSubject,
          text,
          html: `<div style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.6;color:#15171a">
  <p style="margin:0 0 4px"><strong>${escapeHtml(clean.name)}</strong> &lt;<a href="mailto:${escapeHtml(clean.email)}">${escapeHtml(clean.email)}</a>&gt;</p>
  <p style="margin:0 0 16px;color:#676d76">${escapeHtml(clean.subject || "No subject")}</p>
  <div style="white-space:pre-wrap;padding:16px;border-radius:8px;background:#f3f2ed">${escapeHtml(clean.message)}</div>
  <p style="margin:16px 0 0;font-size:13px;color:#676d76">Sent from the contact form on your portfolio. Reply to this email to answer ${escapeHtml(clean.name)} directly.</p>
</div>`,
        });
      } catch (err) {
        console.error("SMTP send error:", err);
        return NextResponse.json(
          { error: "The message couldn't be delivered right now. Please email directly." },
          { status: 502 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Thanks — your message is in Khuzemah's inbox. Expect a reply at the email you provided.",
      });
    }

    // 2. Resend API, if configured instead of SMTP.
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>",
          to: recipientEmail,
          reply_to: clean.email,
          subject: mailSubject,
          text,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        console.error("Resend API error:", errorData);
        return NextResponse.json(
          { error: "Failed to dispatch email via service provider. Please email directly." },
          { status: 502 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Thanks — your message is in Khuzemah's inbox. Expect a reply at the email you provided.",
      });
    }

    // 3. Nothing configured: hand the visitor a ready-made draft for their own mail app.
    return NextResponse.json({
      success: false,
      configured: false,
      message: "Direct delivery isn't set up yet, so here's your message as an email draft:",
      draftSubject: clean.subject || `Inquiry from ${clean.name}`,
      draftBody: `Hi Khuzemah,\n\n${clean.message}\n\nBest regards,\n${clean.name}\n${clean.email}`,
    });
  } catch (err) {
    console.error("Contact API exception:", err);
    return NextResponse.json(
      { error: "Internal server error while processing message." },
      { status: 500 }
    );
  }
}
