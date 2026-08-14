"use client";

import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { hub } from "@/content/copy";

export function HubPanels() {
  return (
    <div className="mt-16 grid grid-cols-1 items-stretch gap-3 md:grid-cols-12">
      <Reveal className="h-full md:col-span-7 md:row-span-2">
        <Panel
          href="/artifacts"
          title={hub.panels.artifacts.title}
          sentence={hub.panels.artifacts.sentence}
          lead
        />
      </Reveal>
      <Reveal className="h-full md:col-span-5" delay={0.05}>
        <Panel
          href="/interests"
          title={hub.panels.interests.title}
          sentence={hub.panels.interests.sentence}
        />
      </Reveal>
      <Reveal className="h-full md:col-span-5" delay={0.08}>
        <Panel
          href="/studios"
          title={hub.panels.studios.title}
          sentence={hub.panels.studios.sentence}
        />
      </Reveal>
      <Reveal className="h-full md:col-span-12" delay={0.1}>
        <Panel
          href="/doorfront"
          title={hub.panels.doorfront.title}
          sentence={hub.panels.doorfront.sentence}
          wide
        />
      </Reveal>
    </div>
  );
}

function Panel({
  href,
  title,
  sentence,
  lead = false,
  wide = false,
}: {
  href: string;
  title: string;
  sentence: string;
  lead?: boolean;
  wide?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group flex h-full flex-col justify-end border border-line bg-bg-elev p-6 transition-colors hover:border-ink md:p-8 ${
        lead
          ? "min-h-[340px] md:min-h-[680px]"
          : wide
            ? "min-h-[200px] md:min-h-[240px]"
            : "min-h-[240px] md:min-h-[320px]"
      }`}
    >
      <h2
        className={`font-medium tracking-tight ${
          lead ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-3 max-w-[42ch] leading-relaxed text-muted ${
          lead ? "text-[16px] md:text-[17px]" : "text-[15px]"
        }`}
      >
        {sentence}
      </p>
    </Link>
  );
}
