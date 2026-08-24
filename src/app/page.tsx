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
            <Reveal>
              <p className="text-[13px] font-medium tracking-tight text-muted">
                {identity.operator}
              </p>
              <h1 className="mt-5 max-w-[22ch] text-4xl font-medium tracking-tight text-balance md:text-5xl xl:text-6xl xl:leading-[1.05]">
                {hub.headline}
              </h1>
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
              </div>
            </Reveal>
            <HubPanels />
          </div>
        </section>
        <Contact copy={contactNeutral} />
      </main>
    </>
  );
}
