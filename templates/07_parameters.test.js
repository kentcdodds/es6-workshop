test('can be triggered when the incoming argument is undefined', () => {

  function test(name = 'Mercury') {
    return name
  }

  // FINAL_START
  expect(test('Aaron')).toBe('Aaron')
  expect(test()).toBe('Mercury')
  expect(test(undefined)).toBe('Mercury')
  expect(test(null)).toBe(null)
  // FINAL_END
  // WORKSHOP_START
  expect(test('Aaron')).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(test(undefined)).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(test(null)).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(test()).toBe(/*ENTER YOUR GUESS HERE*/)
  // WORKSHOP_END
})

test(`aren't included in arguments`, () => {

  function test(name = 'Mercury') {
    return arguments.length
  }

  // FINAL_START
  expect(test('Aaron')).toBe(1)
  expect(test(null)).toBe(1)
  expect(test()).toBe(0)
  // FINAL_END
  // WORKSHOP_START
  expect(test('Aaron')).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(test(null)).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(test()).toBe(/*ENTER YOUR GUESS HERE*/)
  // WORKSHOP_END
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

  // FINAL_START
  expect(triggerCount).toBe(0)
  expect(test('Aaron')).toBe('Aaron')
  expect(test()).toBe('Mercury')
  expect(test(undefined)).toBe('Mercury')
  expect(triggerCount).toBe(2)
  // FINAL_END
  // WORKSHOP_START
  expect(triggerCount).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(test('Aaron')).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(test()).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(test(undefined)).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(triggerCount).toBe(/*ENTER YOUR GUESS HERE*/)
  // WORKSHOP_END
})

test('catch non-specified params', () => {
  function resty(first, second, ...others) {
    return others
  }

  // FINAL_START
  expect(resty().length).toBe(0)
  expect(resty(1).length).toBe(0)
  expect(resty(1, 2).length).toBe(0)
  expect(resty(1, 2, 3).length).toBe(1)
  expect(resty(1, 2, 3, undefined, 5, undefined, 7, undefined, 9, 10).length).toBe(8)
  // FINAL_END
  // WORKSHOP_START
  expect(resty().length).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(resty(1).length).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(resty(1, 2).length).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(resty(1, 2, 3).length).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(resty(1, 2, 3, undefined, 5, undefined, 7, undefined, 9, 10).length).toBe(/*ENTER YOUR GUESS HERE*/)
  // WORKSHOP_END
})

test('has a different length than `arguments`', () => {
  function resty(first, second, ...others) {
    return others.length == arguments.length
  }

  // FINAL_START
  // expect(resty()).toBe(true)
  // expect(resty(1)).toBe(false)
  // expect(resty(1, 2)).toBe(false)
  // expect(resty(1, 2, 3)).toBe(false)
  // expect(resty(1, 2, 3, undefined, 5, undefined, 7, undefined, 9, 10)).toBe(false)
  // FINAL_END
  // WORKSHOP_START
  expect(resty()).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(resty(1)).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(resty(1, 2)).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(resty(1, 2, 3)).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(resty(1, 2, 3, undefined, 5, undefined, 7, undefined, 9, 10)).toBe(/*ENTER YOUR GUESS HERE*/)
  // WORKSHOP_END
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

  // FINAL_START
  expect(args.__proto__ == rests.__proto__).toBe(false)
  expect(args.splice).toBe(undefined)
  expect(rests.__proto__).toBe(Array.prototype)
  expect(rests.splice).toBeDefined()
  expect(rests.splice).toBe(Array.prototype.splice)
  // FINAL_END
  // WORKSHOP_START
  expect(args.__proto__ == rests.__proto__).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(args.splice).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(rests.__proto__).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(rests.splice).toBeDefined()
  expect(rests.splice).toBe(Array.prototype.splice)
  // WORKSHOP_END
})


test('it can default all arguments, optionally', () => {
  // WORKSHOP_START
  // Modify the method signature of `myFunction` to allow for all args to be optional
  // WORKSHOP_END

  // FINAL_START
  function myFunction({name = 'Aaron', age = 35, favoriteBand = 'Queen'} = {}) {
    // FINAL_END
    // COMMENT_START make the parser happy :)
  }
  // COMMENT_END
  // WORKSHOP_START
  function myFunction({name, age, favoriteBand}) {
    // WORKSHOP_END
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

// WORKSHOP_START
//////// Elaboration /////////
// Please write, in your own words
// a few of the core concepts from
// the feature(s) in this exercise
//
// 1.
// 2.
// 3.
////////////////////////////////
//
/////////// Feedback ///////////
/*
http://ws.kcd.im/?ws=ES6+and+Beyond&e=Parameters&em=
*/
////////////////////////////////
// WORKSHOP_END

//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests, then file a pull request to add them to the extra credit!
// Learn more here: https://github.com/kentcdodds/es6-workshop/blob/master/CONTRIBUTING.md#development
