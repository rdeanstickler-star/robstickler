"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { MagneticButton } from "@/components/magnetic-button";
import { site } from "@/lib/site";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="min-h-[100dvh]">
      <div className="mx-auto grid min-h-[calc(100dvh-4rem)] max-w-[1400px] grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-5 pt-16 pb-10 md:px-8 md:pt-20 lg:pb-16">
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="reveal max-w-[16ch] text-4xl font-medium tracking-tight text-balance md:text-5xl xl:text-6xl xl:leading-[1.05]"
          >
            Your studio is worth more than it is running at.
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="reveal mt-5 max-w-[36ch] text-base leading-relaxed text-muted md:text-[17px]"
          >
            I ran the floor and the books at one studio for three and a half
            years. Everything on this page comes from what running it taught me.
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="reveal mt-8 flex flex-wrap items-center gap-3"
          >
            <MagneticButton href="#contact">{site.cta}</MagneticButton>
            <MagneticButton href="#work" variant="ghost">
              {site.workCta}
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="reveal relative aspect-[4/3] w-full lg:aspect-auto lg:min-h-full"
        >
          <Image
            src="/images/hero-plunge.jpg"
            alt="Empty concrete plunge room with a steel cold tank in a shaft of light"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
