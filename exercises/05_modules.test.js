import {expect} from 'chai'
import * as Mathy from '../common/Mathy'
// WRITE YOUR IMPORT STATEMENTS HERE

describe('ES6 Modules', () => {
  it('can import Mathy', () => {
    // this one's already done! You're welcome :)
    expect(Mathy.sqrt).to.exist
    expect(Mathy.square).to.exist
    expect(Mathy.diag).to.exist
  })

  it('can destructure the import, to only retain pieces of the import', () => {
    // Import `Mathy` again, but pull out only the `sqrt` as mySqrt, and `square` as mySquare
    expect(mySqrt).to.exist
    expect(mySquare).to.exist
    expect(mySqrt).to.equal(Mathy.sqrt)
    expect(mySquare).to.equal(Mathy.square)
  })

  it('can import from my node_modules', () => {
    // import `lodash`
    expect(_).to.exist
  })
})
