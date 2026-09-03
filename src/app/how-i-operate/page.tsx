import { Contact } from "@/components/contact";
import { Reveal } from "@/components/reveal";
import { XEmbed } from "@/components/x-embed";
import { contactNeutral, operatePage } from "@/content/copy";
import { pageMetadata } from "@/lib/metadata";

export function generateMetadata() {
  return pageMetadata({
    title: operatePage.title,
    description: operatePage.description,
    path: "/how-i-operate",
  });
}

export default function OperatePage() {
  return (
    <main id="main">
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 pt-16 pb-20 md:px-8 md:pt-20 md:pb-28">
          <Reveal>
            <h1 className="max-w-[16ch] text-4xl font-medium tracking-tight md:text-5xl xl:text-6xl xl:leading-[1.05]">
              {operatePage.heading}
            </h1>
            <p className="mt-8 max-w-[58ch] text-[17px] leading-relaxed text-muted md:text-[19px]">
              {operatePage.intro}
            </p>
            <p className="mt-5 max-w-[58ch] text-[16px] leading-relaxed text-muted md:text-[17px]">
              {operatePage.framing}
            </p>
          </Reveal>

          <div className="mt-16 max-w-[62ch]">
            {operatePage.sections.map((section, index) => (
              <div
                key={section.title}
                className="border-t border-line py-10 first:border-t-0 first:pt-0"
              >
                <Reveal delay={Math.min(index * 0.04, 0.12)}>
                  <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
                    {section.title}
                  </h2>
                  <p className="mt-3 text-[16px] leading-relaxed text-muted md:text-[17px]">
                    {section.body}
                  </p>
                </Reveal>
              </div>
            ))}

            <div className="border-t border-line py-10">
              <Reveal>
                <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
                  {operatePage.helpsHeading}
                </h2>
                <ul className="mt-5 flex flex-col gap-3">
                  {operatePage.helps.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden className="font-mono text-accent">
                        &middot;
                      </span>
                      <span className="text-[16px] leading-relaxed text-muted md:text-[17px]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div className="border-t border-line py-10">
              <Reveal>
                <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
                  {operatePage.limitHeading}
                </h2>
                <p className="mt-3 text-[16px] leading-relaxed text-muted md:text-[17px]">
                  {operatePage.limitBody}
                </p>
              </Reveal>
            </div>

            <Reveal>
              <p className="border-t border-line pt-10 text-[17px] leading-relaxed text-ink md:text-[19px]">
                {operatePage.closing}
              </p>
            </Reveal>

            <div className="mt-10 border-t border-line pt-10">
              <Reveal>
                <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
                  {operatePage.coda.heading}
                </h2>
                <p className="mt-3 text-[16px] leading-relaxed text-muted md:text-[17px]">
                  {operatePage.coda.lead}
                </p>
              </Reveal>
              <Reveal delay={0.06}>
                <XEmbed url={operatePage.coda.tweetUrl}>
                  <p>{operatePage.coda.fallbackText}</p>
                  <p>{operatePage.coda.fallbackAuthor}</p>
                </XEmbed>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-8 max-w-[58ch] text-[16px] leading-relaxed text-muted md:text-[17px]">
                  {operatePage.coda.takeaway}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      <Contact copy={contactNeutral} />
    </main>
  );
}
