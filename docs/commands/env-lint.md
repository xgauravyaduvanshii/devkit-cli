# devkit env-lint

Lint .env content: duplicates, spacing, empty values.

## Usage

    devkit env-lint < .env   (or pass file content as arg)

## Example

    $ API_KEY=abc\nAPI_KEY=def\nBAD KEY=1\n | devkit env-lint

Expected output includes:

    duplicate key: API_KEY
