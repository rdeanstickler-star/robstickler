import { Reveal } from "@/components/reveal";

const stats = [
  {
    value: "61-22",
    label: "Members left sitting in the data. The leak was not the front door.",
  },
  {
    value: "$1,883",
    label: "Lifetime value of one member. Forty drop-ins, or one person who stays.",
  },
  {
    value: "$20.7k",
    label: "Monthly ceiling already proven. The floor was running at $8.8k.",
  },
];

export function Proof() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <h2 className="max-w-[18ch] text-3xl font-medium tracking-tight md:text-4xl">
            What twenty months of one studio&apos;s books actually said
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-12">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.value}
              delay={index * 0.06}
              className={index === 0 ? "md:col-span-12" : "md:col-span-6"}
            >
              <p
                className={`font-mono tracking-tight text-accent ${
                  index === 0 ? "text-5xl md:text-7xl" : "text-4xl md:text-5xl"
                }`}
              >
                {stat.value}
              </p>
              <p className="mt-4 max-w-[36ch] text-[15px] leading-relaxed text-muted">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
