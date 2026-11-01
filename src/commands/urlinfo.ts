import type { Command, Ctx } from "../types.js";

export const cmd: Command = {
  name: "urlinfo",
  summary: "Break a URL into its components",
  run({ args, stdin }: Ctx): number {
    const raw = (args[0] ?? stdin).trim();
    if (!raw) { console.error("usage: devkit urlinfo <url>"); return 1; }
    try {
      const u = new URL(raw);
      console.log("scheme: " + u.protocol.replace(/:$/, ""));
      console.log("host:   " + u.hostname);
      console.log("port:   " + (u.port || "default"));
      console.log("path:   " + u.pathname);
      console.log("query:  " + (u.search || "(none)"));
      console.log("hash:   " + (u.hash || "(none)"));
      return 0;
    } catch {
      console.error("invalid URL: " + raw);
      return 1;
    }
  },
};
