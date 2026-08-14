import { Reveal } from "@/components/reveal";
import { artifacts, artifactSlug, type Artifact } from "@/content/copy";

const parts: {
  key: keyof Pick<Artifact, "does" | "orchestrated" | "stack" | "evidence">;
  label: string;
}[] = [
  { key: "does", label: "What it does" },
  { key: "orchestrated", label: "What I orchestrated" },
  { key: "stack", label: "The stack" },
  { key: "evidence", label: "The evidence" },
];

export function ArtifactList() {
  return (
    <div className="mt-16">
      <nav aria-label="Artifact index">
        <ul className="grid grid-cols-1 gap-x-10 gap-y-3 md:grid-cols-2">
          {artifacts.map((item) => (
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

      <div className="mt-16 flex flex-col gap-10">
        {artifacts.map((item, index) => (
          <Reveal key={item.title} delay={Math.min(index * 0.03, 0.12)}>
            <article
              id={artifactSlug(item.title)}
              className="scroll-mt-24 border border-line bg-bg-elev p-6 md:p-10"
            >
              <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
                {item.title}
              </h2>
              <dl className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                {parts.map((part) => (
                  <div
                    key={part.key}
                    className={part.key === "evidence" ? "md:col-span-2" : ""}
                  >
                    <dt className="text-[14px] font-medium text-accent">
                      {part.label}
                    </dt>
                    <dd className="mt-2 max-w-[68ch] text-[16px] leading-relaxed text-muted">
                      {item[part.key]}
                      {part.key === "evidence" && item.links?.length ? (
                        <span className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                          {item.links.map((link) => (
                            <a
                              key={link.href}
                              href={link.href}
                              target={
                                link.href.startsWith("http")
                                  ? "_blank"
                                  : undefined
                              }
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
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
