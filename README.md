<h1 align="center">Floating And Sinking Promises Code</h1>

<p align="center">Code samples for the talk, formed from my <a href="github.com/JoshuaKGoldberg/template-typescript-node-package">template-typescript-node-package</a>. ✨</p>

<p align="center">👉 <a href="https://1drv.ms/p/s!AvUc1cvPrJnWvtxb_0WRNwMDrhMGvg">Slides available here!</a> 👈</p>

<p align="center">
	<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
	<a href="#contributors">
		<img alt="All Contributors" src="https://img.shields.io/badge/all_contributors-1-21bb42.svg" />
	</a>
	<!-- ALL-CONTRIBUTORS-BADGE:END -->
	<img alt="Code Style: Prettier" src="https://img.shields.io/badge/code_style-prettier-21bb42.svg" />
	<a href="https://github.com/JoshuaKGoldberg/floating-and-sinking-promises/blob/main/.github/CODE_OF_CONDUCT.md">
		<img alt="Contributor Covenant" src="https://img.shields.io/badge/code_of_conduct-contributor_covenant-21bb42" />
	</a>
	<a href="https://github.com/JoshuaKGoldberg/floating-and-sinking-promises/blob/main/LICENSE.md">
	    <img alt="License: MIT" src="https://img.shields.io/github/license/JoshuaKGoldberg/floating-and-sinking-promises?color=21bb42">
    </a>
	<a href="https://github.com/sponsors/JoshuaKGoldberg">
    	<img alt="Sponsor: On GitHub" src="https://img.shields.io/badge/sponsor-on_github-21bb42.svg" />
    </a>
    <img alt="TypeScript: Strict" src="https://img.shields.io/badge/typescript-strict-21bb42.svg" />
</p>

## Usage

First make sure you have [Node installed`](https://nodejs.org/en/download) and [Yarn installed`](https://yarnpkg.com/getting-started/install).
Then, after [forking the repo from GitHub`](https://help.github.com/articles/fork-a-repo):

```shell
git clone https://github.com/<your-name-here>/floating-and-sinking-promises
cd floating-and-sinking-promises
yarn
```

### Scripts Demo

The first portion of this talk involves a few scripts in the `script/` directory.
Each does the same thing to an `./example.txt` file:

1. Run contents from the file
2. Write the same contents, uppercased, back to the file

Before running any of these three scripts, create an `example.txt` file with any contents.
The three scripts are:

1. `yarn script:1-callback-hell`: Runs `script/1-callback-hell.ts`, which is implemented using traditional Node-style function callbacks
2. `yarn script:2-raw-promises`: Runs `script/2-raw-promises.ts`, which is implemented using `Promise`s with `.then()`
3. `yarn script:3-async-await-promises`: Runs `script/3-async-await-promises.ts`, which is implemented using `async`/`await` over `Promise`s

```plaintext
$ echo hi > example.txt
$ yarn script:1-callback-hell
yarn run v1.22.19

$ npx tsx script/1-callback-hell.ts
Read contents: hi

Finished writing: HI

✨  Done in 0.40s.
```

### React Site Demo

To start a Next dev server, `yarn dev`.
It displays a page with four buttons, each of which is meant to set the page background to a random color.

1. _"Violate await-thenable"_: Shows what happens when code violates [`@typescript-eslint/await-thenable`](https://typescript-eslint.io/rules/await-thenable)
2. _"Violate no-floating-promises"_: Shows what happens when code violates [`@typescript-eslint/no-floating-promises`](https://typescript-eslint.io/rules/no-floating-promises)
3. _"Violate no-misused-promises"_: Shows what happens when code violates [`@typescript-eslint/no-misused-promises`](https://typescript-eslint.io/rules/no-misused-promises)
4. _"This may fail, safely"_: It works, no issues!

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
      <td align="center"><a href="http://www.joshuakgoldberg.com"><img src="https://avatars.githubusercontent.com/u/3335181?v=4?s=100" width="100px;" alt="Josh Goldberg"/><br /><sub><b>Josh Goldberg</b></sub></a><br /><a href="https://github.com/JoshuaKGoldberg/floating-and-sinking-promises/issues?q=author%3AJoshuaKGoldberg" title="Bug reports">🐛</a> <a href="https://github.com/JoshuaKGoldberg/floating-and-sinking-promises/commits?author=JoshuaKGoldberg" title="Code">💻</a> <a href="#content-JoshuaKGoldberg" title="Content">🖋</a> <a href="#example-JoshuaKGoldberg" title="Examples">💡</a> <a href="#ideas-JoshuaKGoldberg" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-JoshuaKGoldberg" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-JoshuaKGoldberg" title="Maintenance">🚧</a> <a href="#platform-JoshuaKGoldberg" title="Packaging/porting to new platform">📦</a> <a href="#projectManagement-JoshuaKGoldberg" title="Project Management">📆</a> <a href="https://github.com/JoshuaKGoldberg/floating-and-sinking-promises/pulls?q=is%3Apr+reviewed-by%3AJoshuaKGoldberg" title="Reviewed Pull Requests">👀</a> <a href="#security-JoshuaKGoldberg" title="Security">🛡️</a> <a href="#tool-JoshuaKGoldberg" title="Tools">🔧</a> <a href="https://github.com/JoshuaKGoldberg/floating-and-sinking-promises/commits?author=JoshuaKGoldberg" title="Tests">⚠️</a></td>
    </tr>
  </tbody>
</table>

<!-- spellchecker: enable -->
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
