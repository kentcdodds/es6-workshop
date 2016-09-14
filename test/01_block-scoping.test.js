import {expect} from 'chai'

describe('Block Scoped Variables', () => {

  it.skip('can be used in place of `var`', () => {

    // Declare 'bandName' using 'let'

    // Declare 'isBestBand' using 'let'


    expect(bandName).to.equal('Queen')
    expect(isBestBand).to.be.true
  })


  it.skip('can modify the value of a `let` variable', () => {

    // Delcare 'releaseName' using 'let', setting the value to 'ES6'

    // Change value of 'releaseName' to be `ES2015`, the new name for ES6


    expect(releaseName).to.equal('ES2015')
  })

  it.skip('cannot modify the value of a `const` variable', () => {

    var releaseName = 'ES6'

    // This doesn't even transpile, so we can't actually test this...
    // once you've changed the `var` above to `const`, comment out the line below
    releaseName = 'ES2015'
    expect(releaseName).to.equal('ES6')
  })


  it.skip('is trapped inside of an `if` statement', () => {

    if (true) { // eslint-disable-line no-constant-condition
      // Change to `var` to `let`, so that 'b' is scoped inside of the if-statement
      var b = 1
    }

    expect(() => console.log(b)).to.throw('b is not defined')
  })


  it.skip('prevents loop counters from hoisting', () => {

    function doLoop() {
      // Change loop counter to `let` so that it is trapped inside of the loop, and can't be returned.
      for (var i = 0; i < 10; i++) {
        /* eslint no-empty:"off" */
      }
      return i
    }

    expect(doLoop).to.throw('i is not defined')
  })


  it.skip('means that we can start using block statements', () => {

    // BLOCK STATEMENT
    {
      // Change to `const` declaration
      var d = 2
    }

    expect(() => console.log('d', d)).to.throw('d is not defined')
  })

})
