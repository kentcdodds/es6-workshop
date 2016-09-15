const noop = () => {}
test('can be used in place of `var`', () => {
  let bandName = 'Queen'
  let isBestBand = true
  expect(bandName).toBe('Queen')
  expect(isBestBand).toBe(true)
})

test('can modify the value of a `let` variable', () => {
  let releaseName = 'ES6'
  releaseName = 'ES2015'
  expect(releaseName).toBe('ES2015')
})

test('cannot modify the value of a `const` variable', () => {
  const releaseName = 'ES6'
  // releaseName = 'ES2015';
  expect(releaseName).toEqual('ES6')
})

test('is trapped inside of an `if` statement', () => {
  if (true) { // eslint-disable-line no-constant-condition
    // Change to `var` to `let`, so that b is scoped inside of the if-statement
    let b = 1
  }
  expect(() => noop(b)).toThrow('b is not defined')
})

test(`can't redeclare using the same name`, () => {
  function doLoop() {
    for (let i = 0; i < 10; i++) {
      /* eslint no-empty:"off" */
    }
    return i
  }

  expect(doLoop).toThrow('i is not defined')
})

test('means that we can start using block statements', () => {
  // BLOCK STATEMENT
  {
    const d = 2
  }

  expect(() => noop('d', d)).toThrow('d is not defined')
})
