test('has a set method', () => {
  // Create a new map called 'myMap'
  // add a new entry. Use 'name' as the key and 'Aaron' as the value

  expect(myMap.get('name')).toBe('Aaron')
})

test('can use objects as a key', () => {
  const user = {name: 'Aaron'}
  const value = {twitter: '@js_dev', gplus: '+AaronFrost'}

  // Create a map called 'myMap'
  // add a new entry. Use user as the key, and value as the value

  expect(myMap.has(user)).toBe(true)
  expect(myMap.get(user)).toBe(value)

})

test(`doesn't coerce keys`, () => {
  const myMap = new Map()
  myMap.set(1, 'Aaron')
  expect(myMap.get('1')).toBe(/*ENTER YOUR GUESS HERE*/)
  myMap.set('1', 'Aaron')
  expect(myMap.get('1')).toBe(/*ENTER YOUR GUESS HERE*/)
})
