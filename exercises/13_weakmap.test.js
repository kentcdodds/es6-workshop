import {expect} from 'chai'

describe('WEAKMAPS', () => {

  it('has a set method', () => {
    const key = {name: 'Aaron'}
    const value = {twitter: '@js_dev', gplus: '+AaronFrost'}
    // Create a new WeakMap called 'myMap'
    // Add a new entry. Use key as the key and values as the value
    expect(myMap.has(key)).to.be.true
  })

  it(`should enable private members in classes`, () => {
    // If you make it this far, write a class with private member variables, using WeakMaps
    class Person {
      constructor(name, age) {
        this._name = name
        this._age = age
      }

      getName() {
        return this._name
      }

      getAge() {
        return this._age
      }
    }

    const person = new Person('Kent C. Dodds', 26)
    expect(person._name).to.be.undefined
    expect(person.getName()).to.equal('Kent C. Dodds')
    expect(person._age).to.be.undefined
    expect(person.getAge()).to.equal(26)
  })

})
