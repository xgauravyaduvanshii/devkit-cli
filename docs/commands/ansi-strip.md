# devkit ansi-strip

Remove ANSI escape sequences from text.

## Usage

    devkit ansi-strip <text>   (pipes work too: cat colored.log | devkit ansi-strip)

## Example

    $ devkit ansi-strip [31mred[0m

Expected output includes:

    red
