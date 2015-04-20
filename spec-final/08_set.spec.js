jest.autoMockOff();

describe('SETS', () => {

  it('has an add method and a has method', ()=>{

    // Create a new Set
    // add the following numbers to it, using set.add(num): 1, 2, 3

    let mySet = new Set();
    mySet.add(1);
    mySet.add(2);
    mySet.add(3);

    expect(mySet.has(1)).toBe(true);
    expect(mySet.has(2)).toBe(true);
    expect(mySet.has(3)).toBe(true);
    expect(mySet.has(4)).toBe(false);

  });


  it('doesn`t allow duplicates', ()=>{

    // Create a new Set
    // add the following numbers to it, using set.add(num): 1, 1, 1

    let mySet = new Set();
    mySet.add(1);
    mySet.add(1);
    mySet.add(1);

    expect(mySet.has(1)).toBe(true);
    expect(mySet.has(2)).toBe(false);
    expect(mySet.has(3)).toBe(false);
    expect(mySet.has(4)).toBe(false);

  });

});