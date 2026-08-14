import { interestsPage } from "@/content/copy";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = interestsPage.ogHeadline;
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return renderOgImage(interestsPage.ogHeadline);
}
