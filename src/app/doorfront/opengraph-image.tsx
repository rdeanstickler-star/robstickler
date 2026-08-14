import { doorfrontPage } from "@/content/copy";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = doorfrontPage.ogHeadline;
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return renderOgImage(doorfrontPage.ogHeadline);
}
