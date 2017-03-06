test(`should be easier to determine whether a string includes another`, () => {
  const sentence = 'It was the best of times. It was the worst of times'
  // create a variable called `result` that is assigned to a call of sentence.includes
  expect(result).toBe(true)
})

test(`should be easier to repeat a string`, () => {
  const repeated = 'abc123'
  // create a variable called `result` that is the result of repeating the string 4 times
  expect(result).toBe('abc123abc123abc123abc123')
})

test(`should be able to take an array-like object and convert it into an array`, () => {
  const obj = {length: 3, 0: 'a', 1: 'b', 2: 'c'}
  // this is even more handy with a NodeList like that returned from document.querySelector
  // create a variable called `result` and assign it to a call to Array.from
  expect(result).toEqual(['a', 'b', 'c'])
})

test(`should be easier to fill an array with values`, () => {
  const originalArray = new Array(5)
  // create a variable called `result` and assign it to an array that's filled with 3s except for the first item.
  expect(result).toEqual([, 3, 3, 3, 3]) // eslint-disable-line no-sparse-arrays
})

test(`should be easy to copy properties from one object to another`, () => {
  const source1 = {
    a: {
      b: 'c',
      m: [1, 2, 3],
    },
  }
  const source2 = {
    d: false,
    z: 34,
  }
  const source3 = {
    z: 42,
    p: ['a', 'b', 'c'],
  }

  const target = {
    a: {
      q: 'r',
      m: [4, 5, 6],
      s: {
        t: 3,
      },
    },
    d: true,
    p: ['x', 'y', 'z'],
  }
  // merge the sources into the target using Object.assign

  expect(result).toEqual({
    a: {
      b: 'c',
      m: [1, 2, 3],
    },
    d: false,
    z: 42,
    p: ['a', 'b', 'c'],
  })

  // this is only here to indicate that the assignment is not deep
  expect(result).not.toEqual({
    a: {
      b: 'c',
      m: [1, 2, 3],
      q: 'r',
      s: {
        t: 3,
      },
    },
    d: false,
    z: 42,
    p: ['a', 'b', 'c'],
  })
})

//////// Elaboration & Feedback /////////
/*
http://ws.kcd.im/?ws=ES6+and+Beyond&e=New+APIS&em=
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
