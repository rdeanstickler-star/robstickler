import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="text-[14px] text-muted">{site.name}</p>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[14px] text-ink"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
