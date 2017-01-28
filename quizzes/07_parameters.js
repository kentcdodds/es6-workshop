console.log(
  // randGen(),
  // randGen(0),
  // randGen(45),
  // defaultParamsAsExpressions(),
  // computeCircleArea(),
  // weatherOnDemand(getCities(), 'Bali', 'London'),
)

function randGen(n) {
  // refactor with default parameter to handle n = undefined
  n = n || 10

  return Math.floor(n * Math.random())
}

function defaultParamsAsExpressions() {
  return getCandy('twix', 'king')

  function getCandy(kind, size, upperKind, callback) {
    requiredParam('kind', kind)
    requiredParam('size', size)
    upperKind = upperKind === undefined ? kind.toUpperCase() : upperKind
    callback = callback === undefined ? function noop() {} : callback

    const result = {kind, size, upperKind}
    callback(result)
    return result
  }

  function requiredParam(argName, arg) {
    if (arg === undefined) {
      throw new Error(`${argName} is required`)
    }
  }
}

// TODO: Make sure the function takes an object as input
// This object, would ideally contain radius (r)
// the x-coordinate (x), and y-coordinate(y)
// Not all of these fields would always be provided
// When not provided, r defaults to 1, while x and y defaults to 0
function computeCircleArea(obj = {}) {
  /* Uncomment this to test what you are actually passing to the function*/
  // console.log(arguments);

  // TODO: Remove all references to obj,
  // using param destructuring
  const radius = obj.r || 1.0
  const xCoordinate = obj.x || 0.0
  const yCoordinate = obj.y || 0.0

  const area = Math.PI * radius * radius

  return `
  The circle centered at (${xCoordinate}, ${yCoordinate}), has area = ${area.toFixed(2)} square unit
  `
}

function weatherOnDemand(args) {
  // Use default parameters, argument destructuring
  // and other Array methods, to refactor this
  const allArgs = Array.prototype.slice.call(arguments)
  const weatherArray = allArgs[0]
  const cities = allArgs.slice(1)

  return weatherArray.filter(cityData => {
    return cities.indexOf(cityData.city) !== -1
  })
}




// helpers

function getCities() {
  return [
    {city: 'London', temp: 50.1},
    {city: 'Bali', temp: 62.3},
    {city: 'Buenos Aires', temp: 89.8},
    {city: 'San Diego', temp: 58.1},
  ]
}








// SOLUTIONS ARE BELOW THIS LINE!










function randGenSOLUTION(n = 10) {
  return Math.floor(n * Math.random())
}

function defaultParamsAsExpressionsSOLUTION() {
  return getCandy('twix', 'king')

  function getCandy(
    kind = requiredParam('kind'),
    size = requiredParam('size'),
    upperKind = kind.toUpperCase(),
    callback = function noop() {},
  ) {
    const result = {kind, size, upperKind}
    callback(result)
    return result
  }

  function requiredParam(argName) {
    throw new Error(`${argName} is required`)
  }
}

function computeCircleAreaSOLUTION({r = 1.0, x = 0.0, y = 0.0} = {}) {
  /* Uncomment this to test what you are actually passing to the function*/
  // console.log(arguments);

  const area = Math.PI * r * r
  return `
  The circle centered at (${x}, ${y}), has area = ${area.toFixed(2)} square unit
  `
}

function weatherOnDemandSOLUTION(weatherArray, ...cities) {
  return weatherArray.filter(cityData => {
    return cities.indexOf(cityData.city) !== -1
  })
}


/* eslint prefer-rest-params:0 */
