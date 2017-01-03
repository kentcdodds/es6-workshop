test('Reflect.apply can be used to call a function', () => {
  const person = {
    name: 'Fred',
    sayHi(greeting, noun) {
      return `${greeting} ${noun}! My name is ${this.name}`
    },
  }

  const result = Reflect.apply(person.sayHi, person, ['Hey there', 'Jaimee'])
  expect(result).toBe('Hey there Jaimee! My name is Fred')
})

test('Reflect.deleteProperty can be used instead of the `delete` keyword', () => {
  const person = {name: 'Joan', age: 56}
  Reflect.defineProperty(person, 'protected', {
    configurable: false,
    value: 'YOU CANNOT GET RID OF ME!',
  })
  const ageDeleted = Reflect.deleteProperty(person, 'age')
  const protectedDeleted = Reflect.deleteProperty(person, 'protected')
  expect(person.age).not.toBeDefined()
  expect(ageDeleted).toBe(true)
  expect(person.protected).toBe('YOU CANNOT GET RID OF ME!')
  expect(protectedDeleted).toBe(false)
})
//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests, then file a pull request to add them to the extra credit!
// Learn more here: https://github.com/kentcdodds/es6-workshop/blob/master/CONTRIBUTING.md#development
