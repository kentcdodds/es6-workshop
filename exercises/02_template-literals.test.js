test('should support string interpolation', () => {
  const person = {
    name: 'Kent C. Dodds',
    friends: [
      'Brooke Dodds',
      'Matt Zabriskie',
      'Aaron Frost',
      'Dave Geddes',
      'Joe Eames',
      'Ryan Florence',
    ],
  }
  // construct a string using template literal string interpolation
  const personsFriends = ``
  expect(personsFriends).toBe(
    'Kent C. Dodds has 6 friends: Brooke Dodds, Matt Zabriskie, Aaron Frost, Dave Geddes, Joe Eames, Ryan Florence',
  )
})

test(`should support multi-line strings`, () => {
  // construct a string with multiple lines without needing escaped newline characters
  const multiLine = ``
  expect(multiLine).toBe('\n    How cool\n    is this!?\n  ')
})

test(`should support string escaping`, () => {
  // properly escape a string in a template literal for each of these
  expect(``).toBe('Hi\nthere!')
  expect(``).toBe('This is `escaped` backticks')
})

//////// EXTRA CREDIT ////////

// you likely won't often use tagging, but it can be handy!
test.skip(`should call the tagging function`, () => {
  const noun = 'World'
  const emotion = 'happy'
  const result = tagIt`Hello ${noun}! Are you feeling ${emotion} today?`
  expect(result).toBe(
    'Hello super-cool World! Are you feeling really happy today?',
  )

  function tagIt(literalString, ...interpolatedParts) {
    // implement this function to make the test pass
    return 'fixme'
  }
})

//////// Elaboration & Feedback /////////
/*
http://ws.kcd.im/?ws=ES6+and+Beyond&e=Template+Literals&em=
*/
test('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(true).toBe(submitted)
})
////////////////////////////////

//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests,
// then file a pull request to add them to the extra credit!
// Learn more here: http://kcd.im/es6-workshop-contributing
