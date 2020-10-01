# ES6-Workshop

[![slides-badge][slides-badge]][slides]
[![chat-badge][chat-badge]][chat]
[![Build Status][build-badge]][build]
[![License][license-badge]][license]
[![All Contributors](https://img.shields.io/badge/all_contributors-17-orange.svg?style=flat-square)](#contributors)

[![PRs Welcome][prs-badge]][prs]
[![Donate][donate-badge]][donate]
[![Code of Conduct][coc-badge]][coc]
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

* [git][git]
* [Node][node] (at least version 8.9.4)
* [npm][npm] (at least version 5.6.0)

## Setup

You will need to start by cloning this repo, then you'll run a simple `setup` script which will install all the
dependencies and validate that you're ready to go. From your terminal, type:

```
git clone https://github.com/kentcdodds/es6-workshop.git
cd es6-workshop
yarn run setup
git commit -am "setup"
```


If this finishes without issues, great 👏! However, if you have problems, please file an issue on this repo [here](https://github.com/kentcdodds/es6-workshop/issues/new?title=Issues%20Setting%20Up&body=Here%27s%20my%20node/yarn%20version%20and%20the%20output%20when%20I%20run%20the%20commands:).

# How To Run Tests

Once you have everything installed, you are ready to run some tests. There are two directories with tests in them:
`exercises` and `exercises-final`. The `exercises-final` directory is like a cheat sheet. All of the tests contain the
required ES6 code to make the tests pass. You will need to edit the tests in the `exercises` directory, and make the
tests pass.

To run the tests, in your terminal run:

```
yarn test
```

To run a specific test file, in your terminal run:

```
yarn test -- exercises/01_block-scoping.test.js
```

If you want the tests to continue running as you make changes, run:

```
yarn run test:watch
```

This will start `jest` in its interactive watch mode ([learn more][watch-mode]). If you see a bunch of failures, make
sure you're in "only changed" mode by clicking the `o` key. There should not be any tests run at this point. Your
job is to go into each test file in `exercises` and make the tests pass. As you make changes, jest will run the file's
tests. Once you have written the required ES6 code, the tests will pass, and you can move on.

Also, during watch mode you can press the `p` key to filter for only the test file you want to run. You can even press the `t`
key to filter for only the tests you want to run (by their
test name). Note, that for these to work, you need to run all
the tests first. Hit the `a` key to do that.

**Note:** You may prefer to run the `test:changed` script which will run the tests only once. This will allow you to
avoid the "learning crutch" of immediate feedback that you get from the watch mode. But it's up to you!

### Contributing

If you have any questions, [let me know](https://twitter.com/kentcdodds).

If you use this workshop, please Pull Request this README with a link to your event.

If you want to edit/update anything in the exercises, please make all changes in the `templates` directory. We're using
[`split-guide`](https://git.io/split-guide), so the `exercises` and `exercises-final` directories are generated.

### Events

* [FluentConf 2015 - Axel Rauschmayer & Aaron Frost](http://fluentconf.com/javascript-html-2015/public/schedule/detail/38811)
* [SLC JS Learners Meetup - Kent C. Dodds](http://www.meetup.com/SLC-JS-Learners/events/220770922/)
* [MidwestJS 2015 - Kent C. Dodds](https://youtu.be/aeY6ctvsurs)
* [The Strange Loop 2016 - Kent C. Dodds](http://www.thestrangeloop.com/2016/es6-and-beyond.html)
* [Connect Tech - Kent C. Dodds](http://connect.tech/) - [video](https://youtu.be/nCP6jsN9XPI)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/aaronfrost"><img src="https://avatars.githubusercontent.com/u/662832?v=3" width="100px;" alt=""/><br /><sub><b>Aaron Frost</b></sub></a><br /><a href="https://github.com/kentcdodds/es6-workshop/commits?author=aaronfrost" title="Code">💻</a> <a href="https://github.com/kentcdodds/es6-workshop/commits?author=aaronfrost" title="Documentation">📖</a> <a href="#talk-aaronfrost" title="Talks">📢</a> <a href="https://github.com/kentcdodds/es6-workshop/commits?author=aaronfrost" title="Tests">⚠️</a></td>
    <td align="center"><a href="http://rauschma.de/"><img src="https://avatars.githubusercontent.com/u/526114?v=3" width="100px;" alt=""/><br /><sub><b>Axel Rauschmayer</b></sub></a><br /><a href="#talk-rauschma" title="Talks">📢</a></td>
    <td align="center"><a href="https://kentcdodds.com"><img src="https://avatars.githubusercontent.com/u/1500684?v=3" width="100px;" alt=""/><br /><sub><b>Kent C. Dodds</b></sub></a><br /><a href="https://github.com/kentcdodds/es6-workshop/commits?author=kentcdodds" title="Code">💻</a> <a href="https://github.com/kentcdodds/es6-workshop/commits?author=kentcdodds" title="Documentation">📖</a> <a href="#infra-kentcdodds" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/kentcdodds/es6-workshop/pulls?q=is%3Apr+reviewed-by%3Akentcdodds" title="Reviewed Pull Requests">👀</a> <a href="#talk-kentcdodds" title="Talks">📢</a> <a href="https://github.com/kentcdodds/es6-workshop/commits?author=kentcdodds" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://jimthedev.com"><img src="https://avatars.githubusercontent.com/u/108938?v=3" width="100px;" alt=""/><br /><sub><b>Jim Cummins</b></sub></a><br /><a href="https://github.com/kentcdodds/es6-workshop/commits?author=jimthedev" title="Documentation">📖</a> <a href="https://github.com/kentcdodds/es6-workshop/commits?author=jimthedev" title="Tests">⚠️</a></td>
    <td align="center"><a href="http://lindsey.international"><img src="https://avatars.githubusercontent.com/u/11346889?v=3" width="100px;" alt=""/><br /><sub><b>Lindsey</b></sub></a><br /><a href="https://github.com/kentcdodds/es6-workshop/commits?author=lmdragun" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/mariusbutuc"><img src="https://avatars.githubusercontent.com/u/511893?v=3" width="100px;" alt=""/><br /><sub><b>Marius Butuc</b></sub></a><br /><a href="https://github.com/kentcdodds/es6-workshop/commits?author=mariusbutuc" title="Code">💻</a></td>
    <td align="center"><a href="http://cyborgspider.com"><img src="https://avatars.githubusercontent.com/u/1740882?v=3" width="100px;" alt=""/><br /><sub><b>Carlos Ortega</b></sub></a><br /><a href="https://github.com/kentcdodds/es6-workshop/commits?author=cyborgspider" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="www.ryanbraganza.com"><img src="https://avatars.githubusercontent.com/u/290242?v=3" width="100px;" alt=""/><br /><sub><b>Ryan Braganza</b></sub></a><br /><a href="https://github.com/kentcdodds/es6-workshop/commits?author=ryanbraganza" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/GizmoMKD"><img src="https://avatars.githubusercontent.com/u/2297806?v=3" width="100px;" alt=""/><br /><sub><b>Emrah Mehmedov</b></sub></a><br /><a href="https://github.com/kentcdodds/es6-workshop/commits?author=GizmoMKD" title="Code">💻</a> <a href="https://github.com/kentcdodds/es6-workshop/commits?author=GizmoMKD" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/alayek"><img src="https://avatars.githubusercontent.com/u/5607371?v=3" width="100px;" alt=""/><br /><sub><b>Arijit Layek</b></sub></a><br /><a href="https://github.com/kentcdodds/es6-workshop/commits?author=alayek" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/dhruvmishra"><img src="https://avatars.githubusercontent.com/u/3013322?v=3" width="100px;" alt=""/><br /><sub><b>Dhruv Mishra</b></sub></a><br /><a href="https://github.com/kentcdodds/es6-workshop/commits?author=dhruvmishra" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/bobbyw1994"><img src="https://avatars.githubusercontent.com/u/15032926?v=3" width="100px;" alt=""/><br /><sub><b>Bobby White</b></sub></a><br /><a href="https://github.com/kentcdodds/es6-workshop/commits?author=bobbyw1994" title="Tests">⚠️</a></td>
    <td align="center"><a href="http://www.benmvp.com"><img src="https://avatars.githubusercontent.com/u/5714478?v=3" width="100px;" alt=""/><br /><sub><b>Ben Ilegbodu</b></sub></a><br /><a href="https://github.com/kentcdodds/es6-workshop/commits?author=benmvp" title="Documentation">📖</a> <a href="https://github.com/kentcdodds/es6-workshop/commits?author=benmvp" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/tgreenhalgh"><img src="https://avatars0.githubusercontent.com/u/5298300?v=3" width="100px;" alt=""/><br /><sub><b>Thomas Greenhalgh</b></sub></a><br /><a href="https://github.com/kentcdodds/es6-workshop/commits?author=tgreenhalgh" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/aaronang"><img src="https://avatars2.githubusercontent.com/u/7579804?v=3" width="100px;" alt=""/><br /><sub><b>Aaron Ang</b></sub></a><br /><a href="https://github.com/kentcdodds/es6-workshop/commits?author=aaronang" title="Code">💻</a> <a href="https://github.com/kentcdodds/es6-workshop/commits?author=aaronang" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/danielasy"><img src="https://avatars2.githubusercontent.com/u/12578347?v=3" width="100px;" alt=""/><br /><sub><b>Daniela Yassuda</b></sub></a><br /><a href="https://github.com/kentcdodds/es6-workshop/commits?author=danielasy" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/kyle-west"><img src="https://avatars3.githubusercontent.com/u/18150457?v=4" width="100px;" alt=""/><br /><sub><b>Kyle West</b></sub></a><br /><a href="https://github.com/kentcdodds/es6-workshop/commits?author=kyle-west" title="Code">💻</a> <a href="https://github.com/kentcdodds/es6-workshop/commits?author=kyle-west" title="Tests">⚠️</a></td>
    <td align="center"><a href="http://twitter.com/xala3pa"><img src="https://avatars0.githubusercontent.com/u/655613?v=4" width="100px;" alt=""/><br /><sub><b>Álvaro Salazar</b></sub></a><br /><a href="https://github.com/kentcdodds/es6-workshop/commits?author=xala3pa" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

# LICENSE

This material is available for private, non-commercial use under the
[GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html). If you
would like to use this material to conduct your own workshop, please contact me
at kent@doddsfamily.us

[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/
[node]: https://nodejs.org
[git]: https://git-scm.com/
[slides]: http://kcd.im/es6-intro-slides
[slides-badge]: https://cdn.rawgit.com/kentcdodds/custom-badges/2/badges/slides.svg
[chat]: https://gitter.im/kentcdodds/es6-workshop
[chat-badge]: https://img.shields.io/gitter/room/nwjs/nw.js.svg?style=flat-square
[build-badge]: https://img.shields.io/travis/kentcdodds/es6-workshop.svg?style=flat-square
[build]: https://travis-ci.org/kentcdodds/es6-workshop
[license-badge]: https://img.shields.io/badge/license-GPL%203.0%20License-blue.svg?style=flat-square
[license]: https://github.com/kentcdodds/es6-workshop/blob/master/README.md#license
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[donate-badge]: https://img.shields.io/badge/$-support-green.svg?style=flat-square
[donate]: http://kcd.im/donate
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/kentcdodds/es6-workshop/blob/master/other/CODE_OF_CONDUCT.md
[github-watch-badge]: https://img.shields.io/github/watchers/kentcdodds/es6-workshop.svg?style=social
[github-watch]: https://github.com/kentcdodds/es6-workshop/watchers
[github-star-badge]: https://img.shields.io/github/stars/kentcdodds/es6-workshop.svg?style=social
[github-star]: https://github.com/kentcdodds/es6-workshop/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20es6-workshop%20by%20@kentcdodds%20https://github.com/kentcdodds/es6-workshop%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/kentcdodds/es6-workshop.svg?style=social
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[all-contributors]: https://github.com/kentcdodds/all-contributors
[watch-mode]: https://egghead.io/lessons/javascript-use-jest-s-interactive-watch-mode?pl=testing-javascript-with-jest-a36c4074
