function curryAdd(a){
  // TODO: refactor this function
  // rewrite with arrow syntax
  // remove 'function' and 'return' keywords
  return function(b) {
    return function(c) {
      return a + b + c;
    }
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
 * This is a complex example, 
 * mostly to show that arrow refactoring
 * doesn't need to hurt readability
 * You may use () => () or () => {}
 * based on how complex you think the code can be
 */
function shift(str, amount=1) {
  return str.replace(/[a-z]/g, function(x){
    // first, compute the index of the character
    // within alphabet
    // a = 0, b = 1, c = 2,..., z = 25
    var index = x.charCodeAt(0) -  "a".charCodeAt();
    // take modulo, because after adding, we need it to be
    // in the range [0, 1, ..., 25]
    var shiftedIndex = (index + amount) % 26;
    // now, convert it back to the shifted character
    var shiftedCharCode = (shiftedIndex + "a".charCodeAt())
    return String.fromCharCode(shiftedCharCode)
  })
}

function getPopulation() {
  return {
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
    //
    // Then try with arrow function and remove the fix
    // Finally, refactor with object destructuring
    return this.data.map(function(element){
      return `Population in ${element.city} is ${element.value} ${this.unit}`
    }); // hint: pass this as second argument to bind properly
  }
}}



console.log(
  // curryAdd(2)(4)(6)
  // genSeries(7, 100)
  // shift("havin pasta for brunch")
  // getPopulation().display()
)