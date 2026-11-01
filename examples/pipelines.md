# Composition examples

Decode the JWT your CI just printed and pretty-check its expiry:

    devkit jwt-decode "$TOKEN" | devkit json-fmt

Hash a release artifact and pin the size next to it:

    cat dist.tgz | devkit checksum
    devkit sizeunits $(stat -c%s dist.tgz)

Clean colored logs for a bug report:

    devkit ansi-strip < ci.log > report.txt

Everything is stdin-friendly, so any of these compose with grep/awk/sed unchanged.
