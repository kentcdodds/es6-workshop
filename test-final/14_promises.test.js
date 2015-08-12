import {expect} from 'chai';

describe(`Promise`, () => {
  let asyncCalls;
  beforeEach(() => {
    asyncCalls = 0;
  });

  it(`should make it much easier to deal with async code`, (done) => {
    //doAsync(function(calls) {
    //  expect(calls).to.equal(1);
    //  doAsync(function(calls) {
    //    expect(calls).to.equal(2);
    //    doAsync(function(calls) {
    //      expect(calls).to.equal(3);
    //      doAsync(function(calls) {
    //        expect(calls).to.equal(4);
    //        //done();
    //      });
    //    });
    //  });
    //});

    promisify(doAsync)
      .then((calls) => {
        expect(calls).to.equal(1);
        return promisify(doAsync);
      })
      .then((calls) => {
        expect(calls).to.equal(2);
        return promisify(doAsync);
      })
      .then((calls) => {
        expect(calls).to.equal(3);
        return promisify(doAsync);
      })
      .then((calls) => {
        expect(calls).to.equal(4);
        return promisify(doAsync);
      })
      .then(() => done());

    function promisify(funcWithCbArg) {
      return new Promise(function(resolve, reject) {
        funcWithCbArg(function(error, result) {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        });
      });
    }
  });

  function doAsync(cb) {
    asyncCalls++;
    cb(undefined, asyncCalls);
  }
});


