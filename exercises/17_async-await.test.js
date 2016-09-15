import {expect} from 'chai'

describe('async/await', () => {
  // Rewrite all of these from promises to async/await
  // tip: you can turn the `it` callbacks to async functions by adding `async` to them :)
  it('should work with resolved promises', async () => {
    return doAsync().then(result => {
      expect(result).to.equal('resolved')
      throw new Error('convert this to an async/await function and remove this error')
    })
  })

  it('should throw an error with a rejected promise', async () => {
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
