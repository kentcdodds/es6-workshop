console.log(
  // randGen(),
  // randGen(45),
  weatherOnDemand(getCities(), 'Bali', 'London'),
)

function randGen(n) {
  // refactor with default parameter to handle n = undefined

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

/* eslint prefer-rest-params:0 */
