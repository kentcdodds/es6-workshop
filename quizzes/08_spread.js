console.log(
  // getMax(),
  // flatten(),
  // updateObject()
)

function getMax() {
  // TODO: return the maximum value in an array of integers
  // use spread operator and Math.max() in refactoring
  //
  // A simpler solution is to loop over the array
  // and keep track of the maximum
  // finally returning it
  //
  // A shorter solution is to take advantage of apply()
  const arr = [5, 6, 8, 4, 9]
  return Math.max.apply(null, arr)
}

function flatten() {
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

function updateObject() {
  // TODO: obj is the original object
  // updateSpec is an object with new values for various fields in obj
  // it might even contain values for fields that don't exist in obj
  // DO NOT alter obj
  // create a new object with updated values and return it
  const obj = {a: 1, b: 3, c: 4}
  const updateSpec = {b: 5, c: 3, d: 7}
  return Object.assign({}, obj, updateSpec)
}













// SOLUTIONS ARE GIVEN BELOW
// No peeking!













function getMaxSOLUTION() {
  const arr = [5, 6, 8, 4, 9]
  return Math.max(...arr)
}

function flattenSOLUTION() {
  const arr = [8, 9, [6, [5, [7], [45, 34, [[[2]]], [[[[[[[[7]]]]], 90]]]]]]]
  function flatter(arg) {
    return arg.reduce((acc, item) => {
      return Array.isArray(item) ? [...acc, ...flatter(item)] : [...acc, item]
    }, [])
  }
  return flatter(arr)
}

function updateObjectSOLUTION() {
  const obj = {a: 1, b: 3, c: 4}
  const updateSpec = {b: 5, c: 3, d: 7}
  return {
    ...obj,
    ...updateSpec,
  }
}
