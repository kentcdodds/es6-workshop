// COMMENT_START eslint trickery :)
/* eslint no-unreachable:0 */
// COMMENT_END
test(`should resolve`, () => {
  return pickApple('ripe')
    .then(result => {
      // FINAL_START
      expect(result).toBe('ripe apple')
      // FINAL_END
      // WORKSHOP_START
      // throw new Error('this should not run')
      // expect(result).toBe(/*ENTER GUESS HERE*/)
      throw new Error('assert or throw here')
      // WORKSHOP_END
    }, error => {
      // FINAL_START
      throw new Error('this should not run')
      // FINAL_END
      // WORKSHOP_START
      // throw new Error('this should not run')
      // expect(error).toBe(/*ENTER GUESS HERE*/)
      throw new Error('assert or throw here')
      // WORKSHOP_END
    })
    .catch(error => {
      // FINAL_START
      throw new Error('this should not run')
      // FINAL_END
      // WORKSHOP_START
      // throw new Error('this should not run')
      // expect(error).toBe(/*ENTER GUESS HERE*/)
      throw new Error('assert or throw here')
      // WORKSHOP_END
    })
})

test(`should reject`, () => {
  return pickApple('unripe')
    .then(result => {
      // FINAL_START
      throw new Error('this should not run')
      // FINAL_END
      // WORKSHOP_START
      // throw new Error('this should not run')
      // expect(result).toBe(/*ENTER GUESS HERE*/)
      throw new Error('assert or throw here')
      // WORKSHOP_END
    }, error => {
      // FINAL_START
      expect(error).toBe('unripe apple')
      // FINAL_END
      // WORKSHOP_START
      // throw new Error('this should not run')
      // expect(error).toBe(/*ENTER GUESS HERE*/)
      throw new Error('assert or throw here')
      // WORKSHOP_END
    })
    .catch(error => {
      // FINAL_START
      throw new Error('this should not run')
      // FINAL_END
      // WORKSHOP_START
      // throw new Error('this should not run')
      // expect(error).toBe(/*ENTER GUESS HERE*/)
      throw new Error('assert or throw here')
      // WORKSHOP_END
    })
})

test(`errors can be caught`, () => {
  return pickApple()
    .then(result => {
      // FINAL_START
      throw new Error('this should not run')
      // FINAL_END
      // WORKSHOP_START
      // throw new Error('this should not run')
      // expect(result).toBe(/*ENTER GUESS HERE*/)
      throw new Error('assert or throw here')
      // WORKSHOP_END
    })
    .catch(error => {
      // FINAL_START
      expect(error.message).toBe('out of apples')
      // FINAL_END
      // WORKSHOP_START
      // throw new Error('this should not run')
      // expect(error).toBe(/*ENTER GUESS HERE*/)
      throw new Error('assert or throw here')
      // WORKSHOP_END
    })
})

function pickApple(ripeness) {
  // Immediately return a promise which will eventually get resolved
  // or rejected by calling the corresponding function.
  return new Promise((resolve, reject) => {
    // Do something asynchronous. Could be AJAX, using a timeout here.
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

// WORKSHOP_START
//////// Elaboration /////////
// Please write, in your own words
// a few of the core concepts from
// the feature(s) in this exercise
//
// 1.
// 2.
// 3.
////////////////////////////////
//
/////////// Feedback ///////////
/*
http://ws.kcd.im/ws=ES6+and+Beyond&e=Promises&em=
*/
////////////////////////////////
// WORKSHOP_END

//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests, then file a pull request to add them to the extra credit!
// Learn more here: https://github.com/kentcdodds/es6-workshop/blob/master/CONTRIBUTING.md#development
