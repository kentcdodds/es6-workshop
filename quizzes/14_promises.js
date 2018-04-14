// callbacks()
// promises()

function callbacks() {
  // refactor to promises

  // successful
  logResult(cb => {
    timeout(100, false, (error, result) => {
      // ignore handle error
      cb(null, `success: ${result}`)
    })
  })

  // failing
  logResult(cb => {
    timeout(100, true, (error, result) => {
      cb(`failure: ${error}`)
      // ignore success
    })
  })

  // error recovery
  logResult(cb => {
    timeout(200, true, (error, result) => {
      if (error) {
        // recoving from an error
        return cb(null, `Recovered from error: ${error}`)
      }
      cb(null, `${result} with stuff`)
    })
  })

  // wild example...
  logResult(cb => {
    timeout(100, false, (error1, result1) => {
      if (error1) {
        return catcher(error1)
      }
      timeout(200, false, (error2, result2) => {
        if (error2) {
          return catcher(error2)
        }
        catcher(new Error('hmm'))
      })
    })
    function catcher(ignoredError) {
      const combinedCallback = waitForAll(2, cb)
      timeout(200, false, combinedCallback)
      timeout(100, false, combinedCallback)
    }

    function waitForAll(number, finalCallback) {
      const allResults = []
      let errored = false
      return function callback(error, result) {
        if (error) {
          // TODO: handle this...
          finalCallback(error)
          errored = true
        }
        if (errored) {
          return
        }
        allResults.push(result)
        if (allResults.length === number) {
          finalCallback(null, allResults)
        }
      }
    }
  })

  function logResult(fn) {
    fn((error, result) => {
      if (error) {
        logError(error)
      } else if (result) {
        log(result)
      }
    })
  }

  function timeout(duration, shouldError, callback) {
    setTimeout(() => {
      if (shouldError) {
        callback(`rejected after ${duration}ms`)
      } else {
        callback(null, `resolved after ${duration}ms`)
      }
    }, duration)
  }
}

function log(...args) {
  console.log(...args)
}

function logError(...args) {
  console.error(...args)
}

/*







SOLUTIONS ARE BELOW









 */

function promises() {
  const successfulPromise = timeout(100).then(result => {
    return `success: ${result}`
  })

  const failingPromise = timeout(100, true).then(null, error => {
    return Promise.reject(`failure: ${error}`)
  })

  const caughtPromise = timeout(200, true).then(
    result => {
      return `${result} with stuff`
    },
    error => {
      return Promise.resolve(`Recovered from error: ${error}`)
    },
  )

  const otherStuffPromise = timeout(100)
    .then(() => {
      return timeout(200)
    })
    .then(() => {
      throw new Error('hmm')
    })
    .catch(() => {
      return Promise.all([timeout(100), timeout(200)])
    })

  successfulPromise.then(log, logError)
  failingPromise.then(log, logError)
  caughtPromise.then(log, logError)
  otherStuffPromise.then(log, logError)

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
}

/* eslint consistent-return:0 */

/*
Concepts to cover:
- .then(successHandler)
- .then(successHandler, errorHandler)
- .catch(errorHandler)
- Promise Tree (chaining)
- state
  - pending
  - resolved
  - rejected
- Promise.resolve
- Promise.reject
- returning a promise in successHandler
  - passing a promise to Promise.resolve
- returning anything in an errorHandler
  - passing a promise to Promise.reject
- error in successHandler
- non-error in errorHandler
- recovering from .catch
 */
