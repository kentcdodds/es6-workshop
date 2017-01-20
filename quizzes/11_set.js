console.log(
  testObjectSet(),
  testArraySet(),
  testRemoveDuplicates(),
  testSetMap(),
  testSetOperations(),
)

function testObjectSet() {
  // TODO: Just read the function and understand
  // Just because two objects have exact same values
  // doesn't mean they are the same objects
  const obj = {a: 45, b: 50}
  const s = new Set()
  s.add(obj)
  s.add({a: 45, b: 50})
  return s
}

function testArraySet() {
  const arr = [1, 5, 7, 2, 9, 4]
  // TODO: change the following line
  // so that the Set t has array's contents
  const t = new Set()
  // change the above line
  return t
}

function testRemoveDuplicates() {
  // given an array
  // we have to remove duplicate entries
  const arr = [6, 8, 3, 9, 6, 5, 8, 2, 3, 9, 7, 7, 2, 1, 0, 8]

  // TODO: use a Set to do this
  // refactor the following
  const uniqueArr = arr.filter((elem, index) => arr.indexOf(elem) === index)

  return {
    original: arr,
    deduped: uniqueArr,
  }

}

function testSetMap() {
  // ES6 sets have no map method
  // So we will try to write a utility that allows you to do that
  // It would be invoked as mapSet(s1, fn) and will return s2
  // Assume fn is a synchronous function, for now
  const s = [7, 4, 90, 54, 23] // TODO: make 's' a Set
  function fn(x, i) {
    return x * i
  }// the callback

  // TODO: refactor to return mapped set
  const final = s.map(fn, null)
  return final
}

function testSetOperations() {
  // the interconversion between Sets and Arrays are really handy
  // Especially when you can use spread operator to convert a Set
  // to an Array
  // And Set constructor to make an Array into a Set
  const original1 = [1, 3, 5, 9] // TODO: Make this a Set
  const original2 = [1, 2, 3, 4] // TODO: Make this a Set

  // TODO: refactor the following with spread operator
  // and ensure that intersection is a Set, not an Array
  const intersection = original1.filter(x => original2.indexOf(x) !== -1)
  const diff = [...original1.filter(x => original2.indexOf(x) === -1),
    ...original2.filter(x => original1.indexOf(x) === -1)]

  return {
    intersection,
    diff,
  }
}








// SOLUTION BELOW
// No peeking!










function testArraySetSOLUTION() {
  const arr = [1, 5, 7, 2, 9, 4]
  const t = new Set(arr)
  return t
}


function testRemoveDuplicatesSOLUTION() {
  // given an array
  // we have to remove duplicate entries
  const arr = [6, 8, 3, 9, 6, 5, 8, 2, 3, 9, 7, 7, 2, 1, 0, 8]

  // TODO: use a Set to do this
  // refactor the following
  const uniqueArr = arr.filter((elem, index) => arr.indexOf(elem) === index)

  return {
    original: arr,
    deduped: uniqueArr,
  }
}


function testSetMapSOLUTION() {
  // ES6 sets have no map method
  // So we will try to write a utility that allows you to do that
  // Assume fn is a synchronous function, for now
  const s = new Set([7, 4, 90, 54, 23])
  function fn(x, i) {
    return x * i
  }// the callback

  // we could have also used Array.from(s)
  const final = new Set([...s].map(fn, null))
  return final
}

function testSetOperationsSOLUTION() {
  // the interconversion between Sets and Arrays are really handy
  // Especially when you can use spread operator to convert a Set
  // to an Array
  // And Set constructor to make an Array into a Set
  const original1 = new Set([1, 3, 5, 9])
  const original2 = new Set([1, 2, 3, 4])

  // refactor the following with spread operator
  // and ensure that intersection is a Set, not an Array
  const intersection = new Set([...original1].filter(x => original2.has(x)))
  const diff = new Set([...[...original1].filter(x => !original2.has(x)),
    ...[...original2].filter(x => !original1.has(x))])

  return {
    intersection,
    diff,
  }
}


/* */
