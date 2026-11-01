# devkit json-to-yaml

Emit flat JSON objects as YAML.

## Usage

    devkit json-to-yaml   (flat objects only; nested values inline)

## Example

    $ {\"name\":\"devkit\",\"n\":2} | devkit json-to-yaml

Expected output includes:

    name: devkit
