import type { Command, Ctx } from "../types.js";

const MAP: Record<string, string> = {
  html: "text/html", css: "text/css", js: "text/javascript", mjs: "text/javascript",
  json: "application/json", wasm: "application/wasm", pdf: "application/pdf",
  png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg", gif: "image/gif",
  webp: "image/webp", svg: "image/svg+xml", ico: "image/vnd.microsoft.icon",
  mp4: "video/mp4", webm: "video/webm", mp3: "audio/mpeg", wav: "audio/wav",
  woff: "font/woff", woff2: "font/woff2", ttf: "font/ttf", otf: "font/otf",
  txt: "text/plain", md: "text/markdown", csv: "text/csv", xml: "application/xml",
  yaml: "application/yaml", yml: "application/yaml", zip: "application/zip",
  gz: "application/gzip", tar: "application/x-tar", toml: "application/toml",
};

export function mimeFor(name: string): string | undefined {
  const ext = name.includes(".") ? name.split(".").pop()!.toLowerCase() : name.toLowerCase();
  return MAP[ext];
}

export const cmd: Command = {
  name: "mime",
  summary: "Look up Content-Type for a file extension",
  run({ args, stdin }: Ctx): number {
    const input = (args[0] ?? stdin).trim();
    if (!input) { console.error("usage: devkit mime file.png"); return 1; }
    const t = mimeFor(input);
    if (!t) { console.error("unknown extension: " + input); return 1; }
    console.log(t);
    return 0;
  },
};
