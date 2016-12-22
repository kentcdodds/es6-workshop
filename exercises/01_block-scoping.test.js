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
  var releaseName = 'ES6'
  // This doesn't even compile, so we can't actually test this...
  // once you've changed the `var` above to `cost`, comment out the line below
  releaseName = 'ES2015';
  expect(releaseName).toEqual('ES6')
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
