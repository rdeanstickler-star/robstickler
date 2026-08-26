import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { identity, interestsPage } from "@/content/copy";
import { pageMetadata } from "@/lib/metadata";

export function generateMetadata() {
  return pageMetadata({
    title: interestsPage.title,
    description: interestsPage.description,
    path: "/interests",
  });
}

export default function InterestsPage() {
  return (
    <main id="main">
      <section>
        <div className="mx-auto max-w-[1400px] px-5 pt-16 pb-28 md:px-8 md:pt-20 md:pb-36">
          <Reveal>
            <h1 className="max-w-[16ch] text-4xl font-medium tracking-tight md:text-5xl xl:text-6xl xl:leading-[1.05]">
              {interestsPage.heading}
            </h1>
            <p className="mt-8 max-w-[62ch] text-[17px] leading-relaxed text-muted md:text-[19px]">
              {interestsPage.intro}
            </p>
          </Reveal>

          <ul className="mt-16 max-w-[62ch]">
            {interestsPage.items.map((item, index) => (
              <li
                key={item.title}
                className="border-t border-line py-10 last:border-b"
              >
                <Reveal delay={index * 0.05}>
                  <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-[16px] leading-relaxed text-muted">
                    {item.body}
                  </p>
                  {"href" in item && item.href ? (
                    <p className="mt-3 text-[15px]">
                      <Link
                        href={item.href}
                        className="text-ink underline decoration-accent/70 underline-offset-4 transition-colors hover:text-accent"
                      >
                        {item.linkLabel}
                      </Link>
                    </p>
                  ) : null}
                </Reveal>
              </li>
            ))}
          </ul>

          <p className="mt-16 text-[15px] text-muted">
            <Link href="/#contact" className="text-ink">
              {identity.conversation}
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
