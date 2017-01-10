console.log(
  // spreadFunctionCall(),
  // concatArrays(),
  // mergeObjects(),
  // spreadString(),
  // restString(),
)

function spreadFunctionCall() {
  // TODO: return the maximum value in an array of integers
  // use spread operator and Math.max() in refactoring
  const arr = [5, 6, 8, 4, 9]
  return Math.max.apply(null, arr)
}

function concatArrays() {
  // TODO: flatten nested arrays of arbitrary levels of nesting
  // arr can be typically like this: [8, 9, [6, [5, [7], [45, 34, [2]]]]]
  // output shold be [8, 9, 6, 5, 7, 45, 34, 2]
  // use spread operator in place of Array.prototype.concat()
  const arr = [8, 9, [6, [5, [7], [45, 34, [[[2]]], [[[[[[[[7]]]]], 90]]]]]]]
  function flatter(arg) {
    return arg.reduce((acc, item) => {
      if (Array.isArray(item)) {
        return acc.concat(flatter(item))
      }
      return acc.concat([item])
    }, [])
  }
  return flatter(arr)
}

function mergeObjects() {
  // TODO: obj is the original object
  // updateSpec is an object with new values for various fields in obj
  // it might even contain values for fields that don't exist in obj
  // DO NOT alter obj
  // create a new object with updated values and return it
  const obj = {a: 1, b: 3, c: 4}
  const updateSpec = {b: 5, c: 3, d: 7}
  return Object.assign({}, obj, updateSpec)
}

function spreadString() {
  return join('--', 'PayPal')
  function join(delimiter, string) {
    return [...string].join(delimiter)
  }
}

function restString() {
  // what does this return?
  const greeting = 'Hello world'
  const [h, e, l, l2, o, space, ...splitGreeting] = greeting
  return splitGreeting
}











// SOLUTIONS ARE GIVEN BELOW
// No peeking!













function spreadFunctionCallSOLUTION() {
  const arr = [5, 6, 8, 4, 9]
  return Math.max(...arr)
}

function concatArraysSOLUTION() {
  const arr = [8, 9, [6, [5, [7], [45, 34, [[[2]]], [[[[[[[[7]]]]], 90]]]]]]]
  function flatter(arg) {
    return arg.reduce((acc, item) => {
      return Array.isArray(item) ? [...acc, ...flatter(item)] : [...acc, item]
    }, [])
  }
  return flatter(arr)
}

function mergeObjectsSOLUTION() {
  const obj = {a: 1, b: 3, c: 4}
  const updateSpec = {b: 5, c: 3, d: 7}
  return {
    ...obj,
    ...updateSpec,
  }
}
