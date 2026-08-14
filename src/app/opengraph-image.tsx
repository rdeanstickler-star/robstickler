import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name}. ${site.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#141618",
          color: "#e6e8ea",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 500,
            color: "#c85a32",
            letterSpacing: "-0.03em",
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            display: "flex",
            maxWidth: 960,
            fontSize: 72,
            fontWeight: 500,
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
          }}
        >
          {site.headline}
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
