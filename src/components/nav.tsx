"use client";

import { List, X } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { routes } from "@/content/copy";
import { site } from "@/lib/site";
import { z } from "@/lib/z";

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className="glass-nav sticky top-0 border-b border-line/70 bg-bg/78 backdrop-blur-md"
      style={{ zIndex: z.nav }}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:px-8">
        <Link href="/" className="text-[15px] font-medium tracking-tight">
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {routes.map((link) => {
            const current = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={current ? "page" : undefined}
                className={`text-[14px] transition-colors hover:text-ink ${
                  current ? "font-medium text-ink" : "text-muted"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
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
            {routes.map((link) => {
              const current = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={current ? "page" : undefined}
                  className={`py-1 text-[16px] ${current ? "font-medium" : ""}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
