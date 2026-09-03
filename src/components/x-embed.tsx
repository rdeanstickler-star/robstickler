"use client";

import { type ReactNode, useEffect, useRef } from "react";

declare global {
  interface Window {
    twttr?: { widgets: { load: (element?: HTMLElement) => void } };
  }
}

export function XEmbed({ url, children }: { url: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const quote = ref.current?.querySelector("blockquote");
    if (quote && document.documentElement.classList.contains("dark")) {
      quote.setAttribute("data-theme", "dark");
    }

    if (window.twttr?.widgets) {
      window.twttr.widgets.load(ref.current ?? undefined);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div ref={ref} className="mt-8 max-w-[560px]">
      <blockquote className="twitter-tweet" data-dnt="true">
        {children}
        <a href={url}>{url}</a>
      </blockquote>
    </div>
  );
}
