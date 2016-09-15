import {expect} from 'chai'

describe('Block Scoped Variables', () => {
  it('can be used in place of `var`', () => {
    let bandName = 'Queen'
    let isBestBand = true
    expect(bandName).to.be.equal('Queen')
    expect(isBestBand).to.be.true
  })

  it('can modify the value of a `let` variable', () => {
    let releaseName = 'ES6'
    releaseName = 'ES2015'
    expect(releaseName).to.equal('ES2015')
  })

  it('cannot modify the value of a `const` variable', () => {
    const releaseName = 'ES6'
    // releaseName = 'ES2015';
    expect(releaseName).to.equal('ES6')
  })

  it('is trapped inside of an `if` statement', () => {
    if (true) { // eslint-disable-line no-constant-condition
      // Change to `var` to `let`, so that b is scoped inside of the if-statement
      let b = 1
    }
    expect(() => console.log(b)).to.throw('b is not defined')
  })

  it(`can't redeclare using the same name`, () => {
    function doLoop() {
      for (let i = 0; i < 10; i++) {
        /* eslint no-empty:"off" */
      }
      return i
    }

    expect(doLoop).to.throw('i is not defined')
  })

  it('means that we can start using block statements', () => {
    // BLOCK STATEMENT
    {
      const d = 2
    }

    expect(() => console.log('d', d)).to.throw('d is not defined')
  })
})
