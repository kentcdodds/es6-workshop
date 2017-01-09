console.log(
  // getMax([7, 8, 5, 9, 20, 7])
  // flatten([8, 9, [6, [5, [7], [45, 34, [[[2]]], [[[[[[[[7]]]]]]]]]]]])
  // updateObject({a: 1, b: 3, c: 4}, {b: 5, c: 3, d: 7})
)

function getMax(arr) {
  // TODO: return the maximum value in an array of integers
  // use spread operator and Math.max() in refactoring
  //
  // A simpler solution is to loop over the array
  // and keep track of the maximum
  // finally returning it
  //
  // A shorter solution is to take advantage of apply()
  return Math.max.apply(null, arr)
}

function flatten(arr) {
  // TODO: flatten nested arrays of arbitrary levels of nesting
  // arr can be typically like this: [8, 9, [6, [5, [7], [45, 34, [2]]]]]
  // output shold be [8, 9, 6, 5, 7, 45, 34, 2]
  // use spread operator in place of Array.prototype.concat()
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      return acc.concat(flatten(item))
    }
    return acc.concat([item])
  }, [])
}

function updateObject(obj, updateSpec) {
  // TODO: obj is the original object
  // updateSpec is an object with new values for various fields in obj
  // it might even contain values for fields that don't exist in obj
  // DO NOT alter obj
  // create a new object with updated values and return it
  return Object.assign({}, obj, updateSpec)
}













// SOLUTIONS ARE GIVEN BELOW
// No peeking!













function getMaxSOLUTION(arr) {
  return Math.max(...arr)
}

function flattenSOLUTION(arr) {
  return arr.reduce((acc, item) => {
    return Array.isArray(item) ? [...acc, ...flatten(item)] : [...acc, item]
  }, [])
}

function updateObjectSOLUTION(obj, updateSpec) {
  return {
    ...obj,
    ...updateSpec,
  }
}
