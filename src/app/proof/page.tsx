import { ArtifactList } from "@/components/artifact-list";
import { Reveal } from "@/components/reveal";
import { TweetQuote } from "@/components/tweet-quote";
import { artifactsPage, endorsement } from "@/content/copy";
import { pageMetadata } from "@/lib/metadata";

export function generateMetadata() {
  return pageMetadata({
    title: artifactsPage.title,
    description: artifactsPage.description,
    path: "/proof",
  });
}

export default function ArtifactsPage() {
  return (
    <main id="main">
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 pt-16 pb-20 md:px-8 md:pt-20 md:pb-28">
          <Reveal>
            <h1 className="max-w-[16ch] text-4xl font-medium tracking-tight md:text-5xl xl:text-6xl xl:leading-[1.05]">
              {artifactsPage.heading}
            </h1>
            <p className="mt-6 max-w-[52ch] text-[16px] leading-relaxed text-muted md:text-[17px]">
              {artifactsPage.intro}
            </p>
            <p className="mt-4 max-w-[52ch] text-[16px] leading-relaxed text-muted md:text-[17px]">
              {artifactsPage.selfNote}
            </p>
          </Reveal>
          <ArtifactList />
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            <Reveal className="lg:col-span-5">
              <h2 className="max-w-[18ch] text-3xl font-medium tracking-tight md:text-4xl">
                {endorsement.heading}
              </h2>
              <p className="mt-4 max-w-[46ch] text-[16px] leading-relaxed text-muted md:text-[17px]">
                {endorsement.intro}
              </p>
              <p className="mt-6 max-w-[46ch] text-[16px] leading-relaxed text-muted md:text-[17px]">
                {endorsement.takeaway}
              </p>
            </Reveal>
            <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.06}>
              <TweetQuote />
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
