export function isMailto(value: string): boolean {
  return value.includes("@") && !value.includes("[[");
}
