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
