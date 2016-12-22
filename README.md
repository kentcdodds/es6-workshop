# ES6-Workshop

[![slides-badge][slides-badge]][slides]
[![Donate][donate-badge]][donate]
[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

## Welcome

Welcome to this ES6 workshop. Our goal is to help everyone make strides towards learning the newest ES6 syntax, and
how to use the latest constructs in JavaScript.

This repo is meant to be used in parallel with a lecture style presentation of
[the new features](https://github.com/lukehoban/es6features).

## Thanks

Special thanks to [Aaron Frost](https://twitter.com/js_dev) and [Axel Rauschmayer](https://twitter.com/rauschma) for
creating the [original repo](https://github.com/aaronfrost/es6-workshop) from which this is forked.

## Your Goal

This repo is full of failing tests. The only way to get them to pass it by using your newly acquired knowledge of ES6
and all of the new features that are part of this latest release. For each test, you will need to write/rewrite to code
using the latest ES6 syntax. Once all of your tests pass, you will want to move onto the next section.

By the time that the workshop is over (time permitting), all of your tests will be running and passing.

## System Requirements

- [git][git]
- [Node][node] (at least version 6)
- [yarn][yarn] (at least version 0.17.0)

## Setup

You will need to start by cloning this repo, then you'll run a simple `setup` script which will install all the
dependencies and validate that you're ready to go. From your terminal, type:

```
git clone https://github.com/kentcdodds/es6-workshop.git
cd es6-workshop
yarn run setup
```

If this finishes without issues, great 👏! However, if you have problems, please file an issue on this repo [here](https://github.com/kentcdodds/es6-workshop/issues/new?title=Issues%20Setting%20Up&body=Here%27s%20my%20node/yarn%20version%20and%20the%20output%20when%20I%20run%20the%20commands:).

### Note on yarn

If you don't have `yarn` installed and don't want to use it for some reason, you can use [`npm`][npm] as well. Instead
of `yarn run setup`, run `node ./scripts/install && npm run validate` and enjoy waiting (and hopefully things don't
break for you). May be a good idea to still run `node ./scripts/verify` to verify you have the right version of other
things too.

# How To Run Tests
Once you have everything installed, you are ready to run some tests. There are two directories with tests in them:
`exercises` and `exercises-final`. The `exercises-final` directory is like a cheat sheet. All of the tests contain the
required ES6 code to make the tests pass. You will need to edit the tests in the `exercises` directory, and make the
tests pass.

To run the tests, in your terminal run:

```
yarn test
```

If you want the tests to continue running as you make changes, run:

```
yarn run test:watch
```

This will start `jest` in its interactive watch mode ([learn more][watch-mode]). If you see a bunch of failures, make
sure you're in "only changed" mode by clicking the `o` key. There should not be any tests run at this point. Your
job is to go into each test file in `exercises` and make the tests pass. As you make changes, jest will run the file's
tests. Once you have written the required ES6 code, the tests will pass, and you can move on.

### Contributing

If you have any questions, [let me know](https://twitter.com/kentcdodds).

If you use this workshop, please Pull Request this README with a link to your event.

If you want to edit/update anything in the exercises, please make all changes in the `templates` directory. We're using
[`split-guide`](https://git.io/split-guide), so the `exercises` and `exercises-final` directories are generated.

### Events

- [FluentConf 2015 - Axel Rauschmayer & Aaron Frost](http://fluentconf.com/javascript-html-2015/public/schedule/detail/38811)
- [SLC JS Learners Meetup - Kent C. Dodds](http://www.meetup.com/SLC-JS-Learners/events/220770922/)
- [MidwestJS 2015 - Kent C. Dodds](https://youtu.be/aeY6ctvsurs)
- [The Strange Loop 2016 - Kent C. Dodds](http://www.thestrangeloop.com/2016/es6-and-beyond.html)
- [Connect Tech - Kent C. Dodds](http://connect.tech/) - [video](https://youtu.be/nCP6jsN9XPI)

[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/
[node]: https://nodejs.org
[git]: https://git-scm.com/
[slides]: http://kcd.im/es6-intro-slides
[slides-badge]: https://cdn.rawgit.com/kentcdodds/custom-badges/2/badges/slides.svg
[donate-badge]: https://img.shields.io/badge/$-support-green.svg?style=flat-square
[donate]: http://kcd.im/donate
[github-watch-badge]: https://img.shields.io/github/watchers/kentcdodds/es6-workshop.svg?style=social
[github-watch]: https://github.com/kentcdodds/es6-workshop/watchers
[github-star-badge]: https://img.shields.io/github/stars/kentcdodds/es6-workshop.svg?style=social
[github-star]: https://github.com/kentcdodds/es6-workshop/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20es6-workshop!%20https://git.io/es6-workshop%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/kentcdodds/es6-workshop.svg?style=social
[watch-mode]: https://egghead.io/lessons/javascript-use-jest-s-interactive-watch-mode?pl=testing-javascript-with-jest-a36c4074
