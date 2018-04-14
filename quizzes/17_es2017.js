import log from './pretty-log'

function padString() {
  const string = 'hello'
  // make string have padding on either side
  const startPadded = string.watBeginning(2) // maybe?
  const endPadded = startPadded.watEnding(2) // perhaps?
  return endPadded === '  hello  '
}
// log(padString())

function padStringWithPadString() {
  const string = 'hallo'
  // make the padString be 'sup '
  const result = string.padStart(17)
  return result
}
// log(padStringWithPadString())

function objectValues() {
  // what does this return?
  const object = {
    a: 'a value',
    b: 'b value',
    c: {
      d: true,
      e: {
        f: 'f value',
      },
    },
  }
  return Object.values(object)
}
// log(objectValues())

function objectEntries() {
  // what does this return?
  const object = {
    a: 'a value',
    b: 'b value',
    c: {
      d: true,
      e: {
        f: 'f value',
      },
    },
  }
  return Object.entries(object)
}
// log(objectEntries())

function trailingCommas() {
  function totesLegit(a, b, c) {
    return [a, b, c]
  }

  return totesLegit('a', 'b', 'c')
}
// log(trailingCommas())

// SOLUTIONS BELOW!

function padStringSOLUTION() {
  const string = 'hello'
  const startPadded = string.padStart(string.length + 2)
  const endPadded = startPadded.padEnd(startPadded.length + 2)
  return endPadded === '  hello  '
}
// log(padStringSOLUTION())

function padStringWithPadStringSOLUTION() {
  const string = 'hallo'
  // make the padString be 'sup '
  const result = string.padStart(17, 'sup ')
  return result
}
// log(padStringWithPadStringSOLUTION())
