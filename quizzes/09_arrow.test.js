console.log(
  // curryAdd(2)(4)
  // genSeries(7, 100)
  // shift("havin pasta for brunch")
)

// population.display()

function curryAdd(a){
  // TODO: refactor this function
  // rewrite with arrow syntax
  // remove function and return keywords
  return function(b) {
    return a + b;
  }
}

function genSeries(n=10, limit=10) {
  // TODO: refactor this function
  // remove all keywords like function and return
  // remove the loop
  // Use spread opertaor, Array functions in ES6, like Array.from()

  // this function returns an array of n random integers
  // Each integer can be less than or equal to limit
  // limit is 10 by default, if not provided
  let arr = [];

  for(let i = 0 ; i < n ; i++) {
    arr.push(Math.floor(Math.random() * limit))
  }
  return arr;
}

/**
 * This is a complex example, be careful while refactoring.
 */
function shift(str, amount=1) {
  // TODO: shift() shifts the input string
  // assume str is made of only lowercase alphabet letters
  // update the RegEx below
  str.replace(/\/g, function(x){
    // make the shift!
    // remember to normalize before proceeding
    // and don't forget to take a modulo
    // z => a, x => y
  })
}

const population = {
  'unit': 'Million',
  'data': [
    {
      "city": "Tokyo",
      "value": 37.833,
    },
    {
      "city": "Sanghai",
      "value": 22.991,
    },
    {
      "city": "New Delhi",
      "value": 24.953,
    }
  ],

  display: function() {
    // TODO: this code has an error
    // will print undefined in a few places
    // first, think of the fix
    // Then try with arrow function and remove the fix
    // Finally, refactor with object destructuring
    this.data.forEach(function(element){
      console.log(`The population in ${element.city} is ${element.value} ${this.unit}`)
    })
  }
}
