import {expect} from 'chai'

describe('Object Literal', () => {
  it('can use shorthand for property names', () => {
    function createMonster(name, power) {
      // FINAL_START
      return {
        type: 'Monster',
        name,
        power,
        attack(target) {
          console.log('RAAAARRRR!!! #breathesfire')
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
      //     console.log('RAAAARRRR!!! #breathesfire');
      //     return `${this.name} attacked ${target.name}`;
      //   }
      // }
      // WORKSHOP_END
    }

    const godzilla = createMonster('Godzilla', 1000)
    const mechaGodzilla = createMonster('MechaGodzilla', 5000)
    expect(godzilla.name).to.equal('Godzilla')
    expect(godzilla.power).to.equal(1000)
    expect(godzilla.attack(mechaGodzilla)).to.equal('Godzilla attacked MechaGodzilla')
  })
})
