import Image from "next/image";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="about" className="border-t border-line scroll-mt-20">
      <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
        <Image
          src="/images/coast.jpg"
          alt="Overcast Southern California coastline, rock and pale water"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <h2 className="max-w-[14ch] text-3xl font-medium tracking-tight md:text-4xl">
            I ran the rooms. Now I use them.
          </h2>
          <div className="mt-8 max-w-[62ch] space-y-5 text-[16px] leading-relaxed text-muted md:text-[17px]">
            <p>
              I operated Plunge Performance & Recovery in Dana Point for twenty
              months. Staffing, scheduling, sales, the site, the numbers. That
              chapter is closed; the operating data came with me and it is mine
              to show. Before that, twenty-three years running teams, P&L, and
              customer experience.
            </p>
            <p>
              I use cold, heat, and light every day. That is not a brand
              posture. It is how I know whether a protocol is something a real
              person will keep doing.
            </p>
            <p>
              I design the system and I talk to the member. I do not pretend to
              be the person writing the code by hand. I am the operator who
              makes sure the work happens.
            </p>
            <p>
              This page claims one studio&apos;s books and what I learned
              running them — not client results, because there are not any
              yet. Full-time operating work is what I am built for and what
              comes first; consulting runs alongside it when it fits. If there
              is ever a client result to show, it will be here.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
