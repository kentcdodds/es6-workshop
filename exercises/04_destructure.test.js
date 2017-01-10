const noop = () => {}
test('can be used to pull apart objects', () => {
  // Using destructuring, call `getAddress()` and create a 'city', 'state' and 'zip' variable.
  // var address = getAddress();
  // var city = address.city;
  // var state = address.state;
  // var zip = address.zip;
  expect(city).toBe('Salt Lake City')
  expect(state).toBe('UT')
  expect(zip).toBe(84115)
})

test('sets missing values to undefined', () => {
  // Using destructuring, call `getAddress()` and create an 'address' variable.
  expect(address).toBeUndefined()
})

test('can alias destructured variables', () => {
  // Using destructuring, call `getAddress()` and pull the city, state and zip out, and alias them to c, s, z, respectively
  expect(c).toBe('Salt Lake City')
  expect(s).toBe('UT')
  expect(z).toBe(84115)
  expect(() => noop(city)).toThrow()
  expect(() => noop(state)).toThrow()
  expect(() => noop(zip)).toThrow()
})

test('can destructure nested variables', () => {
  // Using destructuring, call `getAddress()` and create an 'address' variable.
  expect(lat).toBe(40.776608)
  expect(long).toBe(-111.920485)
  expect(() => noop(coords)).toThrow()
})

test('can be used to pull apart arrays', () => {
  // Call getNumbers and pull the first value out as `one` and the second as `two`
  expect(one).toBe(1)
  expect(two).toBe(2)
})

test('can skip indexes in arrays', () => {
  // Call getNumbers and pull the first value out as `one` and the second as `two`
  expect(one).toBe(1)
  expect(three).toBe(3)
  expect(() => noop(two)).toThrow()
})

test('can reach nested arrays', () => {
  // Call getNestedNumbers and pull the first value out as `one`, the 3 as `three` and 6 as `sixth`.
  expect(one).toBe(1)
  expect(three).toBe(3)
  expect(six).toBe(6)
})

function getAddress() {
  return {
    city: 'Salt Lake City',
    state: 'UT',
    zip: 84115,
    coords: {
      lat: 40.776608,
      long: -111.920485,
    },
  }
}

function getNumbers() {
  return [1, 2, 3, 4, 5, 6]
}

function getNestedNumbers() {
  return [1, 2, [3, 4, [5, 6]]]
}

// MORE AT http://www.2ality.com/2015/01/es6-destructuring.html

//////// Elaboration /////////
// Please write, in your own words
// a few of the core concepts from
// the feature(s) in this exercise
//
// 1.
// 2.
// 3.
////////////////////////////////

//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests, then file a pull request to add them to the extra credit!
// Learn more here: https://github.com/kentcdodds/es6-workshop/blob/master/CONTRIBUTING.md#development

