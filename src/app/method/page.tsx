import { Reveal } from "@/components/reveal";
import { methodPage } from "@/content/copy";
import { pageMetadata } from "@/lib/metadata";

export function generateMetadata() {
  return pageMetadata({
    title: methodPage.title,
    description: methodPage.description,
    path: "/method",
  });
}

function Pairs({ items }: { items: readonly { k: string; v: string }[] }) {
  return (
    <dl className="mt-4 flex flex-col gap-4">
      {items.map((item) => (
        <div key={item.k} className="md:flex md:gap-8">
          <dt className="text-[15px] font-medium md:w-[220px] md:shrink-0">
            {item.k}
          </dt>
          <dd className="mt-1 max-w-[52ch] text-[15px] leading-relaxed text-muted md:mt-0">
            {item.v}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export default function MethodPage() {
  return (
    <main id="main">
      <section>
        <div className="mx-auto max-w-[1400px] px-5 pt-16 pb-28 md:px-8 md:pt-20 md:pb-36">
          <Reveal>
            <h1 className="text-4xl font-medium tracking-tight md:text-5xl">
              {methodPage.heading}
            </h1>
            {methodPage.story ? (
              <p className="mt-8 max-w-[58ch] text-[17px] leading-relaxed text-muted md:text-[19px]">
                {methodPage.story}
              </p>
            ) : null}
          </Reveal>

          <div className="mt-16 max-w-[70ch]">
            <Reveal>
              <h2 className="text-2xl font-medium tracking-tight">
                {methodPage.doesHeading}
              </h2>
              <div className="mt-6 flex flex-col gap-10">
                {methodPage.groups.map((group) => (
                  <div key={group.label}>
                    <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted">
                      {group.label}
                    </p>
                    <Pairs items={group.items} />
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="mt-16 border-t border-line pt-10 text-2xl font-medium tracking-tight">
                {methodPage.ruleHeading}
              </h2>
              <p className="mt-4 max-w-[62ch] text-[16px] leading-relaxed text-muted md:text-[17px]">
                {methodPage.rule}
              </p>
            </Reveal>

            <Reveal>
              <h2 className="mt-16 border-t border-line pt-10 text-2xl font-medium tracking-tight">
                {methodPage.scopeHeading}
              </h2>
              <Pairs items={methodPage.scope} />
            </Reveal>

            <Reveal>
              <h2 className="mt-16 border-t border-line pt-10 text-2xl font-medium tracking-tight">
                {methodPage.whyHeading}
              </h2>
              <p className="mt-4 max-w-[62ch] text-[16px] leading-relaxed text-muted md:text-[17px]">
                {methodPage.why}
              </p>
            </Reveal>

            <Reveal>
              <p className="mt-16 max-w-[62ch] border-t border-line pt-10 text-[13px] leading-relaxed text-muted">
                {methodPage.precision}
              </p>
              <p className="mt-8 font-mono text-[12px] uppercase tracking-[0.14em] text-muted">
                {methodPage.versionHeading}
              </p>
              <ul className="mt-2 flex flex-col gap-1">
                {methodPage.versions.map((v) => (
                  <li key={v} className="text-[13px] text-muted">
                    {v}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
