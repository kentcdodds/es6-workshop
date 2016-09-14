import {expect} from 'chai'

describe('async/await', () => {
  it('should work with resolved promises', async () => {
    const result = await doAsync()
    expect(result).to.equal('resolved')
  })

  it('should throw an error with a rejected promise', async () => {
    try {
      await doAsync(true)
      throw new Error('this should not run')
    } catch (error) {
      expect(error).to.equal('rejected')
    }
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
