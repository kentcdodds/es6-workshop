test(`should yield objects with value and done properties`, () => {
  const odds = giveMeOneOddNumber()

  // FINAL_START
  expect(typeof odds).toBe('object')
  expect(odds.next).toBeDefined()
  expect(odds.next().value).toBe(1)
  expect(odds.next().value).toBe(3)
  expect(odds.next().done).toBe(false)
  odds.next()
  expect(odds.next().value).toBe(9)
  expect(odds.next().done).toBe(true)
  // FINAL_END
  // WORKSHOP_START
  expect(odds.next().value).toBe(/* ENTER YOUR GUESS */)
  expect(odds.next().value).toBe(/* ENTER YOUR GUESS */)
  expect(odds.next().done).toBe(/* ENTER YOUR GUESS */)
  odds.next()
  expect(odds.next().value).toBe(/* ENTER YOUR GUESS */)
  expect(odds.next().done).toBe(/* ENTER YOUR GUESS */)
  // WORKSHOP_END

  function* giveMeOneOddNumber() {
    yield 1
    yield 3
    yield 5
    yield 7
    yield 9
  }
})

test(`can be iterated over`, () => {
  function* giveMeOneEvenNumber() {
    yield 2
    yield 4
    yield 6
    yield 8
  }

  let sum = 0

  // BEWARE, THIS IS BLOCKING/SYNCHRONOUS!
  // Generators are not async/await, those may be in ES2016
  for (let even of giveMeOneEvenNumber()) {
    sum = sum + even
  }

  // FINAL_START
  expect(sum).toBe(20)
  // FINAL_END
  // WORKSHOP_START
  expect(sum).toBe(/* ENTER YOUR GUESS */)
  // WORKSHOP_END
})

//////// Elaboration & Feedback /////////
// WORKSHOP_START
/*
http://ws.kcd.im/?ws=ES6+and+Beyond&e=Generators&em=
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
