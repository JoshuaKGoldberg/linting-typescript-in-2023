<h1 align="center">Linting TypeScript in 2023 Code</h1>

<p align="center">Demo app for linting React and TypeScript with typescript-eslint, formed from my <a href="https://github.com/JoshuaKGoldberg/template-typescript-node-package">template-typescript-node-package</a>. ✨</p>

<p align="center">
	<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
	<a href="#contributors">
		<img alt="All Contributors" src="https://img.shields.io/badge/all_contributors-1-21bb42.svg" />
	</a>
	<!-- ALL-CONTRIBUTORS-BADGE:END -->
	<img alt="Code Style: Prettier" src="https://img.shields.io/badge/code_style-prettier-21bb42.svg" />
	<a href="https://github.com/JoshuaKGoldberg/linting-typescript-in-2023/blob/main/.github/CODE_OF_CONDUCT.md">
		<img alt="Contributor Covenant" src="https://img.shields.io/badge/code_of_conduct-contributor_covenant-21bb42" />
	</a>
	<a href="https://github.com/JoshuaKGoldberg/linting-typescript-in-2023/blob/main/LICENSE.md">
	    <img alt="License: MIT" src="https://img.shields.io/github/license/JoshuaKGoldberg/linting-typescript-in-2023?color=21bb42">
    </a>
	<a href="https://github.com/sponsors/JoshuaKGoldberg">
    	<img alt="Sponsor: On GitHub" src="https://img.shields.io/badge/sponsor-on_github-21bb42.svg" />
    </a>
    <img alt="TypeScript: Strict" src="https://img.shields.io/badge/typescript-strict-21bb42.svg" />
</p>

## Usage

First make sure you have [Node installed](https://nodejs.org/en/download) and [Yarn installed](https://yarnpkg.com/getting-started/install).
Then, after [forking the repo from GitHub](https://help.github.com/articles/fork-a-repo):

```shell
git clone https://github.com/<your-name-here>/linting-typescript-in-2023
cd linting-typescript-in-2023
yarn
```

### React Site Demo

To start a Next dev server, `yarn dev`.
It displays a page with four buttons, each of which is meant to set the page background to a random color.

1. _"Violate await-thenable"_: Shows what happens when code violates [`@typescript-eslint/await-thenable`](https://typescript-eslint.io/rules/await-thenable)
2. _"Violate no-floating-promises"_: Shows what happens when code violates [`@typescript-eslint/no-floating-promises`](https://typescript-eslint.io/rules/no-floating-promises)
3. _"Violate no-misused-promises"_: Shows what happens when code violates [`@typescript-eslint/no-misused-promises`](https://typescript-eslint.io/rules/no-misused-promises)
4. _"This may fail, safely"_: It works, no issues!

Each of those lint rules are disabled in [`.eslintrc.cjs`](./eslintrc.cjs).
Uncomment those disables and run `yarn lint` to enable the rules and see their complaints in source code.

## Development

See [`.github/CONTRIBUTING.md`](./.github/CONTRIBUTING.md).
Thanks! 💖

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- spellchecker: disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="http://www.joshuakgoldberg.com"><img src="https://avatars.githubusercontent.com/u/3335181?v=4?s=100" width="100px;" alt="Josh Goldberg"/><br /><sub><b>Josh Goldberg</b></sub></a><br /><a href="https://github.com/JoshuaKGoldberg/linting-typescript-in-2023/issues?q=author%3AJoshuaKGoldberg" title="Bug reports">🐛</a> <a href="https://github.com/JoshuaKGoldberg/linting-typescript-in-2023/commits?author=JoshuaKGoldberg" title="Code">💻</a> <a href="#content-JoshuaKGoldberg" title="Content">🖋</a> <a href="#example-JoshuaKGoldberg" title="Examples">💡</a> <a href="#ideas-JoshuaKGoldberg" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-JoshuaKGoldberg" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-JoshuaKGoldberg" title="Maintenance">🚧</a> <a href="#platform-JoshuaKGoldberg" title="Packaging/porting to new platform">📦</a> <a href="#projectManagement-JoshuaKGoldberg" title="Project Management">📆</a> <a href="https://github.com/JoshuaKGoldberg/linting-typescript-in-2023/pulls?q=is%3Apr+reviewed-by%3AJoshuaKGoldberg" title="Reviewed Pull Requests">👀</a> <a href="#security-JoshuaKGoldberg" title="Security">🛡️</a> <a href="#tool-JoshuaKGoldberg" title="Tools">🔧</a> <a href="https://github.com/JoshuaKGoldberg/linting-typescript-in-2023/commits?author=JoshuaKGoldberg" title="Tests">⚠️</a></td>
    </tr>
  </tbody>
</table>

<!-- spellchecker: enable -->
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
