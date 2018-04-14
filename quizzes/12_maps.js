function basicMap() {
  const map = new Map()
  // TODO: add "a" as key, 3 as value
  // TODO: key is {v: 5, j: 7}, value is 7
  // TODO: key is a noop function, value is 8
  return map
}
// console.log(basicMap())

function initializeMap() {
  // how could we create the same kind
  // of map like we have above, except
  // do it when we call new Map()?
  const map = new Map()
  return map
}
// console.log(initializeMap())

function uniquePair() {
  // what will this return?
  const map = new Map()
  const obj = {raspberriesGood: true}
  map.set(obj, {sortaGood: false})
  map.set({raspberriesGood: true}, {sortaGood: false})
  map.set(obj, {reallyGood: true})
  return map
}
// console.log(uniquePair())

function mapInfo() {
  const objKey = {awesome: true}
  const map = new Map([[objKey, 42]])
  // how do we get `objKey`?
  return {
    objValue: map[objKey],
    mapSize: Object.keys(map).length,
    hasTrue: map.hasOwnProperty(true),
    has32: map.hasOwnProperty(32),
    keys: Object.keys(map),
    values: Object.keys(map).map(key => map[key]),
    entries: Object.keys(map).map(key => [key, map[key]]),
  }
}
// console.log(mapInfo())

function removingItems() {
  const objKey = {awesome: true}
  const map = new Map([[objKey, 42], [{}, 'hey'], [45, true]])
  const firstSize = map.size
  map.delete(objKey)
  const afterDeleteSize = map.size
  map.clear()
  const afterClearSize = map.size
  return {firstSize, afterDeleteSize, afterClearSize}
}
// console.log(removingItems())

function iterateMaps() {
  const map = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3'],
    ['key4', 'value4'],
  ])
  for (const [key, value] of map) {
    console.log(key, value)
  }
}
// iterateMaps()

function spreadMaps() {
  // what does this return?
  const map = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3'],
    ['key4', 'value4'],
  ])
  const array = [...map]
  return array
}
// console.log(spreadMaps())

function restMap() {
  // what does this return?
  const map = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3'],
    ['key4', 'value4'],
  ])
  const [first, second, ...rest] = map
  return rest
}
// console.log(restMap())

// SOLUTION BELOW
// No peeking!

function basicMapSOLUTION() {
  const map = new Map()
  map.set('a', 3)
  map.set({v: 5, j: 7}, 7)
  map.set(() => {}, 8)
  return map
}
// console.log(basicMapSOLUTION())

function initializeMapSOLUTION() {
  const map = new Map([['a', 3], [{v: 5, j: 7}, 7], [() => {}, 8]])
  return map
}
// console.log(initializeMapSOLUTION())

function mapInfoSOLUTION() {
  const objKey = {awesome: true}
  const map = new Map([[objKey, 42], [4, 55], [true, false], [false, true]])
  return {
    objValue: map.get(objKey),
    mapSize: map.size,
    hasTrue: map.has(true),
    has32: map.has(32),
    keys: map.keys(),
    values: map.values(),
    entries: map.entries(),
  }
}
// console.log(mapInfoSOLUTION())
