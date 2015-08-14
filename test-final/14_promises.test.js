import {expect} from 'chai';

describe(`Promises`, () => {
  it(`should resolve`, (done) => {
    pickApple('ripe')
      .then((result) => {
        expect(result).to.equal('ripe apple');
        done();
      }, (result) => {
        expect(result).to.equal(undefined);
        done();
      })
      .catch((error) => {
        expect(error).to.equal(undefined);
        done();
      });
  });

  it(`should reject`, (done) => {
      pickApple('unripe')
      .then((result) => {
        expect(result).to.equal(undefined);
        done();
      }, (result) => {
        expect(result).to.equal('unripe apple');
        done();
      })
      .catch((error) => {
        expect(error).to.equal(undefined);
        done();
      });
  });

  it(`errors can be caught`, (done) => {
    return pickApple()
      .then((result) => {
        expect(result).to.equal(undefined);
        done();
      })
      .catch((error) => {
        expect(error.message).to.equal('out of apples');
        done();
      });
  });

  function pickApple(ripeness) {
    // Immediately return a promise which will eventually get resolved
    // or rejected by calling the corresponding function.
    return new Promise((resolve, reject) => {
      // Do something asynchonous. Could be AJAX, using a timeout here.
      setTimeout(() => { 
        if(ripeness === 'ripe') {
          resolve('ripe apple');
        } else if(ripeness === 'unripe') {
          reject('unripe apple');
        } else {
          reject(new Error('out of apples'));
        }
      }, 500);
    });
  }
});
