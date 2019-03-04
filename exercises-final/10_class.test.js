test('has a constructor for initialization', () => {
  class Animal {
    constructor(name) {
      this.name = name
    }
  }

  const animal = new Animal()
  const dog = new Animal('Dog')

  expect(animal.name).toBeUndefined()
  expect(dog.name).toBe('Dog')
})

test('constructor can have default param values', () => {
  class Animal {
    constructor(name = 'Honey Badger') {
      this.name = name
    }
  }

  const animal = new Animal()
  const dog = new Animal('Dog')

  expect(animal.name).toBe('Honey Badger')
  expect(dog.name).toBe('Dog')
})

test('can have instance methods', () => {
  class Animal {
    constructor(name = 'Honey Badger') {
      this.name = name
    }

    sayName() {
      return `My name is: ${this.name}`
    }
  }

  const animal = new Animal()

  expect(animal.sayName).toBeDefined()
  expect(Animal.sayName).toBeUndefined()
  expect(animal.sayName()).toBe('My name is: Honey Badger')
})

test('can have static methods', () => {
  class Animal {
    constructor(name = 'Honey Badger') {
      this.name = name
    }

    sayName() {
      return `My name is: ${this.name}`
    }

    static create(name) {
      return new Animal(name)
    }
  }

  const animal = new Animal()

  expect(animal.create).toBeUndefined()
  expect(Animal.create).toBeDefined()
})

test('can extend another class', () => {
  class Animal {
    constructor(name = 'Honey Badger') {
      this.name = name
    }
  }

  class Dog extends Animal {
    sayName() {
      return `My name is: ${this.name}`
    }
  }

  const dog = new Dog('Fido')

  expect(dog instanceof Dog).toBe(true)
  expect(dog instanceof Animal).toBe(true)
  expect(Animal.prototype.sayName).toBeUndefined()
  expect(Dog.prototype.sayName).toBeDefined()
})

test('can use property setters and getters', () => {
  class Animal {
    set name(name) {
      this._name = name
    }
    get name() {
      return `${this._name} type of animal`
    }
  }

  const animal = new Animal()
  animal.name = 'Dog'
  expect(animal.name).toBe('Dog type of animal')
  animal.name = 'Cat'
  expect(animal.name).toBe('Cat type of animal')
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
