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
