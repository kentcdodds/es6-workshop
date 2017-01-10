console.log(
  getSymbolsFromObject(),
)

function getSymbolsFromObject() {
  // what will this return?
  const secret = Symbol('not so secret')
  const object = {
    noSecrets: 'I have nothing to hide',
    [secret]: 'can you find me?',
  }
  return Object.keys(object)
}
