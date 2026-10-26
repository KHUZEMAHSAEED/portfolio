import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Home-screen icon for iOS — same mark as the header and favicon.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#15171A",
          color: "#F7F6F2",
          fontSize: 72,
          fontWeight: 600,
          fontFamily: "monospace",
        }}
      >
        KS
      </div>
    ),
    { ...size }
  );
}
