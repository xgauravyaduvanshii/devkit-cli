# devkit json-keys

List all key paths in a JSON document.

## Usage

    devkit json-keys [file-or-input]

## Example

    $ {\"a\":{\"b\":[1]}} | devkit json-keys

Expected output includes:

    a.b[0]
