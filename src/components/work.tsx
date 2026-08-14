import Image from "next/image";
import { Reveal } from "@/components/reveal";

const cells = [
  {
    title: "Keep the people you already sold",
    body: "The leak is almost never the front door. It is week two, when nobody calls.",
    image: "/images/redlight.jpg",
    alt: "Empty red light therapy room with a single dark bench",
    wide: true,
  },
  {
    title: "The second touch",
    body: "A welcome call that finds the real goal and puts a plan in their hands.",
    image: "/images/water.jpg",
    alt: "Close view of still water in a steel cold plunge",
    wide: false,
  },
  {
    title: "Revenue already on the floor",
    body: "Memberships and protocols priced on staying, not more walk-ins.",
    image: "/images/sauna.jpg",
    alt: "Hemlock sauna with a black stone bench and a low ember glow",
    wide: false,
  },
  {
    title: "Ops that do not need your mood",
    body: "Queues, scripts, and rails so follow-through is not a personality trait.",
    image: "/images/desk.jpg",
    alt: "A closed black notebook, steel pen, and glass of water on a dark desk",
    wide: false,
  },
  {
    title: "Protocol before modality",
    body: "Sleep, back pain, performance. Match the room to the reason they came.",
    image: "/images/hero-plunge.jpg",
    alt: "Steel plunge tank in a dark concrete room",
    wide: false,
  },
];

export function Work() {
  return (
    <section id="work" className="border-t border-line scroll-mt-20">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.16em] text-muted">
            What I do
          </p>
          <h2 className="max-w-[16ch] text-3xl font-medium tracking-tight md:text-4xl">
            The work that raises the asset
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-3 md:grid-cols-12">
          {cells.map((cell, index) => (
            <Reveal
              key={cell.title}
              delay={index * 0.04}
              className={
                cell.wide
                  ? "h-full md:col-span-7 md:row-span-2"
                  : index === 1 || index === 2
                    ? "h-full md:col-span-5"
                    : "h-full md:col-span-6"
              }
            >
              <article
                className={`group relative isolate h-full overflow-hidden bg-bg-elev ${
                  cell.wide ? "min-h-[340px] md:min-h-[680px]" : "min-h-[280px] md:min-h-[320px]"
                }`}
              >
                <Image
                  src={cell.image}
                  alt={cell.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141618]/88 via-[#141618]/28 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <h3 className="text-xl font-medium tracking-tight text-white md:text-2xl">
                    {cell.title}
                  </h3>
                  <p className="mt-2 max-w-[36ch] text-[14px] leading-relaxed text-white/78">
                    {cell.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
