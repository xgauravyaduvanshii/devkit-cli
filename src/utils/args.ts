export function flagValue(args: string[], flag: string, fallback?: string): string | undefined {
  const i = args.indexOf(flag);
  return i >= 0 ? args[i + 1] ?? fallback : fallback;
}

export function positional(args: string[]): string[] {
  return args.filter((a) => !a.startsWith("--"));
}
