console.log(
  // getAverage();
  // getAngle();
  // getLanguage();
  // getAvgTemp();
  // getTopTwo([7, 4, 8, 1, 9, 3]);
  // getElements();
  // getSecondItem();
);

// Do not alter anything below this
const getVoxel = () = > ({
    x: 3.6,
    y: 7.8,
    z: 4.3,
});

const greet = () => ({
  'text': 'dattebayo',
  'locale': 'Japanese', // this is intentional
});

const getWeather = () => ({
  'location': 'Toronto',
  'unit': 'Celsius'
  'today': {
    'max': 2.6,
    'min': -6.3,
  },
  'tomorrow': {
    'max': 3.2,
    'min': -5.8,
  },
});

const getArray = () => [...Array(8).keys()];

const getFood = () => ([
  ['carrots', 'beans', 'peas', 'lettuce'],
  ['apple', 'mango', 'orange'],
  ['cookies', 'cake', 'pizza', 'chocolate']
]);



function getAverage() {
  // refactor with object destructuring
  const obj = getVoxel();

  return Math.floor(( obj.x + obj.y + obj.z ) / 3.0);
}

function getAngle() {
  // refactor with object destructuring
  const obj = getVoxel();

  return obj.angle;
}

function getLanguage() {
  // refactor with aliasing destructured variable
  const greeting = greet();
  const language = greeting.locale;

  return language;
}

function getAvgTemp() {
  // returns an object with average max and average min
  // refactor with nestesd destructuring
  const maxToday = getWeather().today.max;
  const minToday = getWeather().today.min;

  const maxTomorrow = getWeather().tomorrow.max;
  const minTomorrow = getWeather().tomorrow.min;

  return {
    max: (maxToday + maxTomorrow) / 2.0,
    min: (minToday + minTomorrow) / 2.0,
    unit: getWeather().unit,
  }
}

function getTopTwo(arr) {
  // refactor with array destructuring
  // for now, we can mutate the array input
  arr.sort(function(a, b){
    return b - a;
  });
  const largest = arr[0];
  const nextLargest = arr[1];

  return {
    largest: largest,
    nextLargest: nextLargest,
  }
}

function getElements() {
  // returns 1st, 2nd and last element from an array
  // refactor with skipped destructuring for arrays
  const arr = getArray();
  const first = arr[0];
  const second = arr[1];
  const fifth = arr[4];

  return {
    first: first,
    second: second,
    fifth: fifth,
  }
}

function getSecondItem() {
  // returns second food item from each group
  // refactor with nested destructuring of arrays
  const food = getFood();
  const firstItem = food[0][1];
  const secondItem = food[1][1];
  const thirdItem = food[2][1];

  return {
    first: firstItem,
    second: secondItem,
    third: thirdItem
  }

}
