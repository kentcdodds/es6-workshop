import log from './pretty-log'

function createSymbol() {
  const mySymbol = new Symbol()
  return mySymbol
}
// log(createSymbol())

function symbolDescription() {
  // how would we give this symbol an identifier
  // for debugging purposes?
  const mySymbol = Symbol()
  return mySymbol
}
// log(symbolDescription())

function getSymbolsFromObject() {
  // what will this return?
  const secret = Symbol('not so secret')
  const object = {
    noSecrets: 'I have nothing to hide',
    [secret]: 'can you find me?',
  }
  return Object.keys(object)
}
// log(getSymbolsFromObject())

// More about Symbols:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

// SOLUTIONS BELOW!

function createSymbolSOLUTION() {
  const mySymbol = Symbol()
  return mySymbol
}
// log(createSymbolSOLUTION())

function symbolDescriptionSOLUTION() {
  // how would we give this symbol an identifier
  // for debugging purposes?
  const mySymbol = Symbol('My description')
  return mySymbol
}
// log(symbolDescriptionSOLUTION())

function getSymbolsFromObjectSOLUTION() {
  // what will this return?
  const secret = Symbol('not so secret')
  const object = {
    noSecrets: 'I have nothing to hide',
    [secret]: 'can you find me?',
  }
  return Object.getOwnPropertySymbols(object)
}
// log(getSymbolsFromObjectSOLUTION())

/*
eslint
no-new-symbol:0
symbol-description:0
 */
