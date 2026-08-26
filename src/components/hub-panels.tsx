"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { hub } from "@/content/copy";

type Tile = {
  href: string;
  title: string;
  sentence: string;
  image: string;
  alt: string;
  span: string;
  height: string;
  sizes: string;
  lead?: boolean;
  priority?: boolean;
};

const tiles: Tile[] = [
  {
    href: "/artifacts",
    title: hub.panels.artifacts.title,
    sentence: hub.panels.artifacts.sentence,
    image: "/images/photos/photo-03.jpg",
    alt: "A full moon in a black sky",
    span: "md:col-span-7 md:row-span-2",
    height: "min-h-[340px] md:min-h-[652px]",
    sizes: "(min-width: 768px) 58vw, 100vw",
    lead: true,
    priority: true,
  },
  {
    href: "/work",
    title: hub.panels.work.title,
    sentence: hub.panels.work.sentence,
    image: "/images/work/plunge-sign.jpg",
    alt: "A storefront sign laid flat on the pavement before installation",
    span: "md:col-span-5",
    height: "min-h-[240px] md:min-h-[320px]",
    sizes: "(min-width: 768px) 42vw, 100vw",
  },
  {
    href: "/how-i-operate",
    title: hub.panels.operate.title,
    sentence: hub.panels.operate.sentence,
    image: "/images/work/rei-board.jpg",
    alt: "A classroom whiteboard headed Welcome to Basic Training",
    span: "md:col-span-5",
    height: "min-h-[240px] md:min-h-[320px]",
    sizes: "(min-width: 768px) 42vw, 100vw",
  },
  {
    href: "/photographs",
    title: hub.panels.photographs.title,
    sentence: hub.panels.photographs.sentence,
    image: "/images/photos/photo-01.jpg",
    alt: "A lenticular cloud capping a snow-covered mountain at dusk",
    span: "md:col-span-6",
    height: "min-h-[240px] md:min-h-[320px]",
    sizes: "(min-width: 768px) 50vw, 100vw",
  },
  {
    href: "/studios",
    title: hub.panels.studios.title,
    sentence: hub.panels.studios.sentence,
    image: "/images/work/plunge-red-2024.jpg",
    alt: "A therapy room lit entirely in deep red light",
    span: "md:col-span-6",
    height: "min-h-[240px] md:min-h-[320px]",
    sizes: "(min-width: 768px) 50vw, 100vw",
  },
];

export function HubPanels() {
  return (
    <div className="mt-16 grid grid-cols-1 items-stretch gap-3 md:grid-cols-12">
      {tiles.map((tile, index) => (
        <Reveal
          key={tile.href}
          className={`h-full ${tile.span}`}
          delay={Math.min(index * 0.04, 0.16)}
        >
          <Link
            href={tile.href}
            className={`group relative isolate flex h-full flex-col justify-end overflow-hidden border border-line bg-bg-elev p-6 transition-colors hover:border-ink md:p-8 ${tile.height}`}
          >
            <Image
              src={tile.image}
              alt={tile.alt}
              fill
              sizes={tile.sizes}
              priority={tile.priority}
              className="-z-20 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#141618]/88 via-[#141618]/40 to-[#141618]/10" />
            <h2
              className={`font-medium tracking-tight text-white ${
                tile.lead ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"
              }`}
            >
              {tile.title}
            </h2>
            <p
              className={`mt-3 max-w-[42ch] leading-relaxed text-white/78 ${
                tile.lead ? "text-[16px] md:text-[17px]" : "text-[15px]"
              }`}
            >
              {tile.sentence}
            </p>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
