import {expect} from 'chai';

describe('WEAKMAPS', () => {

  it.skip('has a set method', ()=>{
    let key = {name: 'Aaron'};
    let value = {twitter: '@js_dev', gplus: '+AaronFrost'};

    // Create a new WeakMap called 'myMap'
    // Add a new entry. Use key as the key and values as the value


    expect(myMap.has(key)).to.be.true;
    expect(myMap.get(key)).to.equal(value);

  });

  it.skip('EXTRA CREDIT', () => {

    //If you make it this far, write a class with private member variables, using WeakMaps

  })

});