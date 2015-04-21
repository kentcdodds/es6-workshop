import {expect} from 'chai';

describe('Classes', () => {

  it('has a constructor for initialization', ()=>{

    // Create an Animal class
    // Add a constructor that takes one param, the name.
    // Set this.name to the name passed in
    class Animal{
      constructor(name){
        this.name = name;
      }
    }

    let animal = new Animal();
    let dog = new Animal('Dog');

    expect(animal.name).to.be.undefined;
    expect(dog.name).to.equal('Dog');
  });

  it('constructor can have default param values', ()=>{

    // Create an Animal class with a constructor
    // Make your class default (using default params) the name to 'Honey Badger'
    class Animal{
      constructor(name='Honey Badger'){
        this.name = name;
      }
    }

    let animal = new Animal();
    let dog = new Animal('Dog');

    expect(animal.name).to.equal('Honey Badger');
    expect(dog.name).to.equal('Dog');
  });

  it('can have instance methods', ()=>{

    //Create an Animal class, pass in the name to the constructor, and add a sayName function to the class definition
    class Animal{
      constructor(name='Honey Badger'){
        this.name = name;
      }

      sayName(){
        console.log('My name is: '+this.name);
      }
    }

    let animal = new Animal();
    animal.sayName();

    expect(animal.sayName).to.exist;
    expect(Animal.sayName).to.be.undefined;
  });


  it('can have static methods', ()=>{

    // Create an Animal class, pass in the name to the constructor,
    // and add a create method that takes a name and returns an instance
    class Animal{
      constructor(name='Honey Badger'){
        this.name = name;
      }

      sayName(){
        console.log('My name is: '+this.name);
      }

      static create(name){
        return new Animal(name);
      }
    }

    let animal = new Animal();

    expect(animal.create).to.be.undefined;
    expect(Animal.create).to.exist;
  });

  it('can extend another class', ()=>{

    // Create an Animal class
    // Create a Dog class that extends Animal
    // Add sayName to Animal
    //
    class Animal{
      constructor(name='Honey Badger'){
        this.name = name;
      }

      sayName(){
        console.log('My name is: '+this.name);
      }
    }

    class Dog extends Animal{
      constructor(name){
        super(name);
      }
    }

    let dog = new Dog('Fido');

    expect(dog instanceof Dog).to.be.true;
    expect(dog instanceof Animal).to.be.true;
  });

  it('can use property setters and getters', ()=>{

    // Create an Animal class (don't pass name into constructor)
    // Add property setter for name
    // Add property getter for name
    //
    class Animal{

      set name(name){
        this._name = name;
      }

      get name(){
        return this._name;
      }
    }

    let animal = new Animal();
    animal.name = 'Dog';
    expect(animal.name).to.equal('Dog');
    animal.name = 'Cat';
    expect(animal.name).to.equal('Cat');
  });

});