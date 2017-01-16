promises()
// asyncAwaits()


// resolve reject here -- don't modify
function log(...args) {
  console.log(...args)
}

function logError(...args) {
  console.error(...args)
}


// Define and use promise style asynchronous operations
function promises() {
  // TODO: Rewrite as async
  const successfulPromise = timeout(Math.random() * 200)
    .then(result => `success: ${result}`)

  // TODO: Rewrite as async
  const failingPromise = timeout(Math.random() * 100, true)
    .then(null, error => (
      Promise.reject(`failure: ${error}`)
    ))

  successfulPromise.then(log, logError)
  failingPromise.then(log, logError)
}

// This is the mothership of all things asynchronous
function timeout(duration = 0, shouldReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(`rejected after ${duration}ms`)
      } else {
        resolve(`resolved after ${duration}ms`)
      }
    }, duration)
  })
}





// SOLUTIONS BELOW!







function asyncAwaits() {
  async function successfulAsyncAwait(logger, errorLogger) {
    const result = await timeout(Math.random() * 100 + 100)
    logger(`success: ${result}`)
  }

  async function failedAsyncAwait(logger, errorLogger) {
    const result = await timeout(Math.random() * 100 + 200, true)
    logger(`failed: ${result}`) // will result in unhandledPromiseRejectionWarning
  }

  async function recoveredAsyncAwait(logger, errorLogger) {
    let result
    try {
      result = await timeout(Math.random() * 100 + 200, true)
      logger(`failed: ${result}`) // this would not be executed
    } catch (e) {
      errorLogger(`failed and recovered: ${e}`)
    }
  }
  successfulAsyncAwait(log, logError)
  failedAsyncAwait(log, logError)
  recoveredAsyncAwait(log, logError)
}
