# devkit diff-lines

Line diff between two texts separated by ::.

## Usage

    devkit diff-lines "a::b"  (also reads stdin a::b)

## Example

    $ devkit diff-lines a,b::a,c

Expected output includes:

    -b
