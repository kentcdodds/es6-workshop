const noop = () => {}
test('can be used to pull apart objects', () => {
  // FINAL_START
  const {city, state, zip} = getAddress()
  // FINAL_END
  // WORKSHOP_START
  // Using destructuring, call `getAddress()` and create a 'city', 'state' and 'zip' variable.
  // var address = getAddress();
  // var city = address.city;
  // var state = address.state;
  // var zip = address.zip;
  // WORKSHOP_END
  expect(city).toBe('Salt Lake City')
  expect(state).toBe('UT')
  expect(zip).toBe(84115)
})

test('sets missing values to undefined', () => {
  // FINAL_START
  const {address} = getAddress()
  // FINAL_END
  // WORKSHOP_START
  // Using destructuring, call `getAddress()` and create an 'address' variable.
  // WORKSHOP_END
  expect(address).toBeUndefined()
})

test('can alias destructured variables', () => {
  // FINAL_START
  const {city: c, state: s, zip: z} = getAddress()
  // FINAL_END
  // WORKSHOP_START
  // Using destructuring, call `getAddress()` and pull the city, state and zip out, and alias them to c, s, z, respectively
  // WORKSHOP_END
  expect(c).toBe('Salt Lake City')
  expect(s).toBe('UT')
  expect(z).toBe(84115)
  expect(() => noop(city)).toThrow()
  expect(() => noop(state)).toThrow()
  expect(() => noop(zip)).toThrow()
})

test('can destructure nested variables', () => {
  // FINAL_START
  const {coords: {lat, long}} = getAddress()
  // FINAL_END
  // WORKSHOP_START
  // Using destructuring, call `getAddress()` and create an 'address' variable.
  // WORKSHOP_END
  expect(lat).toBe(40.776608)
  expect(long).toBe(-111.920485)
  expect(() => noop(coords)).toThrow()
})

test('can be used to pull apart arrays', () => {
  // FINAL_START
  const [one, two] = getNumbers()
  // FINAL_END
  // WORKSHOP_START
  // Call getNumbers and pull the first value out as `one` and the second as `two`
  // WORKSHOP_END
  expect(one).toBe(1)
  expect(two).toBe(2)
})

test('can skip indexes in arrays', () => {
  // FINAL_START
  const [one, , three] = getNumbers()
  // FINAL_END
  // WORKSHOP_START
  // Call getNumbers and pull the first value out as `one` and the second as `two`
  // WORKSHOP_END
  expect(one).toBe(1)
  expect(three).toBe(3)
  expect(() => noop(two)).toThrow()
})

test('can reach nested arrays', () => {
  // FINAL_START
  const [one, , [three, , [, six]]] = getNestedNumbers()
  // FINAL_END
  // WORKSHOP_START
  // Call getNestedNumbers and pull the first value out as `one`, the 3 as `three` and 6 as `sixth`.
  // WORKSHOP_END
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
