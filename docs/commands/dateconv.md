# devkit dateconv

Convert between unix timestamps and ISO 8601.

## Usage

    devkit dateconv <unix|iso-string> [--utc]

With `--utc`, an extra line prints the timestamp as `YYYY-MM-DD HH:MM:SS UTC`
for at-a-glance reading without parsing the ISO string.

## Example

    $ devkit dateconv 1730000000 --utc

Expected output includes:

    2024-10-27
    utc:   2024-10-27 03:33:20 UTC
