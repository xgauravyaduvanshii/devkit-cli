# Troubleshooting

**`devkit: command not found`** — global bin not on PATH; check `npm prefix -g`/bin.
**Piped stdin empty** — some shells need `cat file | devkit x` when a TTY probe misfires.
**Colored output breaks scripts** — set NO_COLOR=1 or pipe through ansi-strip.
**Port helpers need Node 18+** — engines enforce it; upgrade Node, do not copy dist/ around.
