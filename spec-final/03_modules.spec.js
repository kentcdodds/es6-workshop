//WRITE YOUR IMPORT STATEMENTS HERE
import Mathy from '../common/Mathy';
import myMathy from '../common/Mathy';
import _ from 'lodash';
import {sqrt as mySqrt, square as mySquare} from '../common/Mathy';


jest.autoMockOff();

describe('ES6 Modules', () => {
  it('can import Mathy', () => {

    //I DID THIS ONE FOR YOU!
    expect(Mathy.sqrt).toBeDefined();
    expect(Mathy.square).toBeDefined();
    expect(Mathy.diag).toBeDefined();
  });


  it('Can alias the import name', () => {

    //Import `Mathy as myMathy` to ge these tests to pass.

    expect(myMathy).toBeDefined();
    expect(myMathy.sqrt).toEqual(Mathy.sqrt);
    expect(myMathy.square).toEqual(Mathy.square);
    expect(myMathy.diag).toEqual(Mathy.diag);
  });

  it('can destructure the import, to only retain pieces of the import', () => {

    //Import `Mathy` again, but pull out only the `sqrt` as mySqrt, and `square` as mySquare

    expect(mySqrt).toBeDefined();
    expect(mySquare).toBeDefined();
    expect(mySqrt).toEqual(Mathy.sqrt);
    expect(mySquare).toEqual(Mathy.square);
  });

  it('can import from my node_modules', () => {

    //import `lodash`

    expect(_).toBeDefined();

  });
});