jest.autoMockOff();

describe('WEAKMAPS', () => {

  it('has a set method', ()=>{
    let key = {name: "Aaron"};
    let value = {twitter: '@js_dev', gplus: '+AaronFrost'};

    // Create a new WeakMap called 'myMap'
    // Add a new entry. Use key as the key and values as the value


    expect(myMap.has(key)).toBe(true);
    expect(myMap.get(key)).toEqual(value);

  });

  xit('EXTRA CREDIT', () => {

    //If you make it this far, write a class with private member variables, using WeakMaps

  })

});