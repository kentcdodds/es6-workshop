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
