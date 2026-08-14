import { Reveal } from "@/components/reveal";

const steps = [
  {
    verb: "Diagnose",
    body: "I read the books and the calendar. I find where members vanish and where money sits idle.",
  },
  {
    verb: "Install",
    body: "One loop first: every new member gets a second touch. The next loop waits until that one holds.",
  },
  {
    verb: "Measure",
    body: "Called versus uncalled rebooking. Revenue versus the ceiling already in the data. One number. A date.",
  },
];

export function Method() {
  return (
    <section id="method" className="border-t border-line scroll-mt-20">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <h2 className="max-w-[12ch] text-3xl font-medium tracking-tight md:text-5xl">
            How the work actually happens
          </h2>
        </Reveal>

        <ol className="mt-16">
          {steps.map((step, index) => (
            <li
              key={step.verb}
              className="border-t border-line py-10 last:border-b last:pb-10"
            >
              <Reveal delay={index * 0.05}>
                <div>
                  <h3 className="text-3xl font-medium tracking-tight text-accent md:text-4xl">
                    {step.verb}
                  </h3>
                  <p className="mt-3 max-w-[52ch] text-[16px] leading-relaxed text-muted">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
