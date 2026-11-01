# Hash throughput

sha256 of 10 MB via stdin (same hardware):

- devkit hash       ~28 ms
- sha256sum         ~24 ms

Node createHash is within 15% of coreutils; good enough to avoid any native addon.
