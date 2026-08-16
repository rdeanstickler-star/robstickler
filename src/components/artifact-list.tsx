import { Reveal } from "@/components/reveal";
import {
  artifacts,
  artifactsPage,
  artifactSlug,
  type Artifact,
} from "@/content/copy";

const parts: {
  key: keyof Pick<Artifact, "does" | "orchestrated" | "stack" | "evidence">;
  label: string;
}[] = [
  { key: "does", label: "What it does" },
  { key: "orchestrated", label: "What I orchestrated" },
  { key: "stack", label: "The stack" },
  { key: "evidence", label: "The evidence" },
];

function DateLine({ item }: { item: Artifact }) {
  if (!item.date && !item.recent) return null;
  return (
    <p className="mt-2 flex flex-wrap items-center gap-3 font-mono text-[13px] text-muted">
      {item.date ? <span>{item.date}</span> : null}
      {item.recent ? (
        <span className="border border-accent/60 px-2 py-0.5 text-[12px] text-accent">
          {artifactsPage.recentLabel}
        </span>
      ) : null}
    </p>
  );
}

function ArtifactBody({ item }: { item: Artifact }) {
  return (
    <dl className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
      {parts.map((part) => (
        <div
          key={part.key}
          className={part.key === "evidence" ? "md:col-span-2" : ""}
        >
          <dt className="text-[14px] font-medium text-accent">{part.label}</dt>
          <dd className="mt-2 max-w-[68ch] text-[16px] leading-relaxed text-muted">
            {item[part.key]}
            {part.key === "evidence" && item.links?.length ? (
              <span className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                {item.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-ink underline decoration-accent/70 underline-offset-4 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                ))}
              </span>
            ) : null}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function ArtifactList() {
  const featured = artifacts.filter((item) => item.featured);
  const rest = artifacts.filter((item) => !item.featured);

  return (
    <div className="mt-16">
      <nav aria-label="Artifact index">
        <ul className="grid grid-cols-1 gap-x-10 gap-y-3 md:grid-cols-2">
          {[...featured, ...rest].map((item) => (
            <li key={item.title}>
              <a
                href={`#${artifactSlug(item.title)}`}
                className="text-[17px] font-medium tracking-tight text-ink transition-colors hover:text-accent md:text-[19px]"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <p className="mt-14 text-[12px] font-medium uppercase tracking-[0.16em] text-muted">
        {artifactsPage.featuredNote}
      </p>

      <div className="mt-6 flex flex-col gap-10">
        {featured.map((item, index) => (
          <Reveal key={item.title} delay={Math.min(index * 0.03, 0.12)}>
            <article
              id={artifactSlug(item.title)}
              className="scroll-mt-24 border border-line bg-bg-elev p-6 md:p-10"
            >
              <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
                {item.title}
              </h2>
              <DateLine item={item} />
              <ArtifactBody item={item} />
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <h2 className="mt-20 text-2xl font-medium tracking-tight md:text-3xl">
          {artifactsPage.moreHeading}
        </h2>
        <p className="mt-3 max-w-[52ch] text-[15px] leading-relaxed text-muted">
          {artifactsPage.moreNote}
        </p>
      </Reveal>

      <div className="mt-8 flex flex-col gap-4">
        {rest.map((item) => (
          <details
            key={item.title}
            id={artifactSlug(item.title)}
            className="group scroll-mt-24 border border-line bg-bg-elev"
          >
            <summary className="flex cursor-pointer list-none flex-wrap items-baseline gap-x-4 gap-y-1 p-6 [&::-webkit-details-marker]:hidden md:px-10 md:py-7">
              <span
                aria-hidden
                className="font-mono text-accent transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
              <span className="text-xl font-medium tracking-tight md:text-2xl">
                {item.title}
              </span>
              {item.date ? (
                <span className="font-mono text-[13px] text-muted">
                  {item.date}
                </span>
              ) : null}
              {item.recent ? (
                <span className="border border-accent/60 px-2 py-0.5 font-mono text-[12px] text-accent">
                  {artifactsPage.recentLabel}
                </span>
              ) : null}
            </summary>
            <div className="px-6 pb-8 md:px-10 md:pb-10">
              <ArtifactBody item={item} />
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
