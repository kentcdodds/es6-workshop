import log from './pretty-log'

function gettingAnIterator() {
  // what does this return?
  const array = [1, 2, 3]
  const iterator = array[Symbol.iterator]()
  // hint, first is {value: 1, done: false}
  const first = iterator.next()
  const second = iterator.next()
  const third = iterator.next()
  const fourth = iterator.next()
  const fifth = iterator.next()
  return {first, second, third, fourth, fifth}
}
// log(gettingAnIterator())

function builtInIterables() {
  // what does this return?
  // which of these things is iterable?
  return {
    array: isIterable([]),
    boolean: isIterable(true),
    string: isIterable(''),
    object: isIterable({}),
    number: isIterable(0),
    function: isIterable(isIterable),
    map: isIterable(new Map()),
    weakMap: isIterable(new WeakMap()),
    set: isIterable(new Set()),
    generator: isIterable(myGenerator),
    generatorResult: isIterable(myGenerator()),
  }

  function* myGenerator() {}

  function isIterable(thing) {
    return Boolean(thing[Symbol.iterator])
  }
}
// log(builtInIterables())

function canRestAndSpreadIterables() {
  const string = '1hey'
  const set = new Set(['h', 'o'])
  const combinedSet = new Set([...string, ...set])
  const [, ...rest] = combinedSet
  return rest
}
// log(canRestAndSpreadIterables())

function customIterator() {
  const cars = {
    honda: 'Civic',
    volkswagen: 'Jetta',
    kia: 'Soul',
    chevrolet: 'Cruze',
    hyundai: 'Elantra',
    ford: 'Focus',
    nissan: 'Sentra',
    toyota: 'Corolla',
  }
  return [...cars]
}
// log(customIterator())

function customIteratorWithGenerator() {
  const cars = {
    honda: 'Civic',
    volkswagen: 'Jetta',
    kia: 'Soul',
    chevrolet: 'Cruze',
    hyundai: 'Elantra',
    ford: 'Focus',
    nissan: 'Sentra',
    toyota: 'Corolla',
    [Symbol.iterator]() {
      const keys = Object.keys(this)
      let currentIndex = 0
      return {
        next: () => {
          const value = this[keys[currentIndex]]
          const done = currentIndex > keys.length
          currentIndex++
          return {value, done}
        },
      }
    },
  }
  return [...cars]
}
// log(customIteratorWithGenerator())

function customIteratorWithArguments() {
  const cars = {
    honda: 'Civic',
    volkswagen: 'Jetta',
    kia: 'Soul',
    chevrolet: 'Cruze',
    hyundai: 'Elantra',
    ford: 'Focus',
    nissan: 'Sentra',
    toyota: 'Corolla',
    *[Symbol.iterator]() {
      const keys = Object.keys(this)
      for (let i = 0; i < keys.length; i++) {
        const value = this[keys[i]]
        yield value
      }
    },
  }
  // how can I make the iterator accept an argument
  // and pass along that argument
  // goal: only get the items that include the letter `e`
  return [...cars]
}
// log(customIteratorWithArguments())

// SOLUTIONS BELOW!

function customIteratorSOLUTION() {
  const cars = {
    honda: 'Civic',
    volkswagen: 'Jetta',
    kia: 'Soul',
    chevrolet: 'Cruze',
    hyundai: 'Elantra',
    ford: 'Focus',
    nissan: 'Sentra',
    toyota: 'Corolla',
    [Symbol.iterator]() {
      const keys = Object.keys(this)
      let currentIndex = 0
      return {
        next: () => {
          const value = this[keys[currentIndex]]
          const done = currentIndex >= keys.length
          currentIndex++
          return {value, done}
        },
      }
    },
  }
  return [...cars]
}
// log(customIteratorSOLUTION())

function customIteratorWithGeneratorSOLUTION() {
  const cars = {
    honda: 'Civic',
    volkswagen: 'Jetta',
    kia: 'Soul',
    chevrolet: 'Cruze',
    hyundai: 'Elantra',
    ford: 'Focus',
    nissan: 'Sentra',
    toyota: 'Corolla',
    *[Symbol.iterator]() {
      const keys = Object.keys(this)
      for (let i = 0; i < keys.length; i++) {
        const value = this[keys[i]]
        yield value
      }
    },
  }
  return [...cars]
}
// log(customIteratorWithGeneratorSOLUTION())

function customIteratorWithArgumentsSOLUTION() {
  const cars = {
    honda: 'Civic',
    volkswagen: 'Jetta',
    kia: 'Soul',
    chevrolet: 'Cruze',
    hyundai: 'Elantra',
    ford: 'Focus',
    nissan: 'Sentra',
    toyota: 'Corolla',
    *[Symbol.iterator](included = '') {
      const keys = Object.keys(this)
      for (let i = 0; i < keys.length; i++) {
        const value = this[keys[i]]
        if (value.toLowerCase().includes(included)) {
          yield value
        }
      }
    },
  }
  return [...cars[Symbol.iterator]('e')]
}
// log(customIteratorWithArgumentsSOLUTION())
