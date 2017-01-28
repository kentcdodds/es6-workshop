test('has a constructor for initialization', () => {
  // Create an Animal class
  // Add a constructor that takes one param, the name.
  // Set this.name to the name passed in

  const animal = new Animal()
  const dog = new Animal('Dog')

  expect(animal.name).toBeUndefined()
  expect(dog.name).toBe('Dog')
})

test('constructor can have default param values', () => {
  // Create an Animal class with a constructor
  // Make your class default (using default params) the name to 'Honey Badger'

  const animal = new Animal()
  const dog = new Animal('Dog')

  expect(animal.name).toBe('Honey Badger')
  expect(dog.name).toBe('Dog')
})

test('can have instance methods', () => {
  // Create an Animal class, pass in the name to the constructor, and add a sayName function to the class definition

  const animal = new Animal()

  expect(animal.sayName).toBeDefined()
  expect(Animal.sayName).toBeUndefined()
  expect(animal.sayName()).toBe('My name is: Honey Badger')
})


test('can have static methods', () => {
  // Create an Animal class, pass in the name to the constructor,
  // and add a create method that takes a name and returns an instance

  const animal = new Animal()

  expect(animal.create).toBeUndefined()
  expect(Animal.create).toBeDefined()
})

test('can extend another class', () => {
  // Create an Animal class
  // Create a Dog class that extends Animal
  // Add sayName to Animal

  const dog = new Dog('Fido')

  expect(dog instanceof Dog).toBe(true)
  expect(dog instanceof Animal).toBe(true)
})

test('can use property setters and getters', () => {
  // Create an Animal class (don't pass name into constructor)
  // Add property setter for name
  // Add property getter for name

  const animal = new Animal()
  animal.name = 'Dog'
  expect(animal.name).toBe('Dog type of animal')
  animal.name = 'Cat'
  expect(animal.name).toBe('Cat type of animal')
})

//////// Elaboration /////////
// Please write, in your own words
// a few of the core concepts from
// the feature(s) in this exercise
//
// 1.
// 2.
// 3.
////////////////////////////////
//
/////////// Feedback ///////////
/*
http://ws.kcd.im/?ws=ES6+and+Beyond&e=Classes&em=
*/
////////////////////////////////

//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests, then file a pull request to add them to the extra credit!
// Learn more here: https://github.com/kentcdodds/es6-workshop/blob/master/CONTRIBUTING.md#development
