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
  const proxy = character
  expect(proxy).not.toBe(character) // referential equality
  expect(proxy).toEqual(character) // deep equality
})

test('handler can intercept gets, sets, and deletes', () => {
  const character = getCharacter()

  const handler = {}
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

  const handler = {}
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

  const handler = {}
  const proxy = new Proxy(characters, handler)
  expect(proxy[0]).toBe('Harry Potter')
  expect(proxy[-1]).toBe('Pigwidgeon')
  expect(proxy[-4]).toBe('Nevel Longbottom')
})

//////// Elaboration & Feedback /////////
/*
http://ws.kcd.im/?ws=ES6+and+Beyond&e=Proxies&em=
*/
test('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(true).toBe(submitted)
})
////////////////////////////////

//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests,
// then file a pull request to add them to the extra credit!
// Learn more here: http://kcd.im/es6-workshop-contributing
