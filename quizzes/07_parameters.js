import log from './pretty-log'

function basicDefaultParam() {
  return [randGen(), randGen(4), randGen(0)]
  function randGen(n) {
    // refactor with default parameter to handle n = undefined
    n = n || 10

    return Math.floor(n * Math.random())
  }
}
// log(basicDefaultParam())

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
// log(defaultParamsAsExpressions())

function restParams() {
  const availableCities = [
    {city: 'London', temp: 50.1},
    {city: 'Bali', temp: 62.3},
    {city: 'Buenos Aires', temp: 89.8},
    {city: 'San Diego', temp: 58.1},
  ]
  return weatherOnDemand(availableCities, 'Bali', 'London')

  function weatherOnDemand() {
    // Use default parameters, argument destructuring
    // and other Array methods, to refactor this
    const allArgs = Array.prototype.slice.call(arguments)
    const weatherArray = allArgs[0]
    const cities = allArgs.slice(1)

    return weatherArray.filter(cityData => {
      return cities.indexOf(cityData.city) !== -1
    })
  }
}
// log(restParams())

function destructureWithDefaultParams() {
  return [
    computeCircleArea(),
    computeCircleArea({r: 2}),
    computeCircleArea({r: 3, x: 8, y: 6}),
  ]
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

    return `Circle at (${xCoordinate}, ${yCoordinate}), with radius ${radius}, has area = ${area.toFixed(
      2,
    )}`
  }
}

// log(destructureWithDefaultParams())

/*







SOLUTIONS ARE BELOW









 */

function basicDefaultParamSOLUTION() {
  return [randGen(), randGen(4), randGen(0)]
  function randGen(n = 10) {
    return Math.floor(n * Math.random())
  }
}
// log(basicDefaultParamSOLUTION())

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
// log(defaultParamsAsExpressionsSOLUTION())

function restParamsSOLUTION() {
  const availableCities = [
    {city: 'London', temp: 50.1},
    {city: 'Bali', temp: 62.3},
    {city: 'Buenos Aires', temp: 89.8},
    {city: 'San Diego', temp: 58.1},
  ]
  return weatherOnDemand(availableCities, 'Bali', 'London')

  function weatherOnDemand(weatherArray, ...cities) {
    return weatherArray.filter(cityData => {
      return cities.indexOf(cityData.city) !== -1
    })
  }
}
// log(restParamsSOLUTION())

function destructureWithDefaultParamsSOLUTION() {
  return [
    computeCircleArea(),
    computeCircleArea({r: 2}),
    computeCircleArea({r: 3, x: 8, y: 6}),
  ]
  function computeCircleArea({r = 1.0, x = 0.0, y = 0.0} = {}) {
    const area = Math.PI * r * r
    return `Circle at (${x}, ${y}), with radius ${r}, has area = ${area.toFixed(
      2,
    )}`
  }
}

// log(destructureWithDefaultParamsSOLUTION())

/* eslint prefer-rest-params:0 */
