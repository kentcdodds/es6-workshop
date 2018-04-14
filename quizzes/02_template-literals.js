import log from './pretty-log'

function interpolation() {
  // refactor this to a single template literal using interpolation
  // template literals use backticks instead of double/single quote
  // interpolation is done with ${variable}
  const greeting = 'Hello'
  const noun = 'World'
  return greeting.toUpperCase() + ', ' + noun + '!'
}
// log(interpolation())

function multiline() {
  // refactor to a single template literal with multiple lines
  return '\n' + '    this is on a new line\n' + '  '
}
// log(multiline())

function escaping() {
  // refactor to a single template literal with multiple lines
  return 'This is `code`\nand a new line'
}
// log(escaping())

function tagging() {
  const greeting = 'Hey'
  const noun = 'human'
  return tag`I would like to say: "${greeting}, ${noun}" to you!`

  function tag() {
    // what are the arguments passed to this function?
    // notice that we're returning arguments. So... We can return ANYTHING. Not just a string!
    return arguments
  }
}
// log(tagging())

/*







SOLUTIONS ARE BELOW









 */

function interpolationSOLUTION() {
  // refactor this to a single template literal using interpolation
  // template literals use backticks instead of double/single quote
  // interpolation is done with ${variable}
  const greeting = 'Hello'
  const noun = 'World'
  return `${greeting.toUpperCase()}, ${noun}!`
}
// log(interpolationSOLUTION())

function multilineSOLUTION() {
  // refactor to a single template literal with multiple lines
  return `
    this is on a new line
  `
}
// log(multilineSOLUTION())

function escapingSOLUTION() {
  // refactor to a single template literal with multiple lines
  return `This is \`code\`\nand a new line`
}
// log(escapingSOLUTION())

/* eslint prefer-template:0, prefer-rest-params:0, no-useless-concat:0 */
