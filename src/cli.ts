#!/usr/bin/env node
import process from "node:process";
import { getCommand, listCommands } from "./registry.js";
import { readStdin } from "./utils/io.js";

const [, , name, ...args] = process.argv;

async function main(): Promise<number> {
  if (!name || name === "help") {
    console.log("devkit — a Swiss-army CLI for developers\n");
    console.log("Usage: devkit <command> [args]\n");
    console.log("Commands:");
    for (const cmd of listCommands()) {
      console.log(`  ${cmd.name.padEnd(16)} ${cmd.summary}`);
    }
    console.log("\nRun `devkit <command> --help` for details.");
    return 0;
  }

  const cmd = getCommand(name);
  if (!cmd) {
    console.error(`Unknown command: ${name}. Run \`devkit help\`.`);
    return 1;
  }

  const stdin = args.includes("--stdin") || !process.stdin.isTTY
    ? await readStdin()
    : "";
  return cmd.run({ args, stdin });
}

main()
  .then((code) => process.exit(code))
  .catch((err: unknown) => {
    console.error(err instanceof Error ? err.message : String(err));
    process.exit(1);
  });
