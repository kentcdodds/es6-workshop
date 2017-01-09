console.log(
  // getMax([7, 8, 5, 9, 2])
  // flatten([8, 9, [6, [5, [7], [45, 34, [2]]]]])
  // updateObject({a: 1, b : 2, c: 4}, {b: 5, d: 7})
)

function getMax(arr) {
  // TODO: return the maximum value in an array of integers
  // use spread operator and Math.max()
}

function flatten(arr) {
  // TODO: flatten nested arrays of arbitrary levels of nesting
  // arr can be typically like this: [8, 9, [6, [5, [7], [45, 34, [2]]]]]
  // output shold be [8, 9, 6, 5, 7, 45, 34, 2]
  // To check if an element is an array, use Array.isArray()
  // Do NOT use Array.prototype.concat
  // Instead, use spread operator
}

function updateObject(obj, updateSpec) {
  // TODO: obj is the original object
  // updateSpec is an object with new values for various fields in obj
  // it might even contain values for fields that don't exist in obj
  // DO NOT alter obj
  // create a new object with updated values and return it
}
