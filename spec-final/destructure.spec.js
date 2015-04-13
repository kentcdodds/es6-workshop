
jest.autoMockOff();

function getAddress(){
  return {
    city: "Salt Lake City",
    state: 'UT',
    zip: 84115
  };
}


describe('Destructuring', () => {

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

    expect(address).toBe(undefined);
  });


});