import {expect} from 'chai'

describe('SETS', () => {

  it('has an add method and a has method', () => {
    // Create a new Set called 'mySet'
    // add the numbers 1, 2, and 3 to the set

    expect(mySet.has(1)).to.be.true
    expect(mySet.has(2)).to.be.true
    expect(mySet.has(3)).to.be.true
    expect(mySet.has(4)).to.be.false
  })

  it('doesn`t allow duplicates', () => {
    // Create a new Set
    // add the following numbers to it, using set.add(num): 1, 1, 1

    expect(mySet.has(1)).to.be.true
    expect(mySet.has(2)).to.be.false
    expect(mySet.has(3)).to.be.false
    expect(mySet.has(4)).to.be.false
  })
})
