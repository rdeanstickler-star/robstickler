"use client";

import Link from "next/link";
import { identity } from "@/content/copy";
import { isMailto } from "@/lib/email";
import { site } from "@/lib/site";

export function Footer() {
  const contactHref = "/#contact";

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="text-[14px] text-muted">{site.name}</p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px]">
          <Link href={contactHref} className="text-ink">
            {identity.conversation}
          </Link>
          {isMailto(identity.email) ? (
            <a href={`mailto:${identity.email}`} className="text-ink">
              {identity.email}
            </a>
          ) : (
            <span className="text-muted">{identity.email}</span>
          )}
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink"
          >
            {identity.linkedinLabel}
          </a>
          <a href={identity.resumeHref} className="text-ink">
            {identity.resumeLabel}
          </a>
        </div>
      </div>
    </footer>
  );
}
