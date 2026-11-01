# Command index

Every command ships with a smoke test in tests/commands and a page in docs/commands/.

- [`json-fmt`](commands/json-fmt.md) — Pretty-print or minify JSON
- [`json-keys`](commands/json-keys.md) — List all key paths in a JSON document
- [`yaml-to-json`](commands/yaml-to-json.md) — Convert simple flat YAML to JSON
- [`json-to-yaml`](commands/json-to-yaml.md) — Emit flat JSON objects as YAML
- [`csv-to-json`](commands/csv-to-json.md) — Convert CSV (with header) to a JSON array
- [`jwt-decode`](commands/jwt-decode.md) — Decode a JWT header and payload (no verification)
- [`uuid`](commands/uuid.md) — Generate RFC 4122 v4 UUIDs
- [`ulid`](commands/ulid.md) — Generate a ULID (Crockford base32, sortable)
- [`slugify`](commands/slugify.md) — Turn any text into a URL-safe slug
- [`case-conv`](commands/case-conv.md) — Convert between camelCase, snake_case, kebab-case, PascalCase
- [`b64`](commands/b64.md) — Base64 encode/decode (also base64url)
- [`hash`](commands/hash.md) — Hash text or stdin with sha256/sha1/md5
- [`passgen`](commands/passgen.md) — Generate random passwords/passphrases
- [`dateconv`](commands/dateconv.md) — Convert between unix timestamps and ISO 8601
- [`cron-explain`](commands/cron-explain.md) — Explain a 5-field cron expression in plain English
