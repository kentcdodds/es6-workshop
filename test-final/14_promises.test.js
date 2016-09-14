import {expect} from 'chai'

describe(`Promises`, () => {
  it(`should resolve`, () => {
    return pickApple('ripe')
      .then(result => {
        expect(result).to.equal('ripe apple')
      }, error => {
        throw new Error('this should not run')
      })
      .catch(error => {
        throw new Error('this should not run')
      })
  })

  it(`should reject`, () => {
    return pickApple('unripe')
      .then(result => {
        throw new Error('this should not run')
      }, error => {
        expect(error).to.equal('unripe apple')
      })
      .catch(error => {
        throw new Error('this should not run')
      })
  })

  it(`errors can be caught`, () => {
    return pickApple()
      .then(result => {
        throw new Error('this should not run')
      })
      .catch(error => {
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
