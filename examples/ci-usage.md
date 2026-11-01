# devkit in CI

Pin the version, then use env-lint as a cheap pre-job gate:

    - run: npx @xgyadav/devkit-cli@0.1 env-lint < .env.ci && echo env ok

checksum gives you an artifact fingerprint without new tooling:

    - run: cat $ARTIFACT | npx @xgyadav/devkit-cli@0.1 checksum | tee build.sha
    - uses: actions/upload-artifact@v4
      with: { name: build.sha, path: build.sha }

Exit codes are CI-friendly: 0 success, 1 input error, so && chaining works.
