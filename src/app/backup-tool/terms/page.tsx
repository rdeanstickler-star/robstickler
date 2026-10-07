import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of use — rclone backup",
  description: "Terms of use for a private, single-user backup tool.",
  robots: { index: false, follow: false },
};

export default function BackupToolTermsPage() {
  return (
    <main id="main">
      <section>
        <div className="mx-auto max-w-[1400px] px-5 pt-16 pb-28 md:px-8 md:pt-20 md:pb-36">
          <h1 className="text-4xl font-medium tracking-tight md:text-5xl">Terms of use — rclone backup</h1>
          <p className="mt-4 text-[15px] text-muted">Last updated October 7, 2026</p>
          <p className="mt-10 max-w-[62ch] text-[17px] leading-relaxed text-muted">
            rclone backup is a personal tool for Rob Stickler&apos;s own use. It is not a service and is not offered
            to the public, and no one else is authorized to use it. It is provided as is, without warranty.
          </p>
          <p className="mt-6 text-[16px]">Contact: hello@robstickler.com</p>
        </div>
      </section>
    </main>
  );
}
