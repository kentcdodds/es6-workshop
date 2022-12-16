// this is the object we'll be mucking around with and proxying
function getCharacter() {
  return {
    _id: '9RKDLS02580GHCXNZLA0',
    password: 'isolemnlysweariamuptonogood',
    name: {first: 'Ron', last: 'Weasly'},
    classes: [
      {name: 'Divination', teacher: 'Sybill Trelawney'},
      {name: 'Defence Against the Dark Arts', teacher: 'Dolores Umbridge'},
    ],
    greet(greeting = 'Hi') {
      const {first, last} = this.name
      return `${greeting}! My name is ${first} ${last} and my ID is ${this._id} and my password is ${this.password}!`
    },
    getTeachers() {
      return this.classes.map(({teacher}) => teacher)
    },
  }
}

test('can wrap an existing object', () => {
  const character = getCharacter()
  const handler = {}
  const proxy = new Proxy(character, handler)
  expect(proxy).not.toBe(character) // referential equality
  expect(proxy).toEqual(character) // deep equality
})

test('handler can intercept gets, sets, and deletes', () => {
  const character = getCharacter()

  const handler = {
    get(target, name) {
      return name.split('.').reduce(Reflect.get, target)
    },
    set(target, name, value) {
      const splitNames = name.split('.')
      const lastIndex = splitNames.length - 1
      const finalTarget = splitNames
        .filter((item, index) => index < lastIndex)
        .reduce(Reflect.get, target)
      return Reflect.set(finalTarget, splitNames[lastIndex], value)
    },
    deleteProperty(target, name) {
      if (name.startsWith('_')) {
        return true // must return `true` to indicate that things are OK
      }
      return Reflect.deleteProperty(target, name)
    },
  }
  const proxy = new Proxy(character, handler)

  // interact with the proxy
  proxy['classes.1.teacher'] = 'Severus Snape' // set deep
  proxy.awesome = 10 // set shallow
  delete proxy._id // delete "protected property"

  // make some assertions
  expect(proxy['classes.1.teacher']).toBe('Severus Snape') // get deep
  expect(proxy.awesome).toBe(10) // get shallow
  expect(proxy._id).toEqual('9RKDLS02580GHCXNZLA0') // property not deleted

  // clean up
  delete proxy.awesome // delete unprotected property
  expect(proxy.awesome).toBe(undefined) // property successfully deleted
})

//////// EXTRA CREDIT ////////

test.skip('can intercept function calls', () => {
  const character = getCharacter()

  const handler = {
    apply(target, thisArg, argumentsList) {
      const result = Reflect.apply(target, thisArg, argumentsList)
      if (typeof result === 'string') {
        return result.replace(
          new RegExp(`(${thisArg._id})|(${thisArg.password})`, 'g'),
          'HIDDEN',
        )
      }
      return result
    },
  }
  // notice that `apply` only works for proxies on functions!
  character.greet = new Proxy(character.greet, handler)
  character.getTeachers = new Proxy(character.getTeachers, handler)
  const result = character.greet('Hey there')
  expect(result).not.toContain(character.password)
  expect(result).not.toContain(character._id)
  expect(character.getTeachers()).toEqual([
    'Sybill Trelawney',
    'Dolores Umbridge',
  ])
})

test.skip('can be used to do some fancy stuff with arrays', () => {
  const characters = [
    'Harry Potter',
    'Ron Weasly',
    'Hermione Granger',
    'Nevel Longbottom',
    'Lavender Brown',
    'Scabbers',
    'Pigwidgeon',
  ]

  const handler = {
    get(target, name) {
      console.log({target, name})
      if (name in target) {
        return Reflect.get(target, name)
      } else {
        const index = Number(name)
        return Reflect.get(target, target.length + index)
      }
    },
  }
  const proxy = new Proxy(characters, handler)
  expect(proxy[0]).toBe('Harry Potter')
  expect(proxy[-1]).toBe('Pigwidgeon')
  expect(proxy[-4]).toBe('Nevel Longbottom')
})

//////// Elaboration & Feedback /////////
test('I submitted my elaboration and feedback', () => {
  const submitted = true
  expect(true).toBe(submitted)
})
////////////////////////////////

//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests,
// then file a pull request to add them to the extra credit!
// Learn more here: http://kcd.im/es6-workshop-contributing
