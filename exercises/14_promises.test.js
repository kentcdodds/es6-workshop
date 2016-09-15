test(`should resolve`, () => {
  return pickApple('ripe')
    .then(result => {
      // throw new Error('this should not run')
      // expect(result).toBe(/*ENTER GUESS HERE*/)
      throw new Error('assert or throw here')
    }, error => {
      // throw new Error('this should not run')
      // expect(error).toBe(/*ENTER GUESS HERE*/)
      throw new Error('assert or throw here')
    })
    .catch(error => {
      // throw new Error('this should not run')
      // expect(error).toBe(/*ENTER GUESS HERE*/)
      throw new Error('assert or throw here')
    })
})

test(`should reject`, () => {
  return pickApple('unripe')
    .then(result => {
      // throw new Error('this should not run')
      // expect(result).toBe(/*ENTER GUESS HERE*/)
      throw new Error('assert or throw here')
    }, error => {
      // throw new Error('this should not run')
      // expect(error).toBe(/*ENTER GUESS HERE*/)
      throw new Error('assert or throw here')
    })
    .catch(error => {
      // throw new Error('this should not run')
      // expect(error).toBe(/*ENTER GUESS HERE*/)
      throw new Error('assert or throw here')
    })
})

test(`errors can be caught`, () => {
  return pickApple()
    .then(result => {
      // throw new Error('this should not run')
      // expect(result).toBe(/*ENTER GUESS HERE*/)
      throw new Error('assert or throw here')
    })
    .catch(error => {
      // throw new Error('this should not run')
      // expect(error).toBe(/*ENTER GUESS HERE*/)
      throw new Error('assert or throw here')
    })
})

function pickApple(ripeness) {
  // Immediately return a promise which will eventually get resolved
  // or rejected by calling the corresponding function.
  return new Promise((resolve, reject) => {
    // Do something asynchonous. Could be AJAX, using a timeout here.
    setTimeout(() => {
      if (ripeness === 'ripe') {
        resolve('ripe apple')
      } else if (ripeness === 'unripe') {
        reject('unripe apple')
      } else {
        reject(new Error('out of apples'))
      }
    })
  })
}
