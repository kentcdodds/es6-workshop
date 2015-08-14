import {expect} from 'chai';

describe(`Promises`, () => {
  it.skip(`should resolve`, (done) => {
    pickApple('ripe')
      .then((result) => {
        expect(result).to.equal(/*ENTER GUESS HERE*/);
        done();
      }, (result) => {
        expect(result).to.equal(/*ENTER GUESS HERE*/);
        done();
      })
      .catch((error) => {
        expect(error).to.equal(/* ENTER GUESS HERE */);
        done();
      });
  });

  it.skip(`should reject`, (done) => {
      pickApple('unripe')
      .then((result) => {
        expect(result).to.equal(/*ENTER GUESS HERE*/);
        done();
      }, (result) => {
        expect(result).to.equal(/* ENTER GUESS HERE */);
        done();
      })
      .catch((error) => {
        expect(error).to.equal(/* ENTER GUESS HERE */);
        done();
      });
  });

  it.skip(`errors can be caught`, (done) => {
    return pickApple()
      .then((result) => {
        expect(result).to.equal(/*ENTER GUESS HERE*/);
        done();
      })
      .catch((error) => {
        expect(error.message).to.equal(/* ENTER GUESS HERE*/);
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
