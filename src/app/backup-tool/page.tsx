import type { Metadata } from "next";
import Link from "next/link";

// Required by Google for Rob's private backup tool's OAuth app ("rclone backup"). Deliberately unlinked,
// not in the sitemap, and noindex. Added 2026-10-07 with Rob's approval.
export const metadata: Metadata = {
  title: "rclone backup",
  description: "A private, single-user backup tool.",
  robots: { index: false, follow: false },
};

export default function BackupToolPage() {
  return (
    <main id="main">
      <section>
        <div className="mx-auto max-w-[1400px] px-5 pt-16 pb-28 md:px-8 md:pt-20 md:pb-36">
          <h1 className="text-4xl font-medium tracking-tight md:text-5xl">rclone backup</h1>
          <p className="mt-8 max-w-[62ch] text-[17px] leading-relaxed text-muted md:text-[19px]">
            rclone backup is a private, single-user tool. Rob Stickler uses it to copy encrypted backup files
            from his own computer to his own Google Drive. It is not offered to anyone else.
          </p>
          <p className="mt-8 text-[16px]">
            <Link href="/backup-tool/privacy" className="text-ink underline">Privacy notice</Link>
            {" · "}
            <Link href="/backup-tool/terms" className="text-ink underline">Terms of use</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
