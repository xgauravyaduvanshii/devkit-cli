# FAQ

**Why no dependencies?** A toolkit people install globally must not drag 400 packages in.
**Can I import commands as a library?** Yes — every pure transform is exported (formatJson, keyPaths, ...).
**Windows?** Everything is Node built-ins plus string math; PowerShell works with the same stdin piping.
**JSON5/NDJSON?** Planned; see docs/roadmap.md.
