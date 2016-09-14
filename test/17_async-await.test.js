import {expect} from 'chai'

// convert this to async/await

describe('async/await', () => {
  it.skip('should work with resolved promises', () => { // tip: turn the arrow function into an async function
    return doAsync().then(result => {
      expect(result).to.equal('resolved')
      throw new Error('convert this to an async/await function and remove this error')
    })
  })

  it.skip('should throw an error with a rejected promise', () => {
    return doAsync(true).catch(error => {
      expect(error).to.equal('rejected')
      throw new Error('convert this to an async/await function and remove this error')
    })
  })
})

function doAsync(rejectPromise = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (rejectPromise) {
        reject('rejected')
      } else {
        resolve('resolved')
      }
    })
  })
}
