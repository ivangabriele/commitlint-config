# My CommitLint Configuration

[![MIT License][img-license]][lnk-license] [![GitHub Check Workflow Status][img-github]][lnk-github]
[![npm][img-npm]][lnk-npm]

My most commonly used CommitLint configuration.

---

- [Usage](#usage)
- [Contribute](#contribute)

---

## Usage

Run:

```sh
npm i -DE @commitlint/cli @ivangabriele/commitlint-config husky lint-staged
```

or:

```sh
yarn add -DE @commitlint/cli @ivangabriele/commitlint-config husky lint-staged
```

Create `/.husky/commit-msg`:

```sh
[ -n "$CI" ] && exit 0

yarn commitlint --edit "$1"
```

Create `/.husky/pre-commit`:

```sh
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
    "prepare": "husky"
    // ...
  }
  // ...
}
```

## Contribute

Please refer to the [contribution guidelines](./CONTRIBUTING.md) for information on how to contribute to this project.

---

[img-github]:
  https://img.shields.io/github/actions/workflow/status/ivangabriele/commitlint-config/check.yml?branch=main&label=CI&style=for-the-badge
[img-license]: https://img.shields.io/github/license/ivangabriele/commitlint-config?style=for-the-badge
[img-npm]: https://img.shields.io/npm/v/@ivangabriele/commitlint-config?style=for-the-badge
[lnk-github]: https://github.com/ivangabriele/commitlint-config/actions?query=branch%3Amain++
[lnk-license]: https://github.com/ivangabriele/commitlint-config/blob/main/LICENSE
[lnk-npm]: https://www.npmjs.com/package/@ivangabriele/commitlint-config
