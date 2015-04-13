jest.autoMockOff();


describe('LET', () => {
  it('can be used in place of `var`', () => {

    //Declare bandName using 'let'

    //Declare isBestBand using 'let'


    expect(bandName).toBe("Queen");
    expect(isBestBand).toBe(true);
  });


  it('can modify the value of a `let` variable', () => {

    let releaseName = "ES6";

    //Change value of releaseName to be `ES2015`, the new name for ES6
    releaseName = "ES2015";

    expect(releaseName).toBe("E52015");
  });
});