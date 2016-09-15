import {expect} from 'chai'

describe('Classes', () => {

  it('has a constructor for initialization', () => {
    // Create an Animal class
    // Add a constructor that takes one param, the name.
    // Set this.name to the name passed in

    const animal = new Animal()
    const dog = new Animal('Dog')

    expect(animal.name).to.be.undefined
    expect(dog.name).to.equal('Dog')
  })

  it('constructor can have default param values', () => {
    // Create an Animal class with a constructor
    // Make your class default (using default params) the name to 'Honey Badger'

    const animal = new Animal()
    const dog = new Animal('Dog')

    expect(animal.name).to.equal('Honey Badger')
    expect(dog.name).to.equal('Dog')
  })

  it('can have instance methods', () => {
    // Create an Animal class, pass in the name to the constructor, and add a sayName function to the class definition

    const animal = new Animal()

    expect(animal.sayName).to.exist
    expect(Animal.sayName).to.be.undefined
    expect(animal.sayName()).to.equal('My name is: Honey Badger')
  })


  it('can have static methods', () => {
    // Create an Animal class, pass in the name to the constructor,
    // and add a create method that takes a name and returns an instance

    const animal = new Animal()

    expect(animal.create).to.be.undefined
    expect(Animal.create).to.exist
  })

  it('can extend another class', () => {
    // Create an Animal class
    // Create a Dog class that extends Animal
    // Add sayName to Animal

    const dog = new Dog('Fido')

    expect(dog instanceof Dog).to.be.true
    expect(dog instanceof Animal).to.be.true
  })

  it('can use property setters and getters', () => {
    // Create an Animal class (don't pass name into constructor)
    // Add property setter for name
    // Add property getter for name

    const animal = new Animal()
    animal.name = 'Dog'
    expect(animal.name).to.equal('Dog type of animal')
    animal.name = 'Cat'
    expect(animal.name).to.equal('Cat type of animal')
  })
})
