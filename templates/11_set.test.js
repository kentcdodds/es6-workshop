import {expect} from 'chai'

describe('SETS', () => {

  it('has an add method and a has method', () => {
    // FINAL_START
    const mySet = new Set()
    mySet.add(1)
    mySet.add(2)
    mySet.add(3)
    // FINAL_END
    // WORKSHOP_START
    // Create a new Set called 'mySet'
    // add the numbers 1, 2, and 3 to the set
    // WORKSHOP_END

    expect(mySet.has(1)).to.be.true
    expect(mySet.has(2)).to.be.true
    expect(mySet.has(3)).to.be.true
    expect(mySet.has(4)).to.be.false
  })

  it('doesn`t allow duplicates', () => {
    // FINAL_START
    const mySet = new Set()
    mySet.add(1)
    mySet.add(1)
    mySet.add(1)
    // FINAL_END
    // WORKSHOP_START
    // Create a new Set
    // add the following numbers to it, using set.add(num): 1, 1, 1
    // WORKSHOP_END

    expect(mySet.has(1)).to.be.true
    expect(mySet.has(2)).to.be.false
    expect(mySet.has(3)).to.be.false
    expect(mySet.has(4)).to.be.false
  })
})
