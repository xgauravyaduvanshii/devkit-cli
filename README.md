# devkit-cli

A Swiss-army CLI toolkit for everyday developer tasks. One binary, no ceremony.

`devkit` bundles small, fast, well-tested commands for the things you do every day:
formatting JSON, decoding JWTs, generating UUIDs/ULIDs, converting between YAML/CSV/JSON,
explaining cron expressions, bumping semver versions, hashing files and more.

## Status

This project is being built incrementally — commands land one at a time with tests and docs.
Check the [command index](docs/commands.md) for what is available today.

## Install

```bash
npm install -g @xgyadav/devkit-cli
```

## Usage

```bash
devkit <command> [args]

# examples
devkit json-fmt < payload.json
devkit jwt-decode eyJhbGciOi...
devkit uuid
```

## Why

Instead of reaching for 15 random online tools (and pasting sensitive data into a browser),
devkit does it locally, offline, from your terminal. Every command is a pure module with
unit tests, so you can also import them as a library.

## License

MIT
