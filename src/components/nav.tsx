"use client";

import { List, X } from "@phosphor-icons/react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { site } from "@/lib/site";
import { z } from "@/lib/z";

const links = [
  { href: "#work", label: "Work" },
  { href: "#method", label: "Method" },
  { href: "#about", label: "About" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="glass-nav sticky top-0 border-b border-line/70 bg-bg/78 backdrop-blur-md"
      style={{ zIndex: z.nav }}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:px-8">
        <a href="#top" className="text-[15px] font-medium tracking-tight">
          {site.name}
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-[14px] font-medium text-ink transition-colors hover:text-accent"
          >
            {site.cta}
          </a>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="grid size-9 place-items-center"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-1 text-[16px]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="py-1 text-[16px] font-medium"
              onClick={() => setOpen(false)}
            >
              {site.cta}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
