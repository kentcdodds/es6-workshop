// COMMENT_START
/* eslint no-const-assign:0 */
// COMMENT_END
import {expect} from 'chai'

describe('Block Scoped Variables', () => {
  it('can be used in place of `var`', () => {
    // FINAL_START
    let bandName = 'Queen'
    let isBestBand = true
    // FINAL_END
    // WORKSHOP_START
    // Declare bandName using 'let'
    // Declare isBestBand using 'let'
    // WORKSHOP_END
    expect(bandName).to.be.equal('Queen')
    expect(isBestBand).to.be.true
  })

  it('can modify the value of a `let` variable', () => {
    // FINAL_START
    let releaseName = 'ES6'
    releaseName = 'ES2015'
    // FINAL_END
    // WORKSHOP_START
    // Delcare 'releaseName' using 'let', setting the value to 'ES6'
    // Change value of releaseName to be `ES2015`, the new name for ES6
    // WORKSHOP_END
    expect(releaseName).to.equal('ES2015')
  })

  it('cannot modify the value of a `const` variable', () => {
    // FINAL_START
    const releaseName = 'ES6'
    // releaseName = 'ES2015';
    // FINAL_END
    // WORKSHOP_START
    var releaseName = 'ES6'
    // This doesn't even compile, so we can't actually test this...
    // once you've changed the `var` above to `cost`, comment out the line below
    releaseName = 'ES2015';
    // WORKSHOP_END
    expect(releaseName).to.equal('ES6')
  })

  it('is trapped inside of an `if` statement', () => {
    if (true) { // eslint-disable-line no-constant-condition
      // Change to `var` to `let`, so that b is scoped inside of the if-statement
      // FINAL_START
      let b = 1
      // FINAL_END
      // WORKSHOP_START
      var b = 1
      // WORKSHOP_END
    }
    expect(() => console.log(b)).to.throw('b is not defined')
  })

  it(`can't redeclare using the same name`, () => {
    function doLoop() {
      // FINAL_START
      for (let i = 0; i < 10; i++) {
        /* eslint no-empty:"off" */
      }
      // FINAL_END
      // WORKSHOP_START
      // Change loop counter to `let` so that it is trapped inside of the loop, and can't be returned.
      for (var i = 0; i < 10; i++) {
        /* eslint no-empty:"off" */
      }
      // WORKSHOP_END
      return i
    }

    expect(doLoop).to.throw('i is not defined')
  })

  it('means that we can start using block statements', () => {
    // BLOCK STATEMENT
    {
      // FINAL_START
      const d = 2
      // FINAL_END
      // WORKSHOP_START
      // Change to `const` declaration
      var d = 2
      // WORKSHOP_END
    }

    expect(() => console.log('d', d)).to.throw('d is not defined')
  })
})
