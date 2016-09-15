import {expect} from 'chai'

describe('MAPS', () => {

  it('has a set method', () => {
    const myMap = new Map()
    myMap.set('name', 'Aaron')

    expect(myMap.get('name')).to.equal('Aaron')
  })

  it('can use objects as a key', () => {
    const user = {name: 'Aaron'}
    const value = {twitter: '@js_dev', gplus: '+AaronFrost'}

    const myMap = new Map()
    myMap.set(user, value)

    expect(myMap.has(user)).to.be.true
    expect(myMap.get(user)).to.equal(value)

  })

  it(`doesn't coerce keys`, () => {
    const myMap = new Map()
    myMap.set(1, 'Aaron')
    expect(myMap.get('1')).to.equal(undefined)
    myMap.set('1', 'Aaron')
    expect(myMap.get('1')).to.equal('Aaron')
  })
})
