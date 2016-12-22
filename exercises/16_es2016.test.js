test('the exponentiation operation can be used to raise a number to a power of another number', () => {
  // refactor this to use the exponentiation operator (**)
  const result = Math.pow(3, 2)
  expect(result).toBe(9)
})

test('array.includes can be used to determine whether an item exists in an array', () => {
  const bestFriend = {name: 'Sindre Sorhus'}
  const greatFriends = [
    bestFriend,
    {name: 'Dustan Kasten'},
    {name: 'Sam Saccone'},
    {name: 'Ingvar Stepanyan'},
  ]
  // refactor this to use `includes` instead
  const result = greatFriends.indexOf(bestFriend) !== -1
  expect(result).toBe(true)
})
