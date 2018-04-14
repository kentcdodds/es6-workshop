test('the exponentiation operation can be used to raise a number to a power of another number', () => {
  // WORKSHOP_START
  // refactor this to use the exponentiation operator (**)
  const result = Math.pow(3, 2)
  // WORKSHOP_END
  // FINAL_START
  const result = 3 ** 2
  // FINAL_END
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
  // WORKSHOP_START
  // refactor this to use `includes` instead
  const result = greatFriends.indexOf(bestFriend) !== -1
  // WORKSHOP_END
  // FINAL_START
  const result = greatFriends.includes(bestFriend)
  // FINAL_END
  expect(result).toBe(true)
})

//////// Elaboration & Feedback /////////
// WORKSHOP_START
/*
http://ws.kcd.im/?ws=ES6+and+Beyond&e=ES2016&em=
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
