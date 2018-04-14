// WORKSHOP_START
// Rewrite all of these from promises to async/await
// tip: you can turn the `it` callbacks to async functions by adding `async` to them :)
// WORKSHOP_END
test('should work with resolved promises', async () => {
  // FINAL_START
  const result = await doAsync()
  expect(result).toBe('resolved')
  // FINAL_END
  // WORKSHOP_START
  return doAsync().then(result => {
    expect(result).toBe('resolved')
    throw new Error(
      'convert this to an async/await function and remove this error',
    )
  })
  // WORKSHOP_END
})

test('should throw an error with a rejected promise', async () => {
  // FINAL_START
  try {
    await doAsync(true)
    throw new Error('this should not run')
  } catch (error) {
    expect(error).toBe('rejected')
  }
  // FINAL_END
  // WORKSHOP_START
  return doAsync(true).catch(error => {
    expect(error).toBe('rejected')
    throw new Error(
      'convert this to an async/await function and remove this error',
    )
  })
  // WORKSHOP_END
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
// WORKSHOP_START
/*
http://ws.kcd.im/?ws=ES6+and+Beyond&e=Async/Await&em=
*/
// WORKSHOP_END
test('I submitted my elaboration and feedback', () => {
  // WORKSHOP_START
  const submitted = false // change this when you've submitted!
  // WORKSHOP_END
  // FINAL_START
  const submitted = true
  // FINAL_END
  expect(true).toBe(submitted)
})
////////////////////////////////

//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests,
// then file a pull request to add them to the extra credit!
// Learn more here: http://kcd.im/es6-workshop-contributing
