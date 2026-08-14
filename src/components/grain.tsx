import { z } from "@/lib/z";

export function Grain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 mix-blend-overlay opacity-[0.11] dark:opacity-[0.16]"
      style={{
        zIndex: z.grain,
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>")`,
      }}
    />
  );
}
