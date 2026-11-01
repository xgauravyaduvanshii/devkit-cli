# devkit passgen

Generate random passwords/passphrases.

## Usage

    devkit passgen [--length N] [--symbols] [--words N]

## Example

    $ devkit passgen --length 20

Expected output includes:

    (matches /^[A-Za-z0-9]{20}$/)
