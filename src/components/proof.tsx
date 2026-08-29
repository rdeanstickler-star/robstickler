import { Reveal } from "@/components/reveal";

const questions = [
  {
    index: "01",
    ask: "How many members joined in the last year, and how many are still active this month?",
    read: "Most of the loss never walks out the front door. It sits in the booking data, unworked.",
  },
  {
    index: "02",
    ask: "What does one member who stays pay you over their life, next to one drop-in?",
    read: "Retention is where the money is. Acquisition gets the attention anyway.",
  },
  {
    index: "03",
    ask: "What was your best month, and what are you running at now?",
    read: "The gap between those two numbers is the job.",
  },
];

export function Proof() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <h2 className="max-w-[18ch] text-3xl font-medium tracking-tight md:text-4xl">
            Three questions your books already answer
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-3">
          {questions.map((question, index) => (
            <Reveal key={question.index} delay={index * 0.06}>
              <p className="font-mono text-4xl tracking-tight text-accent md:text-5xl">
                {question.index}
              </p>
              <p className="mt-4 max-w-[36ch] text-[16px] leading-relaxed">
                {question.ask}
              </p>
              <p className="mt-3 max-w-[36ch] text-[15px] leading-relaxed text-muted">
                {question.read}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-14 max-w-[52ch] text-[16px] leading-relaxed text-muted md:text-[17px]">
            I ran a studio for three and a half years. I know where these
            answers hide, and what to do once you have them.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
