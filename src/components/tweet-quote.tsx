import Image from "next/image";
import { endorsement } from "@/content/copy";

const systemStack =
  '-apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

export function TweetQuote() {
  return (
    <a
      href={endorsement.href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-10 block max-w-[560px] rounded-2xl border border-[#cfd9de] bg-white p-6 text-[#0f1419] transition-shadow hover:shadow-lg"
      style={{ fontFamily: systemStack }}
      aria-label="Post by Uncle Bob Martin on X. Opens the original post."
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src="/images/unclebob.jpg"
            alt="Uncle Bob Martin's avatar, a pen caricature"
            width={48}
            height={48}
            className="rounded-full"
          />
          <div className="leading-tight">
            <p className="flex items-center gap-1 text-[15px] font-bold">
              {endorsement.name}
              <svg
                viewBox="0 0 24 24"
                aria-label="Verified account"
                className="h-[18px] w-[18px] fill-[#1d9bf0]"
              >
                <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z" />
              </svg>
            </p>
            <p className="text-[15px] text-[#536471]">{endorsement.handle}</p>
          </div>
        </div>
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-[#0f1419]">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </div>
      <div className="mt-4 flex flex-col gap-4 text-[16px] leading-normal">
        {endorsement.quote.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <p className="mt-4 text-[14px] text-[#536471]">{endorsement.date}</p>
    </a>
  );
}
