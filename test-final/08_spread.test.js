import {expect} from 'chai'

describe(`Spread`, () => {
  it(`should be able to call a function and spread the arguments`, () => {
    const args = ['a', 'b', 'c']
    let calls = 0

    myFunction(...args)
    expect(calls).to.equal(1)

    function myFunction(a, b, c) {
      expect(a).to.equal('a')
      expect(b).to.equal('b')
      expect(c).to.equal('c')
      calls++
    }

  })

  it(`should be easier to concatenate arrays`, () => {
    const array1 = [1, 2, 3]
    const result = [...array1, 4, 5, 6]
    expect(result).to.deep.equal([1, 2, 3, 4, 5, 6])
  })

  it(`should be able to merge properties from objects`, () => {
    const obj1 = {
      foo: 'bar',
      baz: 'foobar',
    }
    const result = {
      ...obj1,
      eggs: 'spam',
    }
    expect(result).to.deep.equal({
      foo: 'bar',
      baz: 'foobar',
      eggs: 'spam',
    })
  })
})
