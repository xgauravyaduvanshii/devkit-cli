# devkit json-fmt

Pretty-print or minify JSON.

## Usage

    devkit json-fmt [--minify] [--indent N] [file-or-input]

## Example

    $ {\"b\":2,\"a\":{\"c\":[1,2]}} | devkit json-fmt

Expected output includes:

    "c": [1, 2]
