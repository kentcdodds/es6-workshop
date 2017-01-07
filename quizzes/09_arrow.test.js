console.log(
  // curryAdd(2)(4)(6),
  // genSeries(),
  // genSeries(7, 100),
  // shift("havin pasta for brunch"),
  // shift("havin pasta for brunch", 13),
  // shift("univa cnfgn sbe oehapu", 13),
  // getPopulation().display()
)

function curryAdd(a) {
  // TODO: refactor this function
  // rewrite with arrow syntax
  return function(b) {
    return function(c) {
      return a + b + c
    }
  }
}

function genSeries(n = 10, limit = 10) {
  // TODO: refactor this function
  // remove the loop
  // Use spread opertaor, Array functions in ES6, like Array.from()

  // this function returns an array of n random integers
  // Each integer can be less than or equal to limit
  // limit is 10 by default, if not provided
  const arr = []

  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * limit))
  }
  return arr
}

/**
 * This is a complex example,
 * mostly to show that arrow refactoring
 * doesn't need to hurt readability
 * You may use () => () or () => {}
 * based on how complex you think the code can be
 */
function shift(str, amount = 1) {
  return str.replace(/[a-z]/g, x => {
    // first, compute the index of the character
    // within alphabet
    // a = 0, b = 1, c = 2,..., z = 25
    const index = x.charCodeAt(0) - 'a'.charCodeAt()
    // take modulo, because after adding, we need it to be
    // in the range [0, 1, ..., 25]
    const shiftedIndex = (index + amount) % 26
    // now, convert it back to the shifted character
    const shiftedCharCode = (shiftedIndex + 'a'.charCodeAt())
    return String.fromCharCode(shiftedCharCode)
  })
}

function getPopulation() {
  return {
    unit: 'Million',
    data: [
      {
        city: 'Tokyo',
        value: 37.833,
      },
      {
        city: 'Sanghai',
        value: 22.991,
      },
      {
        city: 'New Delhi',
        value: 24.953,
      },
    ],

    display: function() {
    // TODO: refactor with arrow function
    // shorten with method shorthand
    // Finally, refactor with object destructuring
      return this.data.map(function(element) {
        return `Population in ${element.city} is ${element.value} ${this.unit}`
      }, this) // passing `this` as second argument to bind properly
    },
  }
}









// SOLUTIONS ARE BELOW THIS LINE!
// No Peeking!











function curryAddSOLUTION(a) {
  return b => c => a + b + c
}

function genSeriesSOLUTION(n = 10, limit = 10) {
  return Array.from({length: n}, () => (
    Math.floor(Math.random() * limit)
  ))
}

function shiftSOLUTION(str, amount = 1) {
  return str.replace(/[a-z]/g, x => {
    // first, compute the index of the character
    // within alphabet
    // a = 0, b = 1, c = 2,..., z = 25
    const index = x.charCodeAt(0) - 'a'.charCodeAt()
    // take modulo, because after adding, we need it to be
    // in the range [0, 1, ..., 25]
    const shiftedIndex = (index + amount) % 26
    // now, convert it back to the shifted character
    const shiftedCharCode = (shiftedIndex + 'a'.charCodeAt())
    return String.fromCharCode(shiftedCharCode)
  })
}


function getPopulationSOLUTION() {
  return {
    unit: 'Million',
    data: [
      {
        city: 'Tokyo',
        value: 37.833,
      },
      {
        city: 'Sanghai',
        value: 22.991,
      },
      {
        city: 'New Delhi',
        value: 24.953,
      },
    ],

    displaySOLUTION() {
    // TODO: refactor with arrow function
    // Finally, refactor with object destructuring
      return this.data.map(({city, value}) => (
      `Population in ${city} is ${value} ${this.unit}`
    ))
    },
  }
}
