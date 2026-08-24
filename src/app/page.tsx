import Image from "next/image";
import { Contact } from "@/components/contact";
import { HubPanels } from "@/components/hub-panels";
import { Reveal } from "@/components/reveal";
import { contactNeutral, hub, identity } from "@/content/copy";
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
        <section className="min-h-[100dvh]">
          <div className="mx-auto max-w-[1400px] px-5 pt-16 pb-20 md:px-8 md:pt-20 md:pb-28">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <Reveal className="lg:col-span-8">
              <p className="text-[13px] font-medium tracking-tight text-muted">
                {identity.operator}
              </p>
              <h1 className="mt-5 max-w-[22ch] text-4xl font-medium tracking-tight text-balance md:text-5xl xl:text-6xl xl:leading-[1.05]">
                {hub.headline}
              </h1>
              <p className="mt-6 max-w-[58ch] text-[16px] leading-relaxed text-muted md:text-[17px]">
                {hub.career}
              </p>
              <p className="mt-6 text-[15px] text-muted">{identity.location}</p>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
                {isMailto(identity.email) ? (
                  <a href={`mailto:${identity.email}`} className="text-ink">
                    {identity.email}
                  </a>
                ) : (
                  <span className="text-muted">{identity.email}</span>
                )}
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink"
                >
                  {identity.linkedinLabel}
                </a>
                <a href={identity.resumeHref} className="text-ink">
                  {identity.resumeLabel}
                </a>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-4" delay={0.08}>
              <div className="relative aspect-[4/5] w-full max-w-[220px] overflow-hidden border border-line sm:max-w-[260px] lg:ml-auto lg:max-w-[340px]">
                <Image
                  src="/images/rob.jpg"
                  alt="Rob Stickler"
                  fill
                  priority
                  sizes="(min-width: 1024px) 340px, (min-width: 640px) 260px, 220px"
                  className="object-cover"
                />
              </div>
            </Reveal>
            </div>

            <HubPanels />
          </div>
        </section>
        <Contact copy={contactNeutral} />
      </main>
    </>
  );
}
