# My CommitLint Configuration

[![License][img-license]][lnk-license] [![NPM Version][img-npm]][lnk-npm]

My most commonly used CommitLint configuration.

## Usage

Run:

```sh
yarn add -DE @ivangabriele/commitlint-config
npx install-peerdeps -D @ivangabriele/commitlint-config
```

or:

```sh
npm i -DE @ivangabriele/commitlint-config
npx install-peerdeps -D @ivangabriele/commitlint-config
```

Then extend it in your `.commitlintrc`:

```json
{
  "extends": ["@ivangabriele/commitlint-config"]
}
```

And install it as a `commit-msg` hook via husky:

```sh
npm i -DE husky
npx husky add .husky/commit-msg 'npx commitlint --edit "$1"'
```

or:

```sh
yarn add -DE husky
yarn husky add .husky/commit-msg 'yarn commitlint --edit "$1"'
```

---

[img-license]: https://img.shields.io/github/license/ivangabriele/commitlint-config?style=flat-square
[img-npm]: https://img.shields.io/npm/v/@ivangabriele/commitlint-config?style=flat-square
[lnk-license]: https://github.com/ivangabriele/commitlint-config/blob/main/LICENSE
[lnk-npm]: https://www.npmjs.com/package/@ivangabriele/commitlint-config
