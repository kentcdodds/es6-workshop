test('can get the iterator from an array', () => {
  const array = [1, 2, 3]
  // DON'T PEAK AT THE NEXT TESTS!
  const iterator = '?' // how do you get the iterator?
  expect(typeof iterator.next === 'function').toBe(true)
})

test('can next() the iterator multiple times', () => {
  const string = 'hello' // <-- YES, this is iterable!
  const iterator = string[Symbol.iterator]()
  expect(iterator.next()).toEqual(/* ENTER YOUR ANSWER HERE */)
  expect(iterator.next()).toEqual(/* ENTER YOUR ANSWER HERE */)
  expect(iterator.next()).toEqual(/* ENTER YOUR ANSWER HERE */)
  expect(iterator.next()).toEqual(/* ENTER YOUR ANSWER HERE */)
  expect(iterator.next()).toEqual(/* ENTER YOUR ANSWER HERE */)
  expect(iterator.next()).toEqual(/* ENTER YOUR ANSWER HERE */)
  expect(iterator.next()).toEqual(/* ENTER YOUR ANSWER HERE */)
})

test('can iterate over an interable with for .. of', () => {
  const array = [1, 2, 3]
  let sum = 0
  // write a for .. of loop
  // that gets the sum of
  // all items in the array
  // ex: `sum += val`
  expect(sum).toBe(6)
})

test('can use the ... operator on the iterator', () => {
  const set = new Set([1, 2, 2, 3])
  // use destructuring and the ... operator to create a
  // `rest` variable that only has the last two items.
  const [rest] = set
  expect(rest).toEqual([2, 3])
})

test('can create a custom iterator', () => {
  const randomRandomNumbersGenerator = {
    max: 20,
    min: 10,
    // add an iterator function here which will use this object's
    // min and max values to generate a random number of numbers
    // within the min and max which are each random within the min
    // and max.
    // For example: [14, 18, 16, 14, 11, 19, 16, 15, 19, 18, 15]
    // Do it without using a generator function
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
    // rewrite the previous example as a generator function
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

//////// Elaboration & Feedback /////////
/*
http://ws.kcd.im/?ws=ES6+and+Beyond&e=Iterators&em=
*/
test('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(true).toBe(submitted)
})
////////////////////////////////

//////// EXTRA CREDIT ////////

test.skip('add custom iterator to built-in types', () => {
  // How could you make this work using a custom iterator?
  const num = 5
  const result = [...num]
  expect(result).toEqual([0, 1, 2, 3, 4])
})

// If you get this far, try adding a few more tests,
// then file a pull request to add them to the extra credit!
// Learn more here: http://kcd.im/es6-workshop-contributing
