test('can be triggered when the incoming argument is undefined', () => {

  function test(name = 'Mercury') {
    return name
  }

  expect(test('Aaron')).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(test(undefined)).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(test(null)).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(test()).toBe(/*ENTER YOUR GUESS HERE*/)
})

test(`aren't included in arguments`, () => {

  function test(name = 'Mercury') {
    return arguments.length
  }

  expect(test('Aaron')).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(test(null)).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(test()).toBe(/*ENTER YOUR GUESS HERE*/)
})

test('can trigger a function call', () => {
  let triggerCount = 0

  function test(name = getDefault()) {
    return name
  }

  function getDefault() {
    triggerCount++
    return 'Mercury'
  }

  expect(triggerCount).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(test('Aaron')).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(test()).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(test(undefined)).toBe(/*ENTER YOUR GUESS HERE*/)
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
  expect(resty(1, 2, 3, undefined, 5, undefined, 7, undefined, 9, 10).length).toBe(/*ENTER YOUR GUESS HERE*/)
})

test('has a different length than `arguments`', () => {
  function resty(first, second, ...others) {
    return others.length == arguments.length
  }

  expect(resty()).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(resty(1)).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(resty(1, 2)).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(resty(1, 2, 3)).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(resty(1, 2, 3, undefined, 5, undefined, 7, undefined, 9, 10)).toBe(/*ENTER YOUR GUESS HERE*/)
})

test('is an actual array, unlike arguments', () => {
  function resty(...args) {
    return args
  }

  function argy() {
    return arguments
  }

  var args = argy(1, 2, 3)
  var rests = resty(1, 2, 3)

  expect(args.__proto__ == rests.__proto__).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(args.splice).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(rests.__proto__).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(rests.splice).toBeDefined()
  expect(rests.splice).toBe(Array.prototype.splice)
})


test('it can default all arguments, optionally', () => {
  // Modify the method signature of `myFunction` to allow for all args to be optional

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

//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests, then file a pull request to add them to the extra credit!
// Learn more here: https://github.com/kentcdodds/es6-workshop/blob/master/CONTRIBUTING.md#development
