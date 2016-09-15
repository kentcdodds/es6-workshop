import {expect} from 'chai'

describe('MAPS', () => {

  it('has a set method', () => {
    // FINAL_START
    const myMap = new Map()
    myMap.set('name', 'Aaron')
    // FINAL_END
    // WORKSHOP_START
    // Create a new map called 'myMap'
    // add a new entry. Use 'name' as the key and 'Aaron' as the value
    // WORKSHOP_END

    expect(myMap.get('name')).to.equal('Aaron')
  })

  it('can use objects as a key', () => {
    const user = {name: 'Aaron'}
    const value = {twitter: '@js_dev', gplus: '+AaronFrost'}

    // FINAL_START
    const myMap = new Map()
    myMap.set(user, value)
    // FINAL_END
    // WORKSHOP_START
    // Create a map called 'myMap'
    // add a new entry. Use user as the key, and value as the value
    // WORKSHOP_END

    expect(myMap.has(user)).to.be.true
    expect(myMap.get(user)).to.equal(value)

  })

  it(`doesn't coerce keys`, () => {
    // FINAL_START
    const myMap = new Map()
    myMap.set(1, 'Aaron')
    expect(myMap.get('1')).to.equal(undefined)
    myMap.set('1', 'Aaron')
    expect(myMap.get('1')).to.equal('Aaron')
    // FINAL_END
    // WORKSHOP_START
    const myMap = new Map()
    myMap.set(1, 'Aaron')
    expect(myMap.get('1')).to.equal(/*ENTER YOUR GUESS HERE*/)
    myMap.set('1', 'Aaron')
    expect(myMap.get('1')).to.equal(/*ENTER YOUR GUESS HERE*/)
    // WORKSHOP_END
  })
})
