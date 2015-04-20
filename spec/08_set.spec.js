jest.autoMockOff();

describe('SETS', () => {

  xit('has an add method and a has method', ()=>{

    // Create a new Set called 'mySet'
    // add the numbers 1, 2, and 3 to the set


    expect(mySet.has(1)).toBe(true);
    expect(mySet.has(2)).toBe(true);
    expect(mySet.has(3)).toBe(true);
    expect(mySet.has(4)).toBe(false);

  });


  xit('doesn`t allow duplicates', ()=>{

    // Create a new Set called 'mySet'
    // add the number 1 to it three times



    expect(mySet.has(1)).toBe(true);
    expect(mySet.has(2)).toBe(false);
    expect(mySet.has(3)).toBe(false);
    expect(mySet.has(4)).toBe(false);

  });

});