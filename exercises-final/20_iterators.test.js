test('can get the iterator from an array', () => {
  const array = [1, 2, 3]
  const iterator = array[Symbol.iterator]()
  expect(typeof iterator.next === 'function').toBe(true)
})

test('can next() the iterator multiple times', () => {
  const string = 'hello' // <-- YES, this is iterable!
  const iterator = string[Symbol.iterator]()
  expect(iterator.next()).toEqual({value: 'h', done: false})
  expect(iterator.next()).toEqual({value: 'e', done: false})
  expect(iterator.next()).toEqual({value: 'l', done: false})
  expect(iterator.next()).toEqual({value: 'l', done: false})
  expect(iterator.next()).toEqual({value: 'o', done: false})
  expect(iterator.next()).toEqual({value: undefined, done: true})
  expect(iterator.next()).toEqual({value: undefined, done: true})
})

test('can iterate over an interable with for .. of', () => {
  const array = [1, 2, 3]
  let sum = 0
  for (let val of array) {
    sum += val
  }
  expect(sum).toBe(6)
})

test('can use the ... operator on the iterator', () => {
  const set = new Set([1, 2, 2, 3])
  const [first, ...rest] = set
  expect(rest).toEqual([2, 3])
})

test('can create a custom iterator', () => {
  const randomRandomNumbersGenerator = {
    max: 20,
    min: 10,
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
    * [Symbol.iterator]() {
      const random = () => Math.floor(Math.random() * (this.max - this.min)) + this.min
      const randomNumbers = random()
      for (var i = 0; i < randomNumbers; i++) {
        yield random()
      }
    },
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


//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests, then file a pull request to add them to the extra credit!
// Learn more here: https://github.com/kentcdodds/es6-workshop/blob/master/CONTRIBUTING.md#development
