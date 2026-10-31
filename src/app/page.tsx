import Image from "next/image";
import Link from "next/link";
import { Contact } from "@/components/contact";
import { HubPanels } from "@/components/hub-panels";
import { MagneticButton } from "@/components/magnetic-button";
import { Reveal } from "@/components/reveal";
import { TweetQuote } from "@/components/tweet-quote";
import { contactNeutral, endorsement, hub, identity } from "@/content/copy";
import { isMailto } from "@/lib/email";
import { pageMetadata } from "@/lib/metadata";
import { getSiteUrl, site } from "@/lib/site";

export function generateMetadata() {
  return pageMetadata({
    absoluteTitle: "Rob Stickler, Operator in Orange County",
    description: hub.description,
    path: "/",
  });
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: identity.operator,
    url: getSiteUrl(),
    sameAs: [site.linkedin],
    address: {
      "@type": "PostalAddress",
      addressRegion: identity.location,
    },
    ...(isMailto(identity.email) ? { email: identity.email } : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main">
        <section>
          <div className="mx-auto max-w-[1400px] px-5 pt-12 pb-16 md:px-8 md:pt-20 md:pb-24">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
              <Reveal className="order-2 lg:order-1 lg:col-span-7">
                <p className="text-[13px] font-medium tracking-tight text-muted">
                  {identity.operator} &middot; {identity.regionShort}
                </p>
                <h1 className="mt-5 max-w-[20ch] text-4xl font-medium tracking-tight text-balance md:text-5xl xl:text-6xl xl:leading-[1.05]">
                  {hub.headlineBefore}
                  <span className="text-accent">{hub.headlineEm}</span>
                  {hub.headlineAfter}
                </h1>
                <p className="mt-6 max-w-[52ch] text-[16px] leading-relaxed text-muted md:text-[17px]">
                  {hub.career}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <MagneticButton href="/proof">See the proof</MagneticButton>
                  <MagneticButton href="/how-i-operate" variant="ghost">
                    How I operate
                  </MagneticButton>
                </div>
                <p className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[14px] text-muted">
                  <span>{identity.availability}</span>
                  {isMailto(identity.email) ? (
                    <a href={`mailto:${identity.email}`} className="text-ink">
                      {identity.email}
                    </a>
                  ) : null}
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink"
                  >
                    {identity.linkedinLabel}
                  </a>
                </p>
              </Reveal>

              <Reveal className="order-1 lg:order-2 lg:col-span-5" delay={0.08}>
                <div className="relative mx-auto w-full max-w-[230px] sm:max-w-[280px] lg:ml-auto lg:max-w-[360px]">
                  <div
                    aria-hidden
                    className="absolute -right-3 -bottom-3 top-4 left-4 border border-line bg-bg-elev"
                  />
                  <div className="relative aspect-[4/5] overflow-hidden border border-line">
                    <Image
                      src="/images/rob.jpg"
                      alt="Rob Stickler"
                      fill
                      priority
                      sizes="(min-width: 1024px) 360px, (min-width: 640px) 280px, 230px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </Reveal>
            </div>

            <HubPanels />
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center">
              <Reveal className="md:col-span-5">
                <h2 className="max-w-[16ch] text-3xl font-medium tracking-tight md:text-4xl">
                  {hub.clip.heading}
                </h2>
                <p className="mt-4 max-w-[48ch] text-[16px] leading-relaxed text-muted md:text-[17px]">
                  {hub.clip.caption}
                </p>
                <p className="mt-3 max-w-[48ch] text-[16px] leading-relaxed text-muted md:text-[17px]">
                  {hub.clip.note}
                </p>
                <p className="mt-6 text-[15px]">
                  <Link
                    href={hub.clip.href}
                    className="text-ink underline decoration-accent/70 underline-offset-4 transition-colors hover:text-accent"
                  >
                    {hub.clip.linkLabel}
                  </Link>
                </p>
              </Reveal>
              <Reveal className="md:col-span-4 md:col-start-7" delay={0.06}>
                <video
                  controls
                  preload="none"
                  playsInline
                  poster="/images/work/plunge-teaching-poster.jpg"
                  className="w-full max-w-[300px] border border-line bg-bg-elev"
                >
                  <source src="/video/plunge-teaching.mp4" type="video/mp4" />
                  Your browser cannot play this video.
                </video>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
            <Reveal>
              <h2 className="max-w-[18ch] text-3xl font-medium tracking-tight md:text-4xl">
                {endorsement.heading}
              </h2>
              <p className="mt-4 max-w-[52ch] text-[16px] leading-relaxed text-muted md:text-[17px]">
                {endorsement.intro}
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <TweetQuote />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-[52ch] text-[16px] leading-relaxed text-muted md:text-[17px]">
                {endorsement.takeaway}
              </p>
            </Reveal>
          </div>
        </section>
        <Contact copy={contactNeutral} />
      </main>
    </>
  );
}
