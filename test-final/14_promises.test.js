import {expect} from 'chai'

describe(`Promises`, () => {
  it(`should resolve`, () => {
    pickApple('ripe')
      .then((result) => {
        expect(result).to.equal('ripe apple')
      }, (result) => {
        expect(result).to.equal(undefined)
      })
      .catch((error) => {
        expect(error).to.equal(undefined)
      })
  })

  it(`should reject`, () => {
    pickApple('unripe')
      .then((result) => {
        expect(result).to.equal(undefined)
      }, (result) => {
        expect(result).to.equal('unripe apple')
      })
      .catch((error) => {
        expect(error).to.equal(undefined)
      })
  })

  it(`errors can be caught`, () => {
    return pickApple()
      .then((result) => {
        expect(result).to.equal(undefined)
      })
      .catch((error) => {
        expect(error.message).to.equal('out of apples')
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
