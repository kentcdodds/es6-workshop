import {expect} from 'chai';

describe('WEAKMAPS', () => {

  it('has a set method', ()=> {
    let key = {name: 'Aaron'};
    let value = {twitter: '@js_dev', gplus: '+AaronFrost'};

    let myMap = new WeakMap();
    myMap.set(key, value);

    expect(myMap.has(key)).to.be.true;

  });

  //TODO: Should we add a private class data here?

});