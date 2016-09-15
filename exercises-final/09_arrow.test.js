import {expect} from 'chai'

describe('Arrow Functions', () => {

  it('can replace traditional functions', () => {
    let fnMultiply, arrowMultiply

    fnMultiply = function(a, b) {
      return a * b
    }

    arrowMultiply = (a, b) => a * b

    expect(fnMultiply(5, 5)).to.equal(arrowMultiply(5, 5))
  })

  it('can replace traditional functions #2', () => {
    const nums = [2, 5, 10]
    const squares = nums.map(num => num * num)

    expect(squares.shift()).to.equal(4)
    expect(squares.shift()).to.equal(25)
    expect(squares.shift()).to.equal(100)
  })

  it('binds `this` to the eval scope, not the runtime scope', () => {
    const person = {
      name: 'Aaron',
      greetFriends: function(friends) {
        return friends.map(friend => this.name + ' greets to ' + friend)
      },
    }

    const friendsArray = ['Naomi', 'Jojo', 'Ryan', 'Owen']
    expect(() => person.greetFriends(friendsArray)).not.to.throw()
  })

  it('can make array filter chains more managable', () => {
    const data = [
      {type: 'Widget', name: 'Sprocket', price: 10.00, qty: 3},
      {type: 'Widget', name: 'Bracket', price: 1.00, qty: 5},
      {type: 'Widget', name: 'Brace', price: 2.50, qty: 1},
      {type: 'Widget', name: 'Sprocket', price: 4.00, qty: 2},
      {type: 'Food', name: 'Gouda', price: 8.75, qty: 4},
      {type: 'Food', name: 'Bacon', price: 3.50, qty: 3},
      {type: 'CD', name: 'Queen Best Hits', price: 5.50, qty: 5},
      {type: 'CD', name: 'Brittney Best Hits', price: 6.25, qty: 3},
      {type: 'CD', name: 'JT Best Hits', price: 2.25, qty: 6},
    ]

    const shoppingList = data
      .filter(d => d.type != 'Widget') // Remove Widgets
      .filter(d => d.price < 5)        // Find only remaining items with price < 5
      .sort(d => d.qty * -1)           // Sort by price, desc
      .map(d => d.name)                // Pull just the name from each item

    expect(shoppingList.shift()).to.equal('Bacon')
    expect(shoppingList.shift()).to.equal('JT Best Hits')
  })
})
