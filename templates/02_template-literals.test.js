import {expect} from 'chai'

describe('Template Literals', () => {
  it('should support string interpolation', () => {
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
    expect(personsFriends).to.equal(
      'Kent C. Dodds has 6 friends: Brooke Dodds, Matt Zabriskie, Aaron Frost, Dave Geddes, Joe Eames, Ryan Florence'
    )
  })

  it(`should support multi-line strings`, () => {
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
    expect(multiLine).to.equal('\n      How cool\n      is this!?\n    ')
  })

  it(`should support string escaping`, () => {
    // FINAL_START
    expect(`Hi\nthere!`).to.equal('Hi\nthere!')
    expect(`This is \`escaped\` backtics`).to.equal('This is `escaped` backtics')
    // FINAL_END
    // WORKSHOP_START
    // properly escape a string in a template literal for each of these
    expect(``).to.equal('Hi\nthere!')
    expect(``).to.equal('This is `escaped` backtics')
    // WORKSHOP_END
  })

  describe(`EXTRA CREDIT`, () => {
    // you likely wont often use tagging, but it can be handy!
    describe(`tagging`, () => {
      it(`should call the tagging function`, () => {
        const noun = 'World'
        const emotion = 'happy'
        const result = tagIt`Hello ${noun}! Are you feeling ${emotion} today?`
        expect(result).to.equal('Hello super-cool World! Are you feeling really happy today?')

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
    })
  })

})
