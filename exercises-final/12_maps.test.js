test('has a set method', () => {
  const myMap = new Map()
  myMap.set('name', 'Aaron')

  expect(myMap.get('name')).toBe('Aaron')
})

test('can use objects as a key', () => {
  const user = {name: 'Aaron'}
  const value = {twitter: '@js_dev', gplus: '+AaronFrost'}

  const myMap = new Map()
  myMap.set(user, value)

  expect(myMap.has(user)).toBe(true)
  expect(myMap.get(user)).toBe(value)
})

test(`doesn't coerce keys`, () => {
  const myMap = new Map()
  myMap.set(1, 'Aaron')
  expect(myMap.get('1')).toBe(undefined)
  myMap.set('1', 'Aaron')
  expect(myMap.get('1')).toBe('Aaron')
})

//////// Elaboration & Feedback /////////
test('I submitted my elaboration and feedback', () => {
  const submitted = true
  expect(true).toBe(submitted)
})
////////////////////////////////

//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests,
// then file a pull request to add them to the extra credit!
// Learn more here: http://kcd.im/es6-workshop-contributing
