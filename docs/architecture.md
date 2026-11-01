# Architecture

    cli.ts        arg parsing, stdin capture, exit codes
    registry.ts   name -> Command map (one import per command)
    commands/     pure transforms + thin run(ctx) adapters
    utils/        io, args, colors, logger, config

Design rules:
- Commands export both the `cmd` object and their pure functions for reuse as a library.
- No dependency on argv shape beyond flags; stdin is the composition surface.
- Exit codes: 0 success, 1 user/input error. Never silently swallow parse failures.
