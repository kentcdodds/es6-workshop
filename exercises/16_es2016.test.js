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

//////// Elaboration & Feedback /////////
/*
http://ws.kcd.im/?ws=ES6+and+Beyond&e=ES2016&em=
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
