/* eslint object-shorthand:0 */

console.log(
  // getAverage(),
  // getAngle(),
  // getLanguage(),
  // getAvgTemp(),
  // getTopTwo(),
  // getElements(),
  // getSecondItem(),
  // nestedArrayAndObject(),
)

function getAverage() {
  // refactor with object destructuring
  const obj = getVoxel()

  return Math.floor((obj.x + obj.y + obj.z) / 3.0)
}

function getAngle() {
  // refactor with object destructuring
  const obj = getVoxel()

  return obj.angle
}

function getLanguage() {
  // refactor with aliasing destructured variable
  const greeting = greet()
  const language = greeting.locale

  return language
}

function getAvgTemp() {
  // returns an object with average max and average min
  // refactor with nestesd destructuring
  const weather = getWeather()
  const maxToday = weather.today.max
  const minToday = weather.today.min

  const maxTomorrow = weather.tomorrow.max
  const minTomorrow = weather.tomorrow.min

  return {
    max: (maxToday + maxTomorrow) / 2.0,
    min: (minToday + minTomorrow) / 2.0,
    unit: weather.unit,
  }
}

function getTopTwo() {
  // refactor with array destructuring
  const arr = getArray()
  const firstItem = arr[0]
  const secondItem = arr[1]

  return {
    firstItem: firstItem,
    secondItem: secondItem,
  }
}

function getElements() {
  // returns 1st, 2nd and last element from an array
  // refactor with skipped destructuring for arrays
  const arr = getArray()
  const first = arr[0]
  const second = arr[1]
  const fifth = arr[4]

  return {
    first: first,
    second: second,
    fifth: fifth,
  }
}

function getSecondItem() {
  // returns second food item from each group
  // refactor with nested destructuring of arrays
  const food = getFood()
  const firstItem = food[0][1]
  const secondItem = food[1][1]
  const thirdItem = food[2][1]

  return {
    first: firstItem,
    second: secondItem,
    third: thirdItem,
  }
}

function nestedArrayAndObject() {
  // refactor this to a single line of destructuring... And then enver do that again...
  const info = getTVSeriesInfo()
  const title = info.title
  const protagonistName = info.protagonist.name
  const enemy = info.protagonist.enemies[3]
  const enemyTitle = enemy.title
  const enemyName = enemy.name
  return `${enemyName} (${enemyTitle}) is an enemy to ${protagonistName} in "${title}"`
}

// helper methods

function getVoxel() {
  return {
    x: 3.6,
    y: 7.8,
    z: 4.3,
  }
}

function greet() {
  return {
    text: 'dattebayo',
    locale: 'Japanese',
  }
}

function getWeather() {
  return {
    location: 'Toronto',
    unit: 'Celsius',
    today: {
      max: 2.6,
      min: -6.3,
    },
    tomorrow: {
      max: 3.2,
      min: -5.8,
    },
  }
}

function getArray() {
  return [...Array(8).keys()]
}

function getFood() {
  return [
    ['carrots', 'beans', 'peas', 'lettuce'],
    ['apple', 'mango', 'orange'],
    ['cookies', 'cake', 'pizza', 'chocolate'],
  ]
}

function getTVSeriesInfo() {
  return {
    title: 'Once Upon a Time',
    protagonist: {
      name: 'Emma Swan',
      enemies: [
        {
          name: 'Regina Mills',
          title: 'Evil Queen',
        },
        {
          name: 'Cora Mills',
          title: 'Queen of Hearts',
        },
        {
          name: 'Peter Pan',
          title: `The boy who wouldn't grow up`,
        },
        {
          name: 'Zelena',
          title: 'The Wicked Witch',
        },
      ],
    },
  }
}







// SOLUTIONS ARE BELOW THIS LINE!












function getAverageSOLUTION() {
  const {x, y, z} = getVoxel()
  return Math.floor((x + y + z) / 3.0)
}

function getAngleSOLUTION() {
  const {angle} = getVoxel()
  return angle
}

function getLanguageSOLUTION() {
  const {locale: language} = greet()
  return language
}

function getAvgTempSOLUTION() {
  const {
    unit,
    today: {max: maxToday, min: minToday},
    tomorrow: {max: maxTomorrow, min: minTomorrow},
  } = getWeather()

  return {
    max: (maxToday + maxTomorrow) / 2.0,
    min: (minToday + minTomorrow) / 2.0,
    unit: unit,
  }
}

function getTopTwoSOLUTION() {
  const arr = getArray()
  const [first, second] = arr

  return {
    first: first,
    second: second,
  }
}

function getElementsSOLUTION() {
  const arr = getArray()
  const [first, second,,, fifth] = arr

  return {
    first: first,
    second: second,
    fifth: fifth,
  }
}

function getSecondItemSOLUTION() {
  const food = getFood()
  const [[, firstItem], [, secondItem], [, thirdItem]] = food

  return {
    first: firstItem,
    second: secondItem,
    third: thirdItem,
  }
}

function nestedArrayAndObjectSOLUTION() {
  const info = getTVSeriesInfo()
  const {title, protagonist: {name: protagonistName, enemies: [,,, {title: enemyTitle, name: enemyName}]}} = info
  return `${enemyName} (${enemyTitle}) is an enemy to ${protagonistName} in "${title}"`
}
