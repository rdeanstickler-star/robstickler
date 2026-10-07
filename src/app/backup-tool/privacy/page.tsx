import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy notice — rclone backup",
  description: "Privacy notice for a private, single-user backup tool.",
  robots: { index: false, follow: false },
};

const points: [string, string][] = [
  ["Who uses it", "Only Rob Stickler, with his own Google account."],
  ["What it can access", "Only the Google Drive files this tool itself creates (Google's “drive.file” permission). It cannot see other files in the Drive."],
  ["What it does", "It encrypts files on Rob's computer, uploads them to Rob's own Google Drive, and checks that they arrived intact."],
  ["What it does not do", "It does not collect, sell, share, or analyze anyone's personal data, and it sends nothing anywhere except Rob's Google Drive."],
  ["Sign-in", "The Google sign-in stays on Rob's computer. Access can be removed at any time at myaccount.google.com/permissions."],
  ["Contact", "hello@robstickler.com"],
];

export default function BackupToolPrivacyPage() {
  return (
    <main id="main">
      <section>
        <div className="mx-auto max-w-[1400px] px-5 pt-16 pb-28 md:px-8 md:pt-20 md:pb-36">
          <h1 className="text-4xl font-medium tracking-tight md:text-5xl">Privacy notice — rclone backup</h1>
          <p className="mt-4 text-[15px] text-muted">Last updated October 7, 2026</p>
          <ul className="mt-10 max-w-[62ch]">
            {points.map(([label, body]) => (
              <li key={label} className="border-t border-line py-5 last:border-b">
                <p className="text-[16px] leading-relaxed"><span className="font-medium">{label}:</span> <span className="text-muted">{body}</span></p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
