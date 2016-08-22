import {expect} from 'chai'

describe(`Promises`, () => {
  it.skip(`should resolve`, () => {
    pickApple('ripe')
      .then((result) => {
        expect(result).to.equal(/*ENTER GUESS HERE*/)
      }, (result) => {
        expect(result).to.equal(/*ENTER GUESS HERE*/)
      })
      .catch((error) => {
        expect(error).to.equal(/* ENTER GUESS HERE */)
      })
  })

  it.skip(`should reject`, () => {
    pickApple('unripe')
      .then((result) => {
        expect(result).to.equal(/*ENTER GUESS HERE*/)
      }, (result) => {
        expect(result).to.equal(/* ENTER GUESS HERE */)
      })
      .catch((error) => {
        expect(error).to.equal(/* ENTER GUESS HERE */)
      })
  })

  it.skip(`errors can be caught`, () => {
    return pickApple()
      .then((result) => {
        expect(result).to.equal(/*ENTER GUESS HERE*/)
      })
      .catch((error) => {
        expect(error.message).to.equal(/* ENTER GUESS HERE*/)
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
})
