import {expect} from 'chai';

describe('Object Literal', () => {
  it('can use shorthand for property names', () => {

    function createMonster(name, power) {

      //Using NEW Object Literal Syntax, return a literal that will allow the tests to pass
      //return {
      //  type: 'Monster',
      //  name: name,
      //  power: power,
      //  attack: function (target){
      //    console.log('RAAAARRRR!!! #breathesfire');
      //    return `${this.name} attacked ${target.name}`;
      //  }
      //};

      return {
        type: 'Monster',
        name, power,
        attack(target) {
          console.log('RAAAARRRR!!! #breathesfire');
          return `${this.name} attacked ${target.name}`;
        }
      };
    }

    var godzilla = createMonster('Godzilla', 1000);
    var mechaGodzilla = createMonster('MechaGodzilla', 5000);

    expect(godzilla.name).to.equal('Godzilla');
    expect(godzilla.power).to.equal(1000);
    expect(godzilla.attack(mechaGodzilla)).to.equal('Godzilla attacked MechaGodzilla');
  });


});