test('can get the iterator from an array', () => {
  const array = [1, 2, 3]
  // FINAL_START
  const iterator = array[Symbol.iterator]()
  // FINAL_END
  // WORKSHOP_START
  // DON'T PEAK AT THE NEXT TESTS!
  const iterator = '?' // how do you get the iterator?
  // WORKSHOP_END
  expect(typeof iterator.next === 'function').toBe(true)
})

test('can next() the iterator multiple times', () => {
  const string = 'hello' // <-- YES, this is iterable!
  const iterator = string[Symbol.iterator]()
  // FINAL_START
  expect(iterator.next()).toEqual({value: 'h', done: false})
  expect(iterator.next()).toEqual({value: 'e', done: false})
  expect(iterator.next()).toEqual({value: 'l', done: false})
  expect(iterator.next()).toEqual({value: 'l', done: false})
  expect(iterator.next()).toEqual({value: 'o', done: false})
  expect(iterator.next()).toEqual({value: undefined, done: true})
  expect(iterator.next()).toEqual({value: undefined, done: true})
  // FINAL_END
  // WORKSHOP_START
  expect(iterator.next()).toEqual(/* ENTER YOUR ANSWER HERE */)
  expect(iterator.next()).toEqual(/* ENTER YOUR ANSWER HERE */)
  expect(iterator.next()).toEqual(/* ENTER YOUR ANSWER HERE */)
  expect(iterator.next()).toEqual(/* ENTER YOUR ANSWER HERE */)
  expect(iterator.next()).toEqual(/* ENTER YOUR ANSWER HERE */)
  expect(iterator.next()).toEqual(/* ENTER YOUR ANSWER HERE */)
  expect(iterator.next()).toEqual(/* ENTER YOUR ANSWER HERE */)
  // WORKSHOP_END
})

test('can iterate over an interable with for .. of', () => {
  const array = [1, 2, 3]
  let sum = 0
  // FINAL_START
  for (let val of array) {
    sum += val
  }
  // FINAL_END
  // WORKSHOP_START
  // write a for .. of loop
  // that gets the sum of
  // all items in the array
  // ex: `sum += val`
  // WORKSHOP_END
  expect(sum).toBe(6)
})

test('can use the ... operator on the iterator', () => {
  const set = new Set([1, 2, 2, 3])
  // FINAL_START
  const [first, ...rest] = set
  // FINAL_END
  // WORKSHOP_START
  // use destructuring and the ... operator to create a
  // `rest` variable that only has the last two items.
  const [rest] = set
  // WORKSHOP_END
  expect(rest).toEqual([2, 3])
})

test('can create a custom iterator', () => {
  const randomRandomNumbersGenerator = {
    max: 20,
    min: 10,
    // FINAL_START
    [Symbol.iterator]() {
      const random = () => Math.floor(Math.random() * (this.max - this.min)) + this.min
      const randomNumbers = random()
      let index = 0
      return {
        next() {
          const done = index >= randomNumbers
          const value = done ? undefined : random()
          index++
          return {value, done}
        },
      }
    },
    // FINAL_END
    // WORKSHOP_START
    // add an iterator function here which will use this object's
    // min and max values to generate a random number of numbers
    // within the min and max which are each random within the min
    // and max.
    // For example: [14, 18, 16, 14, 11, 19, 16, 15, 19, 18, 15]
    // Do it without using a generator function
    // WORKSHOP_END
  }

  expect(iteratorWorks()).toBe(true)

  function iteratorWorks() {
    const randomNumbers = [...randomRandomNumbersGenerator]
    const {max, min} = randomRandomNumbersGenerator
    const tooManyNumbers = randomNumbers.length > max
    const tooFewNumbers = randomNumbers.length < min
    const numbersInBounds = randomNumbers.every(num => num <= max && num >= min)
    return !tooManyNumbers && !tooFewNumbers && numbersInBounds
  }
})

test('can create a custom iterator with a generator', () => {
  const randomRandomNumbersGenerator = {
    max: 20,
    min: 10,
    // FINAL_START
    * [Symbol.iterator]() {
      const random = () => Math.floor(Math.random() * (this.max - this.min)) + this.min
      const randomNumbers = random()
      for (var i = 0; i < randomNumbers; i++) {
        yield random()
      }
    },
    // FINAL_END
    // WORKSHOP_START
    // rewrite the previous example as a generator function
    // WORKSHOP_END
  }

  expect(iteratorWorks()).toBe(true)

  function iteratorWorks() {
    const randomNumbers = [...randomRandomNumbersGenerator]
    const {max, min} = randomRandomNumbersGenerator
    const tooManyNumbers = randomNumbers.length > max
    const tooFewNumbers = randomNumbers.length < min
    const numbersInBounds = randomNumbers.every(num => num <= max && num >= min)
    return !tooManyNumbers && !tooFewNumbers && numbersInBounds
  }
})

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
http://ws.kcd.im/?ws=ES6+and+Beyond&e=Iterators&em=
*/
////////////////////////////////
// WORKSHOP_END

//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests, then file a pull request to add them to the extra credit!
// Learn more here: https://github.com/kentcdodds/es6-workshop/blob/master/CONTRIBUTING.md#development
