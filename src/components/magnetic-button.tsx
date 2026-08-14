"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import type { MouseEvent, ReactNode } from "react";
import { useRef } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function MagneticButton({
  href,
  children,
  variant = "primary",
  className = "",
}: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 16, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 180, damping: 16, mass: 0.3 });

  function onMove(event: MouseEvent<HTMLAnchorElement>) {
    if (reduce || !ref.current) return;
    const box = ref.current.getBoundingClientRect();
    x.set((event.clientX - box.left - box.width / 2) * 0.28);
    y.set((event.clientY - box.top - box.height / 2) * 0.28);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  const styles =
    variant === "primary"
      ? "bg-accent text-accent-ink hover:brightness-110"
      : "border border-line bg-transparent text-ink hover:border-ink";

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={reduce ? undefined : { x: springX, y: springY }}
      className={`inline-flex h-11 items-center justify-center whitespace-nowrap px-5 text-[15px] font-medium transition-[filter,border-color,transform] duration-200 active:scale-[0.98] ${styles} ${className}`}
    >
      {children}
    </motion.a>
  );
}
