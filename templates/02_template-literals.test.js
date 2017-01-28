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
  // FINAL_START
  const personsFriends = `${person.name} has ${person.friends.length} friends: ${person.friends.join(', ')}`
  // FINAL_END
  // WORKSHOP_START
  // construct a string using template literal string interpolation
  const personsFriends = ``
  // WORKSHOP_END
  expect(personsFriends).toBe(
    'Kent C. Dodds has 6 friends: Brooke Dodds, Matt Zabriskie, Aaron Frost, Dave Geddes, Joe Eames, Ryan Florence'
  )
})

test(`should support multi-line strings`, () => {
  // FINAL_START
  const multiLine = `
    How cool
    is this!?
  `
  // FINAL_END
  // WORKSHOP_START
  // construct a string with multiple lines without needing escaped newline characters
  const multiLine = ``
  // WORKSHOP_END
  expect(multiLine).toBe('\n    How cool\n    is this!?\n  ')
})

test(`should support string escaping`, () => {
  // FINAL_START
  expect(`Hi\nthere!`).toBe('Hi\nthere!')
  expect(`This is \`escaped\` backtics`).toBe('This is `escaped` backtics')
  // FINAL_END
  // WORKSHOP_START
  // properly escape a string in a template literal for each of these
  expect(``).toBe('Hi\nthere!')
  expect(``).toBe('This is `escaped` backtics')
  // WORKSHOP_END
})


//////// EXTRA CREDIT ////////

// you likely won't often use tagging, but it can be handy!
test.skip(`should call the tagging function`, () => {
  const noun = 'World'
  const emotion = 'happy'
  const result = tagIt`Hello ${noun}! Are you feeling ${emotion} today?`
  expect(result).toBe('Hello super-cool World! Are you feeling really happy today?')

  function tagIt(literalString, ...interpolatedParts) {
    // FINAL_START
    const firstPart = `${literalString[0]}super-cool ${interpolatedParts[0]}`
    const lastPart = `${literalString[1]}really ${interpolatedParts[1]}${literalString[2]}`
    return `${firstPart}${lastPart}`
    // FINAL_END
    // COMMENT_START eslint trickery
    /* eslint no-unreachable:0 */
    // COMMENT_END
    // WORKSHOP_START
    // implement this function to make the test pass
    return 'fixme'
    // WORKSHOP_END
  }
})

// WORKSHOP_START
//////// Elaboration /////////
// Please write, in your own words
// a few of the core concepts from
// the feature(s) in this exercise
//
// 1.
// 2.
// 3.
////////////////////////////////
//
/////////// Feedback ///////////
/*
http://ws.kcd.im/?ws=ES6+and+Beyond&e=Template+Literals&em=
*/
////////////////////////////////
// WORKSHOP_END

//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests, then file a pull request to add them to the extra credit!
// Learn more here: https://github.com/kentcdodds/es6-workshop/blob/master/CONTRIBUTING.md#development
