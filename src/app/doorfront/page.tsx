import { MagneticButton } from "@/components/magnetic-button";
import { Reveal } from "@/components/reveal";
import { doorfrontPage, identity } from "@/content/copy";
import { pageMetadata } from "@/lib/metadata";

export function generateMetadata() {
  return pageMetadata({
    title: doorfrontPage.title,
    description: doorfrontPage.description,
    path: "/doorfront",
  });
}

export default function DoorfrontPage() {
  return (
    <main id="main">
      <section>
        <div className="mx-auto max-w-[1400px] px-5 pt-16 pb-28 md:px-8 md:pt-20 md:pb-36">
          <Reveal>
            <h1 className="max-w-[14ch] text-4xl font-medium tracking-tight md:text-5xl xl:text-6xl xl:leading-[1.05]">
              {doorfrontPage.heading}
            </h1>
            <div className="mt-10 max-w-[62ch] space-y-5 text-[17px] leading-relaxed text-muted md:text-[19px]">
              {doorfrontPage.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-10 max-w-[52ch] text-[16px] leading-relaxed text-muted">
              {doorfrontPage.toContact}
            </p>
            <div className="mt-8">
              <MagneticButton href="/#contact">
                {identity.conversation}
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
