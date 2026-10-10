import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Khuzemah Saeed — Senior Full Stack & AI Systems Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

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
          backgroundColor: "#0e141b",
          padding: "60px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          border: "2px solid #2b3a49",
        }}
      >
        {/* Top Header Badge */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              background: "#141c25",
              padding: "10px 20px",
              borderRadius: "40px",
              border: "1px solid #2b3a49",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "#e2a33d",
              }}
            />
            <span style={{ color: "#e8edf3", fontSize: "18px", fontWeight: "600" }}>
              Senior Full Stack &amp; AI Systems Engineer
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#8798a8",
              fontSize: "18px",
            }}
          >
            Lahore, PK · Remote Worldwide
          </div>
        </div>

        {/* Central Core Branding */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ fontSize: "56px", fontWeight: "800", color: "#e8edf3", letterSpacing: "-1px" }}>
            Khuzemah Saeed
          </div>
          <div style={{ fontSize: "28px", color: "#e2a33d", fontWeight: "600" }}>
            Systems that connect, scale, and hold together.
          </div>
          <div style={{ fontSize: "20px", color: "#8798a8", maxWidth: "900px", lineHeight: "1.4" }}>
            6+ Years architecting resilient Laravel, Python, and Next.js platforms · UAE PropTech · Bitrix24 &amp; Property Finder APIs · Automated WPS Payroll · Enterprise Integrations
          </div>
        </div>

        {/* Bottom Tag Strip */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {["Laravel", "Python", "Next.js", "Bitrix24 CRM", "Property Finder API", "Cin7", "WPS Payroll", "AI Chatbots"].map((tag) => (
            <div
              key={tag}
              style={{
                background: "#182230",
                color: "#e8edf3",
                padding: "8px 16px",
                borderRadius: "6px",
                fontSize: "16px",
                border: "1px solid #2b3a49",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
