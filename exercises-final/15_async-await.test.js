test('should work with resolved promises', async () => {
  const result = await doAsync()
  expect(result).toBe('resolved')
})

test('should throw an error with a rejected promise', async () => {
  try {
    await doAsync(true)
    throw new Error('this should not run')
  } catch (error) {
    expect(error).toBe('rejected')
  }
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

//////// Elaboration & Feedback /////////
test('I submitted my elaboration and feedback', () => {
  const submitted = true
  expect(true).toBe(submitted)
})
////////////////////////////////

//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests,
// then file a pull request to add them to the extra credit!
// Learn more here: http://kcd.im/es6-workshop-contributing
