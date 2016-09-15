import {expect} from 'chai'

describe('Destructuring', () => {

  describe('with Objects', () => {

    it('can be used to pull apart objects', () => {
      const {city, state, zip} = getAddress()
      expect(city).to.equal('Salt Lake City')
      expect(state).to.equal('UT')
      expect(zip).to.equal(84115)
    })

    it('sets missing values to undefined', () => {
      const {address} = getAddress()
      expect(address).to.be.undefined
    })

    it('can alias destructured variables', () => {
      const {city: c, state: s, zip: z} = getAddress()
      expect(c).to.equal('Salt Lake City')
      expect(s).to.equal('UT')
      expect(z).to.equal(84115)
      expect(() => console.log(city)).to.throw()
      expect(() => console.log(state)).to.throw()
      expect(() => console.log(zip)).to.throw()
    })

    it('can destructure nested variables', () => {
      const {coords: {lat, long}} = getAddress()
      expect(lat).to.equal(40.776608)
      expect(long).to.equal(-111.920485)
      expect(() => console.log(coords)).to.throw()
    })
  })

  describe('with Arrays', () => {

    it('can be used to pull apart arrays', () => {
      const [one, two] = getNumbers()
      expect(one).to.equal(1)
      expect(two).to.equal(2)
    })

    it('can skip indexes in arrays', () => {
      const [one, , three] = getNumbers()
      expect(one).to.equal(1)
      expect(three).to.equal(3)
      expect(() => console.log(two)).to.throw()
    })

    it('can reach nested arrays', () => {
      const [one, , [three, , [, six]]] = getNestedNumbers()
      expect(one).to.equal(1)
      expect(three).to.equal(3)
      expect(six).to.equal(6)
    })
  })
})

function getAddress() {
  return {
    city: 'Salt Lake City',
    state: 'UT',
    zip: 84115,
    coords: {
      lat: 40.776608,
      long: -111.920485,
    },
  }
}

function getNumbers() {
  return [1, 2, 3, 4, 5, 6]
}

function getNestedNumbers() {
  return [1, 2, [3, 4, [5, 6]]]
}

// MORE AT http://www.2ality.com/2015/01/es6-destructuring.html
