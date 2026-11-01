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
- `json-fmt` — Pretty-print or minify JSON ([docs](docs/commands/json-fmt.md))
- `json-keys` — List all key paths in a JSON document ([docs](docs/commands/json-keys.md))
- `yaml-to-json` — Convert simple flat YAML to JSON ([docs](docs/commands/yaml-to-json.md))
- `json-to-yaml` — Emit flat JSON objects as YAML ([docs](docs/commands/json-to-yaml.md))
- `csv-to-json` — Convert CSV (with header) to a JSON array ([docs](docs/commands/csv-to-json.md))
- `jwt-decode` — Decode a JWT header and payload (no verification) ([docs](docs/commands/jwt-decode.md))
- `uuid` — Generate RFC 4122 v4 UUIDs ([docs](docs/commands/uuid.md))
- `ulid` — Generate a ULID (Crockford base32, sortable) ([docs](docs/commands/ulid.md))
