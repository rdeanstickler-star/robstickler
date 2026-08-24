export const site = {
  name: "Rob Stickler",
  title: "Rob Stickler",
  description:
    "Operator. Seventeen years at REI Co-op, a restaurant P&L before that, and a wellness studio end to end. Now running AI systems that do the work.",
  linkedin: "https://www.linkedin.com/in/rob-stickler-1466b931",
  handle: "BadMojoNation",
  cta: "Start a conversation",
  workCta: "See the work",
} as const;

function normalizeUrl(value: string): string {
  const trimmed = value.trim();
  const withProtocol = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;
  return withProtocol.replace(/\/$/, "");
}

export function getSiteUrl(): string {
  const override = process.env.NEXT_PUBLIC_SITE_URL;
  if (override?.trim()) {
    return normalizeUrl(override);
  }

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (production?.trim()) {
    return normalizeUrl(production);
  }

  const deployment = process.env.VERCEL_URL;
  if (deployment?.trim()) {
    return normalizeUrl(deployment);
  }

  return "https://robstickler.vercel.app";
}
