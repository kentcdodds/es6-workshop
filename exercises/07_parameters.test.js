test('can be triggered when the incoming argument is undefined', () => {
  function getName(name = 'Mercury') {
    return name
  }

  expect(getName('Aaron')).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(getName(undefined)).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(getName(null)).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(getName()).toBe(/*ENTER YOUR GUESS HERE*/)
})

test(`aren't included in arguments`, () => {
  function getName(name = 'Mercury') {
    return arguments.length
  }

  expect(getName('Aaron')).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(getName(null)).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(getName()).toBe(/*ENTER YOUR GUESS HERE*/)
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

  expect(triggerCount).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(getName('Aaron')).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(getName()).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(getName(undefined)).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(triggerCount).toBe(/*ENTER YOUR GUESS HERE*/)
})

test('catch non-specified params', () => {
  function resty(first, second, ...others) {
    return others
  }

  expect(resty().length).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(resty(1).length).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(resty(1, 2).length).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(resty(1, 2, 3).length).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(
    resty(1, 2, 3, undefined, 5, undefined, 7, undefined, 9, 10).length,
  ).toBe(/*ENTER YOUR GUESS HERE*/)
})

test('has a different length than `arguments`', () => {
  function resty(first, second, ...others) {
    return others.length === arguments.length
  }

  expect(resty()).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(resty(1)).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(resty(1, 2)).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(resty(1, 2, 3)).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(
    resty(1, 2, 3, undefined, 5, undefined, 7, undefined, 9, 10),
  ).toBe(/*ENTER YOUR GUESS HERE*/)
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

  expect(
    Object.getPrototypeOf(args) === Object.getPrototypeOf(rests),
  ).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(args.splice).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(Object.getPrototypeOf(rests)).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(rests.splice).toBeDefined()
  expect(rests.splice).toBe(Array.prototype.splice)
})

test('it can default all arguments, optionally', () => {
  // Modify the method signature of `myFunction` to allow for
  // all args to be optional

  function myFunction({name, age, favoriteBand}) {
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
/*
http://ws.kcd.im/?ws=ES6+and+Beyond&e=Parameters&em=
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

/*
eslint
  no-unused-vars:0
  prefer-rest-params:0
*/
