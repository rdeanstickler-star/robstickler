import Image from "next/image";
import Link from "next/link";
import { Contact } from "@/components/contact";
import { Reveal } from "@/components/reveal";
import { contactNeutral, workEntries, workPage } from "@/content/copy";
import { pageMetadata } from "@/lib/metadata";

export function generateMetadata() {
  return pageMetadata({
    title: workPage.title,
    description: workPage.description,
    path: "/work",
  });
}

export default function WorkPage() {
  return (
    <main id="main">
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 pt-16 pb-20 md:px-8 md:pt-20 md:pb-28">
          <Reveal>
            <h1 className="max-w-[18ch] text-4xl font-medium tracking-tight md:text-5xl xl:text-6xl xl:leading-[1.05]">
              {workPage.heading}
            </h1>
            <p className="mt-8 max-w-[58ch] text-[17px] leading-relaxed text-muted md:text-[19px]">
              {workPage.intro}
            </p>
            <p className="mt-4 font-mono text-[13px] text-muted">
              {workPage.note}
            </p>
          </Reveal>

          <div className="mt-20 flex flex-col gap-24">
            {workEntries.map((entry, index) => (
              <article key={entry.role} className="border-t border-line pt-10">
                <Reveal delay={Math.min(index * 0.04, 0.12)}>
                  <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between md:gap-8">
                    <div>
                      <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
                        {entry.role}
                      </h2>
                      <p className="mt-1 text-[16px] text-muted">{entry.org}</p>
                    </div>
                    <p className="font-mono text-[13px] whitespace-nowrap text-accent">
                      {entry.dates}
                    </p>
                  </div>
                  <p className="mt-5 max-w-[62ch] text-[16px] leading-relaxed text-muted md:text-[17px]">
                    {entry.body}
                  </p>
                  {entry.points?.length ? (
                    <ul className="mt-5 flex max-w-[62ch] list-disc flex-col gap-2 pl-5">
                      {entry.points.map((point) => (
                        <li
                          key={point}
                          className="text-[15px] leading-relaxed text-muted"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {entry.link ? (
                    <p className="mt-4 text-[15px]">
                      <Link
                        href={entry.link.href}
                        className="text-ink underline decoration-accent/70 underline-offset-4 transition-colors hover:text-accent"
                      >
                        {entry.link.label}
                      </Link>
                    </p>
                  ) : null}
                </Reveal>

                {entry.photos.length > 0 ? (
                  <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
                    {entry.photos.map((photo, i) => (
                      <Reveal key={photo.src} delay={Math.min(i * 0.04, 0.16)}>
                        <figure>
                          <div className="relative aspect-[4/3] overflow-hidden border border-line bg-bg-elev">
                            <Image
                              src={photo.src}
                              alt={photo.alt}
                              fill
                              sizes="(min-width: 768px) 30vw, 45vw"
                              className="object-cover"
                            />
                          </div>
                          <figcaption className="mt-2 text-[13px] leading-relaxed text-muted">
                            {photo.caption}
                          </figcaption>
                        </figure>
                      </Reveal>
                    ))}
                  </div>
                ) : null}

                {entry.videos?.length ? (
                  <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-start">
                    {entry.videos.map((video) => (
                      <Reveal
                        key={video.src}
                        className={video.portrait ? "md:w-[300px] md:shrink-0" : "md:flex-1"}
                      >
                        <figure>
                          <video
                            controls
                            preload="none"
                            playsInline
                            poster={video.poster}
                            className="w-full border border-line bg-bg-elev"
                          >
                            <source src={video.src} type="video/mp4" />
                            Your browser cannot play this video.
                          </video>
                          <figcaption className="mt-2 max-w-[52ch] text-[13px] leading-relaxed text-muted">
                            {video.caption}
                          </figcaption>
                        </figure>
                      </Reveal>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>
      <Contact copy={contactNeutral} />
    </main>
  );
}
