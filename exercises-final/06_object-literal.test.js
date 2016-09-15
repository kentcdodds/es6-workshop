import {expect} from 'chai'

describe('Object Literal', () => {
  it('can use shorthand for property names', () => {
    function createMonster(name, power) {
      return {
        type: 'Monster',
        name,
        power,
        attack(target) {
          return `${this.name} attacked ${target.name}`
        },
      }
    }

    const godzilla = createMonster('Godzilla', 1000)
    const mechaGodzilla = createMonster('MechaGodzilla', 5000)
    expect(godzilla.name).to.equal('Godzilla')
    expect(godzilla.power).to.equal(1000)
    expect(godzilla.attack(mechaGodzilla)).to.equal('Godzilla attacked MechaGodzilla')
  })
})
