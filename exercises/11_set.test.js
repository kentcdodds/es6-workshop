test('has an add method and a has method', () => {
  // Create a new Set called 'mySet'
  // add the numbers 1, 2, and 3 to the set

  expect(mySet.has(1)).toBe(true)
  expect(mySet.has(2)).toBe(true)
  expect(mySet.has(3)).toBe(true)
  expect(mySet.has(4)).toBe(false)
})

test('doesn`t allow duplicates', () => {
  // Create a new Set
  // add the following numbers to it, using set.add(num): 1, 1, 1

  expect(mySet.has(1)).toBe(true)
  expect(mySet.has(2)).toBe(false)
  expect(mySet.has(3)).toBe(false)
  expect(mySet.has(4)).toBe(false)
})

//////// Elaboration & Feedback /////////
/*
http://ws.kcd.im/?ws=ES6+and+Beyond&e=Sets&em=
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
