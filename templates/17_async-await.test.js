import {expect} from 'chai'

describe('async/await', () => {
  // WORKSHOP_START
  // Rewrite all of these from promises to async/await
  // tip: you can turn the `it` callbacks to async functions by adding `async` to them :)
  // WORKSHOP_END
  it('should work with resolved promises', async () => {
    // FINAL_START
    const result = await doAsync()
    expect(result).to.equal('resolved')
    // FINAL_END
    // WORKSHOP_START
    return doAsync().then(result => {
      expect(result).to.equal('resolved')
      throw new Error('convert this to an async/await function and remove this error')
    })
    // WORKSHOP_END
  })

  it('should throw an error with a rejected promise', async () => {
    // FINAL_START
    try {
      await doAsync(true)
      throw new Error('this should not run')
    } catch (error) {
      expect(error).to.equal('rejected')
    }
    // FINAL_END
    // WORKSHOP_START
    return doAsync(true).catch(error => {
      expect(error).to.equal('rejected')
      throw new Error('convert this to an async/await function and remove this error')
    })
    // WORKSHOP_END
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
