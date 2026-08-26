import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import photos from "@/content/photos.json";
import { identity, photographsPage } from "@/content/copy";
import { pageMetadata } from "@/lib/metadata";

type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export function generateMetadata() {
  return pageMetadata({
    title: photographsPage.title,
    description: photographsPage.description,
    path: "/photographs",
  });
}

export default function PhotographsPage() {
  const items = photos as Photo[];

  return (
    <main id="main">
      <section>
        <div className="mx-auto max-w-[1400px] px-5 pt-16 pb-28 md:px-8 md:pt-20 md:pb-36">
          <Reveal>
            <h1 className="max-w-[16ch] text-4xl font-medium tracking-tight md:text-5xl xl:text-6xl xl:leading-[1.05]">
              {photographsPage.heading}
            </h1>
            <p className="mt-8 max-w-[54ch] text-[17px] leading-relaxed text-muted md:text-[19px]">
              {photographsPage.intro}
            </p>
          </Reveal>

          {items.length === 0 ? (
            <p className="mt-16 text-[15px] text-muted">
              {photographsPage.empty}
            </p>
          ) : (
            <div className="mt-16 gap-3 [column-fill:_balance] sm:columns-2 lg:columns-3">
              {items.map((photo, index) => (
                <Reveal
                  key={photo.src}
                  delay={Math.min(index * 0.03, 0.15)}
                  className="mb-3 block break-inside-avoid"
                >
                  <div className="relative overflow-hidden border border-line bg-bg-elev">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={photo.width}
                      height={photo.height}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="h-auto w-full"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          <p className="mt-16 text-[15px] text-muted">
            <Link href="/interests" className="text-ink">
              Back to interests
            </Link>
          </p>
          <p className="mt-3 text-[15px] text-muted">
            <Link href="/#contact" className="text-ink">
              {identity.conversation}
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
