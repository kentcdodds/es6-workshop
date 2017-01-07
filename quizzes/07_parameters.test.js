console.log(
  // randGen();
  // weatherOnDemand(arr, 'Bali', 'London')``
)

function randGen(n) {
  // generates a random integer betweeb 0 and n
  // assume n is always positive
  // randGen(n) can be at least 0 and at max n - 1
  // If n is undefined, output can be either 0 or 1
  // TODO: refactor with default parameter to handle n = undefined

  return Math.floor(n * Math.random());
}

function weatherOnDemand(args) {
  // to be called as weatherOnDemand(arr, city1, city2, ...)
  // the arr is structured as an array of objects
  // each object has two fields, city and temp
  // {'city': 'Paris', 'temp': 67}
  // Your job is to return a filtered array
  // which has only the objects with cities mentioned as other arguments
  // Typical use case
  // weatherOnDemand([{city: 'Paris', temp: 66}, {city: 'Munich', temp: 63.3},
  // {city: 'Moscow', temp: 45}], 'Moscow', 'Paris')
  // = [[{city: 'Paris', temp: 66}, {city: 'Moscow', temp: 45}]
  // If no city is provided, return empty array
  // TODO: Use default parameters, argument destructuring
  //  and other Array methods to implement this. An arr will always be provided
}

// do not alter anything below
const arr = [
  {
    "city": 'London',
    "temp": 50.1,
  },
  {
    "city": 'Bali',
    "temp": 62.3,
  },
  {
    "city": 'Buenos Aires',
    "temp": 89.8,
  },
  {
    "city": 'San Diego',
    "temp": 58.1,
  }
]
