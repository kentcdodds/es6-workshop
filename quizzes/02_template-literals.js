console.log(
  // interpolation(),
  // multiline(),
  // escaping(),
  // tagging(),
)

function interpolation() {
  // refactor this to a single template literal using interpolation
  // template literals use backtics instead of double/single quote
  // interpolation is done with ${variable}
  const greeting = 'Hello'
  const noun = 'World'
  return greeting.toUpperCase() + ', ' + noun + '!'
}

function multiline() {
  // refactor to a single template literal with multiple lines
  return ('\n' +
'  this is on a new line\n' +
'  ')
}

function escaping() {
  // refactor to a single template literal with multiple lines
  return 'This is `code`\nand a new line'
}

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
