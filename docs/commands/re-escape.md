# devkit re-escape

Escape a string for safe use inside a RegExp.

## Usage

    devkit re-escape <text>

## Example

    $ devkit re-escape a.b*c(d)

Expected output includes:

    a\.b\*c\(d\)
