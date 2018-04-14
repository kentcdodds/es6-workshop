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

test('can modify the value of a `let` variable even in the next block statement', () => {
  let releaseName = 'ES6'
  {
    releaseName = 'ES2015'
  }
  // WORKSHOP_START
  expect(releaseName).toBe(/* ENTER YOUR GUESS HERE */)
  // WORKSHOP_END
  // FINAL_START
  expect(releaseName).toBe('ES2015')
  // FINAL_END
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
  if (true) {
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

//////// Elaboration & Feedback /////////
// WORKSHOP_START
/*
http://ws.kcd.im/?ws=ES6+and+Beyond&e=Block+Scoping&em=
*/
// WORKSHOP_END
test('I submitted my elaboration and feedback', () => {
  // WORKSHOP_START
  const submitted = false // change this when you've submitted!
  // WORKSHOP_END
  // FINAL_START
  const submitted = true
  // FINAL_END
  expect(true).toBe(submitted)
})
////////////////////////////////

//////// EXTRA CREDIT ////////

test.skip('means that we can declare constant with the same name in block statement', () => {
  // WORKSHOP_START
  // Declare a 'd' using 'const', setting the value to 5
  // BLOCK STATEMENT
  {
    // Declare a 'd' using 'const', setting the value to 10
    expect(d).toBe(10)
  }
  expect(d).toBe(5)
  // WORKSHOP_END
  // FINAL_START
  const d = 5
  // BLOCK STATEMENT
  {
    const d = 10
    expect(d).toBe(10)
  }
  expect(d).toBe(5)
  // FINAL_END
})

// If you get this far, try adding a few more tests,
// then file a pull request to add them to the extra credit!
// Learn more here: http://kcd.im/es6-workshop-contributing

/* eslint no-constant-condition:0 */
