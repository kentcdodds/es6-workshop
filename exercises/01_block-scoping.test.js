const noop = () => {}
test('can be used in place of `var`', () => {
  // Declare bandName using 'let'
  // Declare isBestBand using 'let'
  expect(bandName).toBe('Queen')
  expect(isBestBand).toBe(true)
})

test('can modify the value of a `let` variable', () => {
  // Declare 'releaseName' using 'let', setting the value to 'ES6'
  // Change value of releaseName to be `ES2015`, the new name for ES6
  expect(releaseName).toBe('ES2015')
})

test('cannot modify the value of a `const` variable', () => {
  function getReleaseName() {
    // Pick your side. Do you call it ES6, or ES2015?
    // You cannot have `const` and reassign the value!
    const releaseName = 'ES6' // If you call it ES2015, then change this to let or var
    releaseName = 'ES2015' // If you call it ES6, then remove this reassignment
    return releaseName
  }
  expect(getReleaseName).not.toThrow()
})

test('is trapped inside of an `if` statement', () => {
  if (true) { // eslint-disable-line no-constant-condition
    // Change to `var` to `let`, so that b is scoped inside of the if-statement
    var b = 1
  }
  expect(() => noop(b)).toThrow('b is not defined')
})

test(`can't redeclare using the same name`, () => {
  function doLoop() {
    // Change loop counter to `let` so that it is trapped inside of the loop, and can't be returned.
    for (var i = 0; i < 10; i++) {
      /* eslint no-empty:"off" */
    }
    return i
  }

  expect(doLoop).toThrow('i is not defined')
})

test('means that we can start using block statements', () => {
  // BLOCK STATEMENT
  {
    // Change to `const` declaration
    var d = 2
  }

  expect(() => noop('d', d)).toThrow('d is not defined')
})

//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests, then file a pull request to add them to the extra credit!
// Learn more here: https://github.com/kentcdodds/es6-workshop/blob/master/CONTRIBUTING.md#development
