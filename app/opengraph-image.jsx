import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Khuzemah Saeed — Senior Full Stack Developer, Backend & AI Engineering";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const STACK = ["Python", "Laravel", "Next.js", "React", "MySQL", "LLM integrations"];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F7F6F2",
          padding: "72px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "#15171A",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              backgroundColor: "#15171A",
              color: "#F7F6F2",
              fontSize: "24px",
              fontWeight: 600,
            }}
          >
            KS
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 22px",
              borderRadius: "999px",
              backgroundColor: "#E3F3E8",
              color: "#15803D",
              fontSize: "22px",
              fontWeight: 600,
            }}
          >
            <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#15803D" }} />
            Open to senior roles · Remote
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "96px", fontWeight: 700, letterSpacing: "-4px", lineHeight: 1 }}>
            Khuzemah Saeed
          </div>
          <div style={{ display: "flex", marginTop: "24px", fontSize: "40px", fontWeight: 600 }}>
            Senior Full Stack Developer
            <span style={{ color: "#8A8F98", fontWeight: 500, marginLeft: "16px" }}>/ Backend &amp; AI</span>
          </div>
          <div style={{ marginTop: "20px", fontSize: "28px", color: "#454A52" }}>
            6+ years · Property portals, CRMs, payroll, logistics &amp; AI automation
          </div>
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          {STACK.map((s) => (
            <div
              key={s}
              style={{
                display: "flex",
                padding: "10px 20px",
                borderRadius: "999px",
                backgroundColor: "#E8ECFB",
                color: "#1D3AA6",
                fontSize: "22px",
                fontWeight: 600,
              }}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
