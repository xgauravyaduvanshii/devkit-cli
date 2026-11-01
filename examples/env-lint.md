# env-lint — worked example

    printf "API_KEY=abc\nAPI_KEY=def\nBAD KEY=1\n" | devkit env-lint 

Output contains: "duplicate key: API_KEY"

More in ../docs/commands/env-lint.md
