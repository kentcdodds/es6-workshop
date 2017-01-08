// perform a coin toss
const coinToss = () => new Promise((resolve) => {
  setTimeout(() => {
     const r = Math.random()
     if (r < 0.5) {
       resolve('head')
     } else {
       resolve('tail')
     }
  }, 200)
}

// TODO: Print the output of the coin toss
coinToss()

// TODO: Reimplement coin toss to handle rejection
// so that the following works
// You have to implement coinTossModified()
// which is slightly different than coinToss()
coinTossModified()
  .then(
    (outcome) => {
      console.log('Yay! we got a head');
    },
    (error) => {
      console.error('Ohh no! We lost')
    }
  )

/**
 * TODO:
 * Refactoring callback style code to promises
 * Inspired by examples from getify/You-Dont-Know-JS
 *
 * We are trying to get two values
 * and compare them
 * They can return in any order, after a delay
 *
 * Just try to see how difficult to read
 * the code is
 */
const getNum = (cb) => {
  const { floor, random } = Math;
  // let's fake the delay with a timeout
  setTimeout(() => {
    cb(floor(random() * 100));
  }, floor(random() * 300))
}

const display = (a, b) => {
  console.log(`
    a = ${a}
    b = ${b}
    Max(a, b) = ${Math.max(a, b)}
    `
  );
};

const compare = (getFunc, cb) => {
  // a and b would be assigned
  // can happen in any order
  let a, b;
  getFunc((aValue) => {
    a = aValue;
    // has b been set?
    if(b !== undefined) {
      cb(a, b)
    }
  });
  getFunc((bValue) => {
    b = bValue;

    // has a been set?
    if(a !== undefined) {
      cb(a, b)
    }
  })
}

compare(getNum, display);



/**
 * So far, we've only dealt with simple, synthetic promises
 * Let's use some real life Promises
 * Network requests
 * File system access
 * Waiting for an element to be visible in webpage
 */
