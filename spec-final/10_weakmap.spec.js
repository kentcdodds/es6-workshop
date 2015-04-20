jest.autoMockOff();

describe('WEAKMAPS', () => {

  it('has a set method', ()=>{
    let key = {name: "Aaron"};
    let value = {twitter: '@js_dev', gplus: '+AaronFrost'}

    let myMap = new WeakMap();
    myMap.set(key, value);

    expect(myMap.has(key)).toBe(true);

  });

  //TODO: Should we add a private class data here?

});