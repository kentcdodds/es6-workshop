test('has an add method and a has method', () => {
  // FINAL_START
  const mySet = new Set()
  mySet.add(1)
  mySet.add(2)
  mySet.add(3)
  // FINAL_END
  // WORKSHOP_START
  // Create a new Set called 'mySet'
  // add the numbers 1, 2, and 3 to the set
  // WORKSHOP_END

  expect(mySet.has(1)).toBe(true)
  expect(mySet.has(2)).toBe(true)
  expect(mySet.has(3)).toBe(true)
  expect(mySet.has(4)).toBe(false)
})

test('doesn`t allow duplicates', () => {
  // FINAL_START
  const mySet = new Set()
  mySet.add(1)
  mySet.add(1)
  mySet.add(1)
  // FINAL_END
  // WORKSHOP_START
  // Create a new Set
  // add the following numbers to it, using set.add(num): 1, 1, 1
  // WORKSHOP_END

  expect(mySet.has(1)).toBe(true)
  expect(mySet.has(2)).toBe(false)
  expect(mySet.has(3)).toBe(false)
  expect(mySet.has(4)).toBe(false)
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
// WORKSHOP_END

//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests, then file a pull request to add them to the extra credit!
// Learn more here: https://github.com/kentcdodds/es6-workshop/blob/master/CONTRIBUTING.md#development
