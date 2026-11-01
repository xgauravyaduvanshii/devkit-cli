# Startup benchmark

Measured with hyperfine on a laptop (Node 20, warm cache):

- devkit help             ~38 ms
- devkit uuid             ~41 ms
- echo | devkit json-fmt  ~45 ms

Baseline: node -e 0 is ~30 ms on the same box — devkit adds ~10 ms, all of it module loading.
Keep it that way: no eager fs reads in cli.ts, registry imports stay side-effect free.
