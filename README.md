# My CommitLint Configuration

[![License][img-license]][lnk-license] [![NPM Version][img-npm]][lnk-npm]

My most commonly used CommitLint configuration.

## Usage

Run:

```sh
yarn add -DE @commitlint/cli @ivangabriele/commitlint-config husky lint-staged
```

Create `/.husky/commit-msg`:

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

[ -n "$CI" ] && exit 0

yarn commitlint --edit "$1"
```

Create `/.husky/pre-commit`:

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

[ -n "$CI" ] && exit 0

yarn lint-staged
```

Give them execution rights:

```sh
chmod +x .husky/commit-msg .husky/pre-commit
```

Create `/.commitlintrc`:

```json
{
  "$schema": "https://json.schemastore.org/commitlintrc",
  "extends": ["@ivangabriele/commitlint-config"]
}
```

Update `/package.json`:

```json
{
  // ...
  "scripts": {
    // ...
    "prepare": "husky install"
    // ...
  },
  // ...
  "//": "https://github.com/okonet/lint-staged/issues/825#issuecomment-674575655",
  "lint-staged": {
    "*.{json,md,yaml,yml}": "prettier --write",
    "*.{js,jsx,ts,tsx}": ["yarn eslint --ext js,jsx,ts,tsx", "bash -c 'yarn test:type'"]
  }
  // ...
}
```

---

[img-license]: https://img.shields.io/github/license/ivangabriele/commitlint-config?style=flat-square
[img-npm]: https://img.shields.io/npm/v/@ivangabriele/commitlint-config?style=flat-square
[lnk-license]: https://github.com/ivangabriele/commitlint-config/blob/main/LICENSE
[lnk-npm]: https://www.npmjs.com/package/@ivangabriele/commitlint-config
