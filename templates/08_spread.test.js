test(`should be able to call a function and spread the arguments`, () => {
  const args = ['a', 'b', 'c']
  let calls = 0
  // FINAL_START
  myFunction(...args)
  // FINAL_END
  // WORKSHOP_START
  // call myFunction using the spread operator with args
  // WORKSHOP_END
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
  // FINAL_START
  const result = [...array1, 4, 5, 6]
  // FINAL_END
  // WORKSHOP_START
  // create a result array that uses the spread operator to concatenate array1 with [4, 5, 6]
  // WORKSHOP_END
  expect(result).toEqual([1, 2, 3, 4, 5, 6])
})

test(`should be able to merge properties from objects`, () => {
  const obj1 = {
    foo: 'bar',
    baz: 'foobar',
  }
  // FINAL_START
  const result = {
    ...obj1,
    eggs: 'spam',
  }
  // FINAL_END
  // WORKSHOP_START
  // create a result object that uses the spread operator to add `eggs: 'spam'` to what exists in obj1
  // WORKSHOP_END
  expect(result).toEqual({
    foo: 'bar',
    baz: 'foobar',
    eggs: 'spam',
  })
})

//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests, then file a pull request to add them to the extra credit!
// Learn more here: https://github.com/kentcdodds/es6-workshop/blob/master/CONTRIBUTING.md#development
