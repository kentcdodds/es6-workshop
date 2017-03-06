test('has a set method', () => {
  const key = {name: 'Aaron'}
  const value = {twitter: '@js_dev', gplus: '+AaronFrost'}
  // FINAL_START
  const myMap = new WeakMap()
  myMap.set(key, value)
  // FINAL_END
  // WORKSHOP_START
  // Create a new WeakMap called 'myMap'
  // Add a new entry. Use key as the key and values as the value
  // WORKSHOP_END
  expect(myMap.has(key)).toBe(true)
})

test(`should enable private members in classes`, () => {
  // COMMENT_START eslint trickery
  /* eslint no-unreachable:0 */
  // COMMENT_END
  // FINAL_START
  const privateData = new WeakMap()
  // FINAL_END
  // WORKSHOP_START
  // If you make it this far, write a class with private member variables, using WeakMaps
  // WORKSHOP_END
  class Person {
    constructor(name, age) {
      // FINAL_START
      privateData.set(this, {name, age})
      // FINAL_END
      // WORKSHOP_START
      this._name = name
      this._age = age
      // WORKSHOP_END
    }

    getName() {
      // FINAL_START
      return privateData.get(this).name
      // FINAL_END
      // WORKSHOP_START
      return this._name
      // WORKSHOP_END
    }

    getAge() {
      // FINAL_START
      return privateData.get(this).age
      // FINAL_END
      // WORKSHOP_START
      return this._age
      // WORKSHOP_END
    }
  }

  const person = new Person('Kent C. Dodds', 26)
  expect(person._name).toBeUndefined()
  expect(person.getName()).toBe('Kent C. Dodds')
  expect(person._age).toBeUndefined()
  expect(person.getAge()).toBe(26)
})

//////// Elaboration & Feedback /////////
// WORKSHOP_START
/*
http://ws.kcd.im/?ws=ES6+and+Beyond&e=WeakMaps&em=
*/
// WORKSHOP_END
test('I submitted my elaboration and feedback', () => {
  // WORKSHOP_START
  const submitted = false // change this when you've submitted!
  // WORKSHOP_END
  // FINAL_START
  const submitted = true
  // FINAL_END
  expect(true).toBe(submitted)
})
////////////////////////////////

//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests,
// then file a pull request to add them to the extra credit!
// Learn more here: http://kcd.im/es6-workshop-contributing
