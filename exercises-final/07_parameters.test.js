test('can be triggered when the incoming argument is undefined', () => {
  function getName(name = 'Mercury') {
    return name
  }

  expect(getName('Aaron')).toBe('Aaron')
  expect(getName()).toBe('Mercury')
  expect(getName(undefined)).toBe('Mercury')
  expect(getName(null)).toBe(null)
})

test(`aren't included in arguments`, () => {
  function getName(name = 'Mercury') {
    return arguments.length
  }

  expect(getName('Aaron')).toBe(1)
  expect(getName(null)).toBe(1)
  expect(getName()).toBe(0)
})

test('can trigger a function call', () => {
  let triggerCount = 0

  function getName(name = getDefault()) {
    return name
  }

  function getDefault() {
    triggerCount++
    return 'Mercury'
  }

  expect(triggerCount).toBe(0)
  expect(getName('Aaron')).toBe('Aaron')
  expect(getName()).toBe('Mercury')
  expect(getName(undefined)).toBe('Mercury')
  expect(triggerCount).toBe(2)
})

test('catch non-specified params', () => {
  function resty(first, second, ...others) {
    return others
  }

  expect(resty().length).toBe(0)
  expect(resty(1).length).toBe(0)
  expect(resty(1, 2).length).toBe(0)
  expect(resty(1, 2, 3).length).toBe(1)
  expect(
    resty(1, 2, 3, undefined, 5, undefined, 7, undefined, 9, 10).length,
  ).toBe(8)
})

test('has a different length than `arguments`', () => {
  function resty(first, second, ...others) {
    return others.length === arguments.length
  }

  expect(resty()).toBe(true)
  expect(resty(1)).toBe(false)
  expect(resty(1, 2)).toBe(false)
  expect(resty(1, 2, 3)).toBe(false)
  expect(resty(1, 2, 3, undefined, 5, undefined, 7, undefined, 9, 10)).toBe(
    false,
  )
})

test('is an actual array, unlike arguments', () => {
  function resty(...args) {
    return args
  }

  function argy() {
    return arguments
  }

  const args = argy(1, 2, 3)
  const rests = resty(1, 2, 3)

  expect(Object.getPrototypeOf(args) === Object.getPrototypeOf(rests)).toBe(
    false,
  )
  expect(args.splice).toBe(undefined)
  expect(Object.getPrototypeOf(rests)).toBe(Array.prototype)
  expect(rests.splice).toBeDefined()
  expect(rests.splice).toBe(Array.prototype.splice)
})

test('it can default all arguments, optionally', () => {
  function myFunction({name = 'Aaron', age = 35, favoriteBand = 'Queen'} = {}) {
    expect(name).toBeDefined()
    expect(age).toBeDefined()
    expect(favoriteBand).toBeDefined()
  }

  myFunction({name: 'Axel', age: 37, favoriteBand: 'Taylor Swift'})
  myFunction({name: 'Axel', age: 37})
  myFunction({name: 'Axel'})
  myFunction({})
  myFunction()
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

/*
eslint
  no-unused-vars:0
  prefer-rest-params:0
*/
