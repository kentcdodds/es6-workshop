# Contributing

Thanks for being willing to contribute!

**Working on your first Pull Request?** You can learn how from this *free* series
[How to Contribute to an Open Source Project on GitHub][egghead]

## Project setup

It is recommended you use [`yarn`](https://yarnpkg.com/) rather than [`yarn`](https://www.npmjs.com/). But if you'd
rather stick with `npm`, simply replace `yarn` in the commands below with `npm`.

1. Fork and clone the repo
2. Run `yarn run setup` to verify your system and install dependencies
3. Create a branch for your PR

You can run `yarn run` to see what scripts are available.

## Add yourself as a contributor

This project follows the [all contributors][all-contributors] specification. To add yourself to the table of
contributors on the README.md, please use the automated script as part of your PR:

```console
yarn run add-contributor
```

Follow the prompt. If you've already added yourself to the list and are making a new type of contribution, you can run
it again and select the added contribution type.

## Where to contribute

This project uses [`split-guide`](https://github.com/kentcdodds/split-guide) to make maintaining the `exercises` and
`exercises-final` files easier. The `exercises` and `exercise-final` folders are actually generated code via the
`generate` script. So any changes you make should go in a `templates` directory. When you've made your changes,
please run `yarn run split` to regenerate the exercises and commit those changes as part of your pull request.

### Development

The best workflow for adding/changing tests is to run `yarn run dev` which will fire up [`onchange`][onchange] for
`split-guide` and the `exercises-final` tests in watch mode ([learn more][jest-watch]). With this going, you can open up
the relevant files in the `templates` directory and start making changes. When you save your changes, the files will
be generated and the `exercises-final` tests will be re-run.

## opt into git hooks

There are git hooks set up with this project that are automatically installed when you install dependencies. They're
really handy, but are turned off by default (so as to not hinder new contributors). You can opt into these by creating
a file called `.opt-in` at the root of the project and putting this inside:

```
precommit
```

[egghead]: https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github
[all-contributors]: https://github.com/kentcdodds/all-contributors
[onchange]: https://npmjs.com/package/onchange
[jest-watch]: https://egghead.io/lessons/javascript-use-jest-s-interactive-watch-mode?pl=testing-javascript-with-jest-a36c4074
