# No telemetry — ever

devkit collects nothing: no analytics, no update pings, no feature-flag fetches.
The CLI has no network code paths at all; npm audit on the published package shows zero dependencies to audit.

If telemetry is ever added (we do not plan to), it ships behind an explicit opt-in flag, documented here first.
