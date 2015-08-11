import {expect} from 'chai';

describe(`Spread`, () => {
  it.skip(`should be able to call a function and spread the arguments`, () => {
    const args = ['a', 'b', 'c'];
    let calls = 0;

    // call myFunction using the spread operator with args
    expect(calls).to.equal(1);

    function myFunction(a, b, c) {
      expect(a).to.equal('a');
      expect(b).to.equal('b');
      expect(c).to.equal('c');
      calls++;
    }
  });

  it.skip(`should be easier to concatenate arrays`, () => {
    const array1 = [1, 2, 3];
    // create a result array that uses the spread operator to concatenate array1 with [4, 5, 6]
    expect(result).to.deep.equal([1, 2, 3, 4, 5, 6]);
  });

  it.skip(`should be able to merge properties from objects`, () => {
    const obj1 = {
      foo: 'bar',
      baz: 'foobar'
    };
    // create a result object that uses the spread operator to add `eggs: 'spam'` to what exists in obj1
    expect(result).to.deep.equal({
      foo: 'bar',
      baz: 'foobar',
      eggs: 'spam'
    });
  });
});
