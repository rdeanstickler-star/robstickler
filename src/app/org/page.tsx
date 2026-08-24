import { Contact } from "@/components/contact";
import { OrgChart, OrgChartLegend } from "@/components/org-chart";
import { Reveal } from "@/components/reveal";
import { contactNeutral, orgPage, type OrgNode } from "@/content/copy";
import { pageMetadata } from "@/lib/metadata";

export function generateMetadata() {
  return pageMetadata({
    title: orgPage.title,
    description: orgPage.description,
    path: "/org",
  });
}

function NodeCard({ node }: { node: OrgNode }) {
  const base = "flex h-full flex-col gap-2 p-5 md:p-6";
  if (node.kind === "redacted") {
    return (
      <div className={`${base} border border-dashed border-line`}>
        <h3 className="font-mono text-[15px] tracking-tight text-muted">
          {node.name}
        </h3>
        <p className="text-[14px] leading-relaxed text-muted">{node.note}</p>
      </div>
    );
  }
  return (
    <div
      className={`${base} border bg-bg-elev ${
        node.kind === "chairman" || node.kind === "self"
          ? "border-accent/60"
          : "border-line"
      }`}
    >
      <h3
        className={`font-medium tracking-tight ${
          node.kind === "chairman" ? "text-xl md:text-2xl" : "text-[17px]"
        }`}
      >
        {node.name}
      </h3>
      <p className="text-[14px] leading-relaxed text-muted">{node.note}</p>
    </div>
  );
}

export default function OrgPage() {
  return (
    <main id="main">
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 pt-16 pb-20 md:px-8 md:pt-20 md:pb-28">
          <Reveal>
            <h1 className="max-w-[18ch] text-4xl font-medium tracking-tight md:text-5xl xl:text-6xl xl:leading-[1.05]">
              {orgPage.heading}
            </h1>
            {orgPage.intro.map((para) => (
              <p
                key={para.slice(0, 24)}
                className="mt-6 max-w-[62ch] text-[16px] leading-relaxed text-muted md:text-[17px]"
              >
                {para}
              </p>
            ))}
          </Reveal>

          <Reveal>
            <h2 className="mt-20 text-3xl font-medium tracking-tight md:text-4xl">
              {orgPage.lawsHeading}
            </h2>
            <p className="mt-4 max-w-[62ch] text-[16px] leading-relaxed text-muted">
              {orgPage.lawsIntro}
            </p>
          </Reveal>
          <ol className="mt-10 grid grid-cols-1 gap-x-10 md:grid-cols-2">
            {orgPage.laws.map((law, index) => (
              <li key={law.title} className="border-t border-line py-6">
                <Reveal delay={Math.min(index * 0.03, 0.12)}>
                  <div className="flex gap-4">
                    <span className="font-mono text-[14px] text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-[17px] font-medium tracking-tight">
                        {law.title}
                      </h3>
                      <p className="mt-2 max-w-[52ch] text-[15px] leading-relaxed text-muted">
                        {law.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal>
            <h2 className="mt-24 text-3xl font-medium tracking-tight md:text-4xl">
              {orgPage.chartHeading}
            </h2>
          </Reveal>
          <Reveal>
            <OrgChartLegend />
            <OrgChart />
          </Reveal>

          <details className="group mt-8">
            <summary className="cursor-pointer list-none text-[15px] text-muted [&::-webkit-details-marker]:hidden">
              <span className="font-mono text-accent" aria-hidden>
                +{" "}
              </span>
              Prefer it as text? Every seat, one line each.
            </summary>
            <div className="mt-6 flex flex-col gap-8">
              {orgPage.tiers.map((tier) => (
                <div key={tier.label}>
                  <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-muted">
                    {tier.label}
                  </p>
                  <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {tier.nodes.map((node) => (
                      <NodeCard key={node.name} node={node} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </details>
          <Reveal>
            <p className="mt-10 max-w-[62ch] text-[15px] leading-relaxed text-muted">
              {orgPage.redactionNote}
            </p>
          </Reveal>

          <Reveal>
            <h2 className="mt-24 text-3xl font-medium tracking-tight md:text-4xl">
              {orgPage.evidenceHeading}
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
            {orgPage.counts.map((count, index) => (
              <Reveal key={count.label} delay={Math.min(index * 0.04, 0.16)}>
                <p className="font-mono text-4xl tracking-tight text-accent md:text-5xl">
                  {count.value}
                </p>
                <p className="mt-3 max-w-[36ch] text-[15px] leading-relaxed text-muted">
                  {count.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Contact copy={contactNeutral} />
    </main>
  );
}
