import log from './pretty-log'

function basicMap() {
  const m = new Map()
  m.set() // TODO: add "a" as key, 3 as value
  m.set() // TODO: key is {v: 5, j: 7}, value is 7
  m.set() // TODO: key is a nop function, value is 8
  return m
}
// console.log(basicMap())












// SOLUTION BELOW
// No peeking!




















function basicMapSOLUTION() {
  const m = new Map()
  m.set('a', 3)
  m.set({v: 5, j: 7}, 7)
  m.set(() => {}, 8)
  return m
}
console.log(basicMapSOLUTION())


/* eslint no-unreachable:0 */
/* eslint valid-jsdoc:0 */
/* eslint complexity: ["error", 7] */
