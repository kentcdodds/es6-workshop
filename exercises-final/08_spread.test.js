test(`should be able to call a function and spread the arguments`, () => {
  const args = ['a', 'b', 'c']
  let calls = 0
  myFunction(...args)
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
  const result = [...array1, 4, 5, 6]
  expect(result).toEqual([1, 2, 3, 4, 5, 6])
})

test(`should be able to merge properties from objects`, () => {
  const obj1 = {
    foo: 'bar',
    baz: 'foobar',
  }
  const result = {
    ...obj1,
    eggs: 'spam',
  }
  expect(result).toEqual({
    foo: 'bar',
    baz: 'foobar',
    eggs: 'spam',
  })
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
