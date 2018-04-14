test('creating symbols', () => {
  // WORKSHOP_START
  const symbol = 'I wanna be a symbol one day'
  // WORKSHOP_END
  // FINAL_START
  const symbol = Symbol()
  // FINAL_END
  expect(typeof symbol).toBe('symbol')
})

test('giving a symbol a description', () => {
  // WORKSHOP_START
  const symbol = Symbol() // give me a label
  // WORKSHOP_END
  // FINAL_START
  const symbol = Symbol('use the force')
  // FINAL_END
  expect(String(symbol)).toBe('Symbol(use the force)')
})

test('symbols are unique', () => {
  const s1 = Symbol()
  const s2 = Symbol()
  // WORKSHOP_START
  expect(s1 === s2).toBe(/* enter your guess here */)
  // WORKSHOP_END
  // FINAL_START
  expect(s1 === s2).toBe(false)
  // FINAL_END

  const s3 = Symbol('I am a symbol')
  const s4 = Symbol('I am a symbol')
  // WORKSHOP_START
  expect(s3 === s4).toBe(/* enter your guess here */)
  // WORKSHOP_END
  // FINAL_START
  expect(s3 === s4).toBe(false)
  // FINAL_END
})

test('symbols on objects', () => {
  const symbol = Symbol('metadata')
  // WORKSHOP_START
  // make an object called `game` that
  // makes this test pass
  // WORKSHOP_END
  // FINAL_START
  const game = {
    name: 'The Legend of Zelda',
    releaseDate: 'February 21, 1986',
    [symbol]: {
      fans: 'about a billion',
    },
  }
  // FINAL_END

  expect(JSON.parse(JSON.stringify(game))).toEqual({
    name: 'The Legend of Zelda',
    releaseDate: 'February 21, 1986',
  })
  expect(game[symbol]).toEqual({
    fans: 'about a billion',
  })
})

//////// Elaboration & Feedback /////////
// WORKSHOP_START
/*
http://ws.kcd.im/?ws=ES6+and+Beyond&e=Symbols&em=
*/
// WORKSHOP_END
test('I submitted my elaboration and feedback', () => {
  // WORKSHOP_START
  const submitted = false // change this when you've submitted!
  // WORKSHOP_END
  // FINAL_START
  const submitted = true
  // FINAL_END
  expect(true).toBe(submitted)
})
////////////////////////////////

//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests,
// then file a pull request to add them to the extra credit!
// Learn more here: http://kcd.im/es6-workshop-contributing
