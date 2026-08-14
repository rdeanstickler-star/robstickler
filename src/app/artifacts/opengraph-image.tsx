import { artifactsPage } from "@/content/copy";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = artifactsPage.ogHeadline;
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return renderOgImage(artifactsPage.ogHeadline);
}
