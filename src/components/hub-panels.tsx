"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { hub } from "@/content/copy";

export function HubPanels() {
  return (
    <div className="mt-16 grid grid-cols-1 items-stretch gap-3 md:grid-cols-12">
      <Reveal className="h-full md:col-span-7 md:row-span-3">
        <Panel
          href="/artifacts"
          title={hub.panels.artifacts.title}
          sentence={hub.panels.artifacts.sentence}
          image="/images/desk.jpg"
          alt="A closed black notebook, steel pen, and glass of water on a dark desk"
          lead
        />
      </Reveal>
      <Reveal className="h-full md:col-span-5" delay={0.05}>
        <Panel
          href="/interests"
          title={hub.panels.interests.title}
          sentence={hub.panels.interests.sentence}
          image="/images/harbor-sunrise.jpg"
          alt="Sunrise over the Dana Point harbor from the bluff top, marina below"
        />
      </Reveal>
      <Reveal className="h-full md:col-span-5" delay={0.08}>
        <Panel
          href="/studios"
          title={hub.panels.studios.title}
          sentence={hub.panels.studios.sentence}
          image="/images/water.jpg"
          alt="Close view of still water in a steel cold plunge"
        />
      </Reveal>
      <Reveal className="h-full md:col-span-5" delay={0.1}>
        <Panel
          href="/doorfront"
          title={hub.panels.doorfront.title}
          sentence={hub.panels.doorfront.sentence}
          compact
        />
      </Reveal>
    </div>
  );
}

function Panel({
  href,
  title,
  sentence,
  image,
  alt,
  lead = false,
  compact = false,
}: {
  href: string;
  title: string;
  sentence: string;
  image?: string;
  alt?: string;
  lead?: boolean;
  compact?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group relative isolate flex h-full flex-col justify-end overflow-hidden border border-line bg-bg-elev p-6 transition-colors hover:border-ink md:p-8 ${
        lead
          ? "min-h-[340px] md:min-h-[680px]"
          : compact
            ? "min-h-[160px] md:min-h-[200px]"
            : "min-h-[240px] md:min-h-[320px]"
      }`}
    >
      {image ? (
        <>
          <Image
            src={image}
            alt={alt ?? ""}
            fill
            sizes={lead ? "(min-width: 768px) 58vw, 100vw" : "(min-width: 768px) 42vw, 100vw"}
            priority={lead}
            className="-z-20 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#141618]/88 via-[#141618]/40 to-[#141618]/12" />
        </>
      ) : null}
      <h2
        className={`font-medium tracking-tight ${
          image ? "text-white" : ""
        } ${lead ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"}`}
      >
        {title}
      </h2>
      <p
        className={`mt-3 max-w-[42ch] leading-relaxed ${
          image ? "text-white/78" : "text-muted"
        } ${lead ? "text-[16px] md:text-[17px]" : "text-[15px]"}`}
      >
        {sentence}
      </p>
    </Link>
  );
}
