test(`should be able to call a function and spread the arguments`, () => {
  const args = ['a', 'b', 'c']
  let calls = 0
  // call myFunction using the spread operator with args
  expect(calls).toBe(1)

  function myFunction(a, b, c) {
    expect(a).toBe('a')
    expect(b).toBe('b')
    expect(c).toBe('c')
    calls++
  }
})

test(`should be easier to concatenate arrays`, () => {
  const array1 = [1, 2, 3]
  // create a result array that uses the spread operator to concatenate array1 with [4, 5, 6]
  expect(result).toEqual([1, 2, 3, 4, 5, 6])
})

test(`should be able to merge properties from objects`, () => {
  const obj1 = {
    foo: 'bar',
    baz: 'foobar',
  }
  // create a result object that uses the spread operator to add `eggs: 'spam'` to what exists in obj1
  expect(result).toEqual({
    foo: 'bar',
    baz: 'foobar',
    eggs: 'spam',
  })
})

//////// Elaboration & Feedback /////////
/*
http://ws.kcd.im/?ws=ES6+and+Beyond&e=Spread&em=
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
