import {expect} from 'chai'

describe('WEAKMAPS', () => {

  it('has a set method', () => {
    const key = {name: 'Aaron'}
    const value = {twitter: '@js_dev', gplus: '+AaronFrost'}
    const myMap = new WeakMap()
    myMap.set(key, value)
    expect(myMap.has(key)).to.be.true
  })

  it(`should enable private members in classes`, () => {
    const privateData = new WeakMap()
    class Person {
      constructor(name, age) {
        privateData.set(this, {name, age})
      }

      getName() {
        return privateData.get(this).name
      }

      getAge() {
        return privateData.get(this).age
      }
    }

    const person = new Person('Kent C. Dodds', 26)
    expect(person._name).to.be.undefined
    expect(person.getName()).to.equal('Kent C. Dodds')
    expect(person._age).to.be.undefined
    expect(person.getAge()).to.equal(26)
  })

})
