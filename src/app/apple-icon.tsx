import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function IconeApple() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0D0E",
        }}
      >
        <span
          style={{
            fontSize: 92,
            fontWeight: 600,
            color: "#48C49A",
            letterSpacing: -4,
          }}
        >
          PX
        </span>
      </div>
    ),
    { ...size }
  );
}
