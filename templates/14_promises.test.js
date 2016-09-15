// COMMENT_START eslint trickery :)
/* eslint no-unreachable:0 */
// COMMENT_END
import {expect} from 'chai'

describe(`Promises`, () => {
  it(`should resolve`, () => {
    return pickApple('ripe')
      .then(result => {
        // FINAL_START
        expect(result).to.equal('ripe apple')
        // FINAL_END
        // WORKSHOP_START
        // throw new Error('this should not run')
        // expect(result).to.equal(/*ENTER GUESS HERE*/)
        throw new Error('assert or throw here')
        // WORKSHOP_END
      }, error => {
        // FINAL_START
        throw new Error('this should not run')
        // FINAL_END
        // WORKSHOP_START
        // throw new Error('this should not run')
        // expect(error).to.equal(/*ENTER GUESS HERE*/)
        throw new Error('assert or throw here')
        // WORKSHOP_END
      })
      .catch(error => {
        // FINAL_START
        throw new Error('this should not run')
        // FINAL_END
        // WORKSHOP_START
        // throw new Error('this should not run')
        // expect(error).to.equal(/*ENTER GUESS HERE*/)
        throw new Error('assert or throw here')
        // WORKSHOP_END
      })
  })

  it(`should reject`, () => {
    return pickApple('unripe')
      .then(result => {
        // FINAL_START
        throw new Error('this should not run')
        // FINAL_END
        // WORKSHOP_START
        // throw new Error('this should not run')
        // expect(result).to.equal(/*ENTER GUESS HERE*/)
        throw new Error('assert or throw here')
        // WORKSHOP_END
      }, error => {
        // FINAL_START
        expect(error).to.equal('unripe apple')
        // FINAL_END
        // WORKSHOP_START
        // throw new Error('this should not run')
        // expect(error).to.equal(/*ENTER GUESS HERE*/)
        throw new Error('assert or throw here')
        // WORKSHOP_END
      })
      .catch(error => {
        // FINAL_START
        throw new Error('this should not run')
        // FINAL_END
        // WORKSHOP_START
        // throw new Error('this should not run')
        // expect(error).to.equal(/*ENTER GUESS HERE*/)
        throw new Error('assert or throw here')
        // WORKSHOP_END
      })
  })

  it(`errors can be caught`, () => {
    return pickApple()
      .then(result => {
        // FINAL_START
        throw new Error('this should not run')
        // FINAL_END
        // WORKSHOP_START
        // throw new Error('this should not run')
        // expect(result).to.equal(/*ENTER GUESS HERE*/)
        throw new Error('assert or throw here')
        // WORKSHOP_END
      })
      .catch(error => {
        // FINAL_START
        expect(error.message).to.equal('out of apples')
        // FINAL_END
        // WORKSHOP_START
        // throw new Error('this should not run')
        // expect(error).to.equal(/*ENTER GUESS HERE*/)
        throw new Error('assert or throw here')
        // WORKSHOP_END
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
