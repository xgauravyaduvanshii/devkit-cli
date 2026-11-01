# devkit checksum

SHA-256 checksum plus byte count for piped content.

## Usage

    devkit checksum < file   (or pass text as argument)

## Example

    $ abc | devkit checksum

Expected output includes:

    ba7816bf8f01cfea 3 bytes
