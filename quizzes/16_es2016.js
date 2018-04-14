import log from './pretty-log'

function arrayIncludes() {
  // refactor to `includes`
  const array = [1, 2, 3]
  return {
    includes2: array.indexOf(2) !== -1,
    includes4: array.indexOf(4) !== -1,
  }
}
// log(arrayIncludes())

function exponentiationOperator() {
  // refactor to the exponentiation operator
  return Math.pow(3, 4)
}
// log(exponentiationOperator())

// This is also kinda interesting...
// Though not something you'll probably
// run into often...
// https://www.nczonline.net/blog/2016/10/the-ecmascript-2016-change-you-probably-dont-know/

// SOLUTION BELOW
// No peeking!

function arrayIncludesSOLUTION() {
  const array = [1, 2, 3]
  return {
    includes2: array.includes(2),
    includes4: array.includes(4),
  }
}
// log(arrayIncludesSOLUTION())

function exponentiationOperatorSOLUTION() {
  // refactor to the exponentiation operator
  return 3 ** 4
}
// log(exponentiationOperatorSOLUTION())
