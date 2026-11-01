# devkit csv-to-json

Convert CSV (with header) to a JSON array.

## Usage

    devkit csv-to-json [--sep CHAR]

## Example

    $ id,name\n1,ada\n2,linus\n | devkit csv-to-json

Expected output includes:

    "name": "ada"
