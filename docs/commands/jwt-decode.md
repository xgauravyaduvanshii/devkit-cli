# devkit jwt-decode

Decode a JWT header and payload (no verification).

## Usage

    devkit jwt-decode <token>   # shows claims; does NOT check signature

## Example

    $ devkit jwt-decode eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZGEiLCJleHAiOjE4OTM0NTYwMDB9.abc

Expected output includes:

    "sub": "ada"
