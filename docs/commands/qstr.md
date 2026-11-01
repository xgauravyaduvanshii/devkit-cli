# devkit qstr

Parse a URL query string into sorted JSON.

## Usage

    devkit qstr "a=2&b=x&a=1"

## Example

    $ devkit qstr tag=devkit&lang=ts

Expected output includes:

    "lang": "ts"
