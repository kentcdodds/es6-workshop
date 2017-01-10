test('can use shorthand for property names', () => {
  function createMonster(name, power) {
    // FINAL_START
    return {
      type: 'Monster',
      name,
      power,
      attack(target) {
        return `${this.name} attacked ${target.name}`
      },
    }
    // FINAL_END
    // WORKSHOP_START
    // Using NEW Object Literal Syntax, return a literal that will allow the tests to pass
    // return {
    //   type: 'Monster',
    //   name: name,
    //   power: power,
    //   attack: function (target){
    //     return `${this.name} attacked ${target.name}`;
    //   }
    // }
    // WORKSHOP_END
  }

  const godzilla = createMonster('Godzilla', 1000)
  const mechaGodzilla = createMonster('MechaGodzilla', 5000)
  expect(godzilla.name).toBe('Godzilla')
  expect(godzilla.power).toBe(1000)
  expect(godzilla.attack(mechaGodzilla)).toBe('Godzilla attacked MechaGodzilla')
})

test('can use expressions as property names', () => {
  function createCandy(type, description) {
    return {
      tasty: true,
      type,
      // WORKSHOP_START
      // add a expression as property name where the property name is the given type.toUpperCase() + type.length
      // sound contrived? It is... 😅
      // WORKSHOP_END
      // FINAL_START
      [type.toUpperCase() + type.length]: description,
      // FINAL_END
    }
  }

  const twixDescription = 'Twix is a chocolate bar made by Mars, Inc., consisting of biscuit applied with other ' +
    'confectionery toppings and coatings. Twix bars are packaged in pairs, although smaller single bars are available.'
  const twixType = 'twix'
  const snickers = createCandy('twix', twixDescription)
  expect(snickers.tasty).toBe(true)
  expect(snickers.type).toBe(twixType)
  expect(snickers.TWIX4).toBe(twixDescription)
})

// WORKSHOP_START
//////// Elaboration /////////
// Please write, in your own words
// a few of the core concepts from
// the feature(s) in this exercise
//
// 1.
// 2.
// 3.
////////////////////////////////
// WORKSHOP_END

//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests, then file a pull request to add them to the extra credit!
// Learn more here: https://github.com/kentcdodds/es6-workshop/blob/master/CONTRIBUTING.md#development
