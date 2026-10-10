import { NextResponse } from "next/server";

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
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid name (at least 2 characters)." },
        { status: 422 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
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

    // Check if an email dispatch provider API key is configured (e.g., RESEND_API_KEY)
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || "khuzemasaeed@gmail.com";

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
          reply_to: email.trim(),
          subject: `[Portfolio Inquiry] ${subject?.trim() || "New message from " + name.trim()}`,
          text: `Name: ${name.trim()}\nEmail: ${email.trim()}\nSubject: ${subject || "N/A"}\n\nMessage:\n${message.trim()}`,
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
        message: "Your message has been sent successfully. Khuzemah will respond shortly!",
      });
    }

    // Transparent notification when no production email provider key is configured
    return NextResponse.json({
      success: false,
      configured: false,
      message:
        "Direct server mail delivery requires RESEND_API_KEY in environment variables. Please use direct email to ensure immediate receipt.",
      draftSubject: subject?.trim() || `Inquiry from ${name.trim()}`,
      draftBody: `Hi Khuzemah,\n\n${message.trim()}\n\nBest regards,\n${name.trim()}\n${email.trim()}`,
    });
  } catch (err) {
    console.error("Contact API exception:", err);
    return NextResponse.json(
      { error: "Internal server error while processing message." },
      { status: 500 }
    );
  }
}
