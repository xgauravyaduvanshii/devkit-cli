# Contributing

1. Pick or propose a command (issue templates help).
2. Add `src/commands/<name>.ts` implementing `Command` from `src/types.ts`.
3. Register it in `src/registry.ts`, add a smoke test under `tests/commands/` and a page under `docs/commands/`.
4. `npx tsc --noEmit && npx vitest run` before pushing.

Rules: no runtime dependencies for pure transforms, stdin always supported, exit 0 on success / 1 on user error.
