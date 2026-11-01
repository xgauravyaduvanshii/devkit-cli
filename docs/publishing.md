# Publishing

1. Update CHANGELOG.md and bump package.json version.
2. Tag `vX.Y.Z` and create a GitHub release — the release workflow runs `npm publish`.
3. Smoke-test the published tarball: `npm i -g @xgyadav/devkit-cli && devkit json-fmt <<< '{}'`.

The npm token lives in repository secrets (NPM_TOKEN), scoped to the @xgyadav org.
