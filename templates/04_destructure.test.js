import {expect} from 'chai'

describe('Destructuring', () => {

  describe('with Objects', () => {

    it('can be used to pull apart objects', () => {
      // FINAL_START
      const {city, state, zip} = getAddress()
      // FINAL_END
      // WORKSHOP_START
      // Using destructuring, call `getAddress()` and create a 'city', 'state' and 'zip' variable.
      // var address = getAddress();
      // var city = address.city;
      // var state = address.state;
      // var zip = address.zip;
      // WORKSHOP_END
      expect(city).to.equal('Salt Lake City')
      expect(state).to.equal('UT')
      expect(zip).to.equal(84115)
    })

    it('sets missing values to undefined', () => {
      // FINAL_START
      const {address} = getAddress()
      // FINAL_END
      // WORKSHOP_START
      // Using destructuring, call `getAddress()` and create an 'address' variable.
      // WORKSHOP_END
      expect(address).to.be.undefined
    })

    it('can alias destructured variables', () => {
      // FINAL_START
      const {city: c, state: s, zip: z} = getAddress()
      // FINAL_END
      // WORKSHOP_START
      // Using destructuring, call `getAddress()` and pull the city, state and zip out, and alias them to c, s, z, respectively
      // WORKSHOP_END
      expect(c).to.equal('Salt Lake City')
      expect(s).to.equal('UT')
      expect(z).to.equal(84115)
      expect(() => console.log(city)).to.throw()
      expect(() => console.log(state)).to.throw()
      expect(() => console.log(zip)).to.throw()
    })

    it('can destructure nested variables', () => {
      // FINAL_START
      const {coords: {lat, long}} = getAddress()
      // FINAL_END
      // WORKSHOP_START
      // Using destructuring, call `getAddress()` and create an 'address' variable.
      // WORKSHOP_END
      expect(lat).to.equal(40.776608)
      expect(long).to.equal(-111.920485)
      expect(() => console.log(coords)).to.throw()
    })
  })

  describe('with Arrays', () => {

    it('can be used to pull apart arrays', () => {
      // FINAL_START
      const [one, two] = getNumbers()
      // FINAL_END
      // WORKSHOP_START
      // Call getNumbers and pull the first value out as `one` and the second as `two`
      // WORKSHOP_END
      expect(one).to.equal(1)
      expect(two).to.equal(2)
    })

    it('can skip indexes in arrays', () => {
      // FINAL_START
      const [one, , three] = getNumbers()
      // FINAL_END
      // WORKSHOP_START
      // Call getNumbers and pull the first value out as `one` and the second as `two`
      // WORKSHOP_END
      expect(one).to.equal(1)
      expect(three).to.equal(3)
      expect(() => console.log(two)).to.throw()
    })

    it('can reach nested arrays', () => {
      // FINAL_START
      const [one, , [three, , [, six]]] = getNestedNumbers()
      // FINAL_END
      // WORKSHOP_START
      // Call getNestedNumbers and pull the first value out as `one`, the 3 as `three` and 6 as `sixth`.
      // WORKSHOP_END
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
