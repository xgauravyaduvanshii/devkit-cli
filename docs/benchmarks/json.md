# JSON formatting throughput

Parsing + pretty-printing 5 MB pretty JSON:

- devkit json-fmt   ~180 ms
- jq .              ~140 ms

V8 parse is the bottleneck, not our walk. If you routinely format >50 MB, use jq; devkit targets config-sized documents.
