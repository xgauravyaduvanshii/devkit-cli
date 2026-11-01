# devkit yaml-to-json

Convert simple flat YAML to JSON.

## Usage

    devkit yaml-to-json   (subset: scalars, one nesting level, inline lists)

## Example

    $ name: devkit\ntags: [a, b]\n | devkit yaml-to-json

Expected output includes:

    "tags"
