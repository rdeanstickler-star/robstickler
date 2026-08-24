import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-dynamic";

const paths = ["/", "/artifacts", "/interests", "/studios", "/doorfront", "/org"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();

  return paths.map((path) => ({
    url: path === "/" ? base : `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority:
      path === "/"
        ? 1
        : path === "/artifacts"
          ? 0.9
          : path === "/doorfront"
            ? 0.4
            : 0.7,
  }));
}
