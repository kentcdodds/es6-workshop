// COMMENT_START
/* eslint no-const-assign:0 */
// COMMENT_END
const noop = () => {}
test('can be used in place of `var`', () => {
  // WORKSHOP_START
  // Declare bandName using 'let'
  // Declare isBestBand using 'let'
  // WORKSHOP_END
  // FINAL_START
  let bandName = 'Queen'
  let isBestBand = true
  // FINAL_END
  expect(bandName).toBe('Queen')
  expect(isBestBand).toBe(true)
})

test('can modify the value of a `let` variable', () => {
  // WORKSHOP_START
  // Declare 'releaseName' using 'let', setting the value to 'ES6'
  // Change value of releaseName to be `ES2015`, the new name for ES6
  // WORKSHOP_END
  // FINAL_START
  let releaseName = 'ES6'
  releaseName = 'ES2015'
  // FINAL_END
  expect(releaseName).toBe('ES2015')
})

test('cannot modify the value of a `const` variable', () => {
  function getReleaseName() {
    // WORKSHOP_START
    // Pick your side. Do you call it ES6, or ES2015?
    // You cannot have `const` and reassign the value!
    const releaseName = 'ES6' // If you call it ES2015, then change this to let or var
    releaseName = 'ES2015' // If you call it ES6, then remove this reassignment
    // WORKSHOP_END
    // FINAL_START
    const releaseName = 'ES6'
    // FINAL_END
    return releaseName
  }
  expect(getReleaseName).not.toThrow()
})

test('is trapped inside of an `if` statement', () => {
  if (true) { // eslint-disable-line no-constant-condition
    // Change to `var` to `let`, so that b is scoped inside of the if-statement
    // WORKSHOP_START
    var b = 1
    // WORKSHOP_END
    // FINAL_START
    let b = 1
    // FINAL_END
  }
  expect(() => noop(b)).toThrow('b is not defined')
})

test(`can't redeclare using the same name`, () => {
  function doLoop() {
    // WORKSHOP_START
    // Change loop counter to `let` so that it is trapped inside of the loop, and can't be returned.
    for (var i = 0; i < 10; i++) {
      /* eslint no-empty:"off" */
    }
    // WORKSHOP_END
    // FINAL_START
    for (let i = 0; i < 10; i++) {
      /* eslint no-empty:"off" */
    }
    // FINAL_END
    return i
  }

  expect(doLoop).toThrow('i is not defined')
})

test('means that we can start using block statements', () => {
  // BLOCK STATEMENT
  {
    // WORKSHOP_START
    // Change to `const` declaration
    var d = 2
    // WORKSHOP_END
    // FINAL_START
    const d = 2
    // FINAL_END
  }

  expect(() => noop('d', d)).toThrow('d is not defined')
})
