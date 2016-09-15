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
    // construct a string using template literal string interpolation
    const personsFriends = ``
    expect(personsFriends).to.equal(
      'Kent C. Dodds has 6 friends: Brooke Dodds, Matt Zabriskie, Aaron Frost, Dave Geddes, Joe Eames, Ryan Florence'
    )
  })

  it(`should support multi-line strings`, () => {
    // construct a string with multiple lines without needing escaped newline characters
    const multiLine = ``
    expect(multiLine).to.equal('\n      How cool\n      is this!?\n    ')
  })

  it(`should support string escaping`, () => {
    // properly escape a string in a template literal for each of these
    expect(``).to.equal('Hi\nthere!')
    expect(``).to.equal('This is `escaped` backtics')
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
          // implement this function to make the test pass
          return 'fixme'
        }
      })
    })
  })

})
