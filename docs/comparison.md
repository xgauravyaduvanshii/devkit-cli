# Why not five websites?

You can paste your JWT into a browser tab, or your .env into an online formatter.
devkit exists because the browser version of that habit leaks secrets to third parties.

| task | website | devkit |
| --- | --- | --- |
| works offline | no | yes |
| leaks input | yes | never |
| scriptable | rarely | stdin + exit codes |
| auditable | no | MIT, zero deps |

The honest tradeoff: websites render nicer; devkit wins on privacy, automation and CI use.
