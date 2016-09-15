test('has an add method and a has method', () => {
  const mySet = new Set()
  mySet.add(1)
  mySet.add(2)
  mySet.add(3)

  expect(mySet.has(1)).toBe(true)
  expect(mySet.has(2)).toBe(true)
  expect(mySet.has(3)).toBe(true)
  expect(mySet.has(4)).toBe(false)
})

test('doesn`t allow duplicates', () => {
  const mySet = new Set()
  mySet.add(1)
  mySet.add(1)
  mySet.add(1)

  expect(mySet.has(1)).toBe(true)
  expect(mySet.has(2)).toBe(false)
  expect(mySet.has(3)).toBe(false)
  expect(mySet.has(4)).toBe(false)
})
