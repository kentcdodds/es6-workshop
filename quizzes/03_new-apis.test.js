console.log(
  // stringIncludes(),
  // stringRepeat(),
  // arrayFrom(),
  // arrayFill(),
  // objectAssign(),
)

function stringIncludes() {
  // refactor to String.includes
  const phrase = 'in the box'
  return phrase.indexOf('the') !== -1
}

function stringRepeat() {
  // refactor to String.repeat
  const repeatCount = 20
  let marker = ''
  for (let i = 0; i < repeatCount; i++) {
    marker += '*'
  }
  return marker
}

function arrayFrom() {
  // refactor to Array.from
  const arrayLike = {length: 2, 0: 'hello', 1: 'world'}
  return Array.prototype.slice.apply(arrayLike)
}

function arrayFill() {
  // refactor to Array.fill
  const value = 'hey'
  const start = 1
  const end = 4
  const array = new Array(7)
  for (let i = 0; i < array.length; i++) {
    if (i >= start && i < end) {
      array[i] = value
    }
  }
  return array
}

function objectAssign() {
  // what will this return?
  const target = {
    a: 'a from target', c: 'c from target', e: 'e from target',
    g: 'g from target', i: 'i from target', k: 'k from target',
  }
  const object1 = {a: 'a from object1', c: 'c from object1'}
  const object2 = {c: 'c from object2', f: 'f from object2'}
  const object3 = {a: 'a from object3', i: 'i from object3'}
  Object.assign(target, object1, object2, object3)
  return target
}



// SOLUTIONS ARE BELOW THIS LINE!








function stringIncludesSOLUTION() {
  // refactor to String.includes
  const phrase = 'in the box'
  return phrase.includes('the')
}

function stringRepeatSOLUTION() {
  // refactor to String.repeat
  const repeatCount = 20
  return '*'.repeat(repeatCount)
}

function arrayFromSOLUTION() {
  // refactor to Array.from
  const arrayLike = {length: 2, 0: 'hello', 1: 'world'}
  return Array.from(arrayLike)
}

function arrayFillSOLUTION() {
  // refactor to Array.fill
  const value = 'hey'
  const start = 1
  const end = 4
  const array = new Array(7)
  return array.fill(value, start, end)
}
