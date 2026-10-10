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
          backgroundColor: "#101014",
          padding: "64px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Cinematic ambient background glow */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-100px",
            width: "550px",
            height: "550px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.28) 0%, rgba(59, 130, 246, 0.12) 50%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Top Header Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "rgba(25, 25, 32, 0.8)",
              padding: "10px 22px",
              borderRadius: "40px",
              border: "1px solid rgba(139, 92, 246, 0.3)",
              boxShadow: "0 0 20px rgba(139, 92, 246, 0.15)",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#8B5CF6",
                boxShadow: "0 0 10px #8B5CF6",
              }}
            />
            <span
              style={{
                color: "#F5F5F7",
                fontSize: "16px",
                fontWeight: "600",
                letterSpacing: "0.5px",
              }}
            >
              Senior Full Stack &amp; AI Systems Engineer
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#A1A1B0",
              fontSize: "16px",
              letterSpacing: "0.3px",
            }}
          >
            Lahore, PK · Remote Worldwide (GMT+5)
          </div>
        </div>

        {/* Center Editorial Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            style={{
              fontSize: "64px",
              fontWeight: "800",
              color: "#F5F5F7",
              letterSpacing: "-1.5px",
              lineHeight: "1.05",
            }}
          >
            Khuzemah Saeed
          </div>
          <div
            style={{
              fontSize: "30px",
              fontWeight: "600",
              background: "linear-gradient(90deg, #8B5CF6 0%, #60A5FA 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            High-Concurreny Platforms · Enterprise Integrations · Operational AI
          </div>
          <div
            style={{
              fontSize: "20px",
              color: "#A1A1B0",
              maxWidth: "960px",
              lineHeight: "1.45",
            }}
          >
            6+ years engineering mission-critical systems across UAE PropTech, global marketplaces,
            and HRM. Bitrix24 · Property Finder · Cin7 ERP · WPS Central Bank Payroll · LangChain &amp; OpenAI
          </div>
        </div>

        {/* Bottom Tag Strip */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            position: "relative",
            zIndex: 2,
          }}
        >
          {[
            "Python",
            "Laravel",
            "Next.js",
            "Bitrix24 CRM",
            "Property Finder API",
            "Cin7 ERP",
            "WPS Banking SIF",
            "OpenAI API",
          ].map((tag) => (
            <div
              key={tag}
              style={{
                background: "rgba(25, 25, 32, 0.9)",
                color: "#E2E8F0",
                padding: "8px 18px",
                borderRadius: "8px",
                fontSize: "15px",
                fontWeight: "500",
                border: "1px solid rgba(255, 255, 255, 0.08)",
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
