jest.autoMockOff();


describe('LET', () => {

  it('can be used in place of `var`', () => {

    //Declare bandName using 'let'
    let bandName = "Queen";
    //Declare isBestBand using 'let'
    let isBestBand = true;

    expect(bandName).toBe("Queen");
    expect(isBestBand).toBe(true);
  });


  it('can modify the value of a `let` variable', () => {

    let releaseName = "ES6";

    //Change value of releaseName to be `ES2015`, the new name for ES6
    releaseName = 'ES2015';

    expect(releaseName).toBe("ES2015");
  });


  it('is trapped inside of an `if` statement', () => {

    if(true){
      //Change to `var` to `let`, so that b is scoped inside of the if-statement
      let b = 1;
    }

    expect(()=> console.log(b)).toThrow(new ReferenceError('b is not defined'));
  });


  it('can\'t redeclare using the same name', () => {

    function doLoop(){
      //Change loop counter to `let` so that it is trapped inside of the loop, and can't be returned.
      for(let i = 0; i < 10; i++){

      }
      return i;
    }

    expect(doLoop).toThrow(new ReferenceError('i is not defined'));
  });


  it('means that we can start using block statements', () => {

    //BLOCK STATEMENT
    {
      //Change to `let` declaration
      let d = 2;
    }

    expect(()=> console.log('d',d)).toThrow(new ReferenceError('d is not defined'));
  });

});