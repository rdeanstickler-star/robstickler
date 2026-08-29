import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-dynamic";

const paths = ["/", "/proof", "/interests", "/studios", "/org", "/photographs", "/work", "/how-i-operate"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();

  return paths.map((path) => ({
    url: path === "/" ? base : `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority:
      path === "/"
        ? 1
        : path === "/proof"
          ? 0.9
          : 0.7,
  }));
}
