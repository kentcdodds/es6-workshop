console.log(
  // randGen(),
  // randGen(0),
  // randGen(45),
  // weatherOnDemand(getCities(), 'Bali', 'London'),
  // defaultParamsAsExpressions(),
)

function randGen(n) {
  // refactor with default parameter to handle n = undefined
  n = n || 10

  return Math.floor(n * Math.random())
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


function weatherOnDemandSOLUTION(weatherArray, ...cities) {
  return weatherArray.filter(cityData => {
    return cities.indexOf(cityData.city) !== -1
  })
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


/* eslint prefer-rest-params:0 */
