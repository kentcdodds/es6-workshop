
jest.autoMockOff();

function getAddress(){
  return {
    city: "Salt Lake City",
    state: 'UT',
    zip: 84115,
    coords: {
      lat: 40.776608,
      long: -111.920485
    }
  };
}

function getNumbers(){
  return [1, 2, 3, 4, 5, 6];
}

function getNestedNumbers(){
  return [1, 2, [3, 4, [5, 6]]];
}


describe('Destructuring', () => {

  describe('with Objects', () => {

    it('can be used to pull apart objects', () => {

      //Using destructuring, call `getAddress()` and create a 'city', 'state' and 'zip' variable.
      //var address = getAddress();
      //var city = address.city;
      //var state = address.state;
      //var zip = address.zip;
      let {city, state, zip} = getAddress();

      expect(city).toBe("Salt Lake City");
      expect(state).toBe("UT");
      expect(zip).toBe(84115);
    });


    it('sets missing values to undefined', () => {

      //Using destructuring, call `getAddress()` and create an 'address' variable.
      let {address} = getAddress();

      expect(address).toBeUndefined();
    });

    it('can alias destructured variables', () => {

      //Using destructuring, call `getAddress()` and pull the city, state and zip out, and alias them to c, s, z, respectively
      let {city:c, state:s, zip:z} = getAddress();

      expect(c).toBe("Salt Lake City");
      expect(s).toBe("UT");
      expect(z).toBe(84115);
      expect( ()=>console.log(city) ).toThrow();
      expect( ()=>console.log(state) ).toThrow();
      expect( ()=>console.log(zip) ).toThrow();

    });

    it('can destructure nested variables', () => {

      //Using destructuring, call `getAddress()` and create an 'address' variable.
      let {coords: {lat, long}} = getAddress();

      expect(lat).toBe(40.776608);
      expect(long).toBe(-111.920485);
      expect(()=> console.log(coords)).toThrow();

    });

  });

  describe('with Arrays', ()=>{

    it('can be used to pull apart arrays', () =>{

      //Call getNumbers and pull the first value out as `one` and the second as `two`
      let [one, two] = getNumbers();

      expect(one).toBe(1);
      expect(two).toBe(2);

    });

    it('can skip indexes in arrays', () =>{

      //Call getNumbers and pull the first value out as `one` and the second as `two`
      let [one, ,three] = getNumbers();

      expect(one).toBe(1);
      expect(three).toBe(3);
      expect(()=>console.log(two)).toThrow();

    });

    it('can reach nested arrays', () =>{

      //Call getNestedNumbers and pull the first value out as `one`, the 3 as `three` and 6 as `sixth`.
      let [one, ,[three, ,[ ,six]]] = getNestedNumbers();

      expect(one).toBe(1);
      expect(three).toBe(3);
      expect(six).toBe(6);

    });

  });

});

//MORE AT http://www.2ality.com/2015/01/es6-destructuring.html