# ES6-Workshop

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

By the time that the workshop is over, all of your tests will be running and passing.

## How To Get Started

### Clone the repo

You will need to start by cloning this repo. From your terminal, type:

```
git clone https://github.com/kentcdodds/es6-workshop.git && cd es6-workshop
```

### Install Dependencies

Once you have cloned the repo, in need to install the local dependencies. From your terminal, type:

```
npm install
```

# How To Run Tests
Once you have everything installed, you are ready to run some tests. There are two directories with tests in them: `test` and `test-final`.
The `test-final` directory is like a cheat sheet. All of the tests contain the required ES6 code to make the tests pass. You will need to
edit the tests in the `test` directory, and make the tests pass.

To run the tests, in your terminal run:

```
npm test
```

If you want the tests to continue running as you make changes, run:

```
npm run test:watch
```

This will execute the tests in the `test` directory. Currently all of these tests are disabled, using `it.skip`. Your
job is to one-by-one turn each test back on and get the test to pass, by writing the required ES6 code. Once you have
written the required code, the tests will pass, and you can move onto the next test.

### Contributing

If you have any questions, [let me know](https://twitter.com/kentcdodds).

If you use this workshop, please Pull Request this readme with a link to your event.

### Events

- [FluentConf 2015 - Axel Rauschmayer & Aaron Frost](http://fluentconf.com/javascript-html-2015/public/schedule/detail/38811)
- [SLC JS Learners Meetup - Kent C. Dodds](http://www.meetup.com/SLC-JS-Learners/events/220770922/)
- [MidwestJS 2015 - Kent C. Dodds](https://youtu.be/aeY6ctvsurs)
