test('can replace traditional functions', () => {
  let fnMultiply, arrowMultiply

  // FINAL_START
  fnMultiply = function(a, b) {
    return a * b
  }

  arrowMultiply = (a, b) => a * b
  // FINAL_END
  // WORKSHOP_START
  // Write two functions that take two params and return their product
  // For 'fnMultiply', set it equal to a regular function
  // For 'arrowMultiply', set it equal to an arrow function
  // WORKSHOP_END

  expect(fnMultiply(5, 5)).toBe(arrowMultiply(5, 5))
})

test('can replace traditional functions #2', () => {
  const nums = [2, 5, 10]
  // FINAL_START
  const squares = nums.map(num => num * num)
  // FINAL_END
  // WORKSHOP_START
  // Replace the 'function' in this 'map' call with an arrow function.
  // Hint: you shouldn't have any braces or 'return' after you are done
  const squares = nums.map(function(num) {
    return num * num
  })
  // WORKSHOP_END

  expect(squares.shift()).toBe(4)
  expect(squares.shift()).toBe(25)
  expect(squares.shift()).toBe(100)
})

test('binds `this` to the eval scope, not the runtime scope', () => {
  // FINAL_START
  const person = {
    name: 'Aaron',
    greetFriends: function(friends) {
      return friends.map(friend => this.name + ' greets to ' + friend)
    },
  }
  // FINAL_END
  // WORKSHOP_START
  // Change the person object. One of the functions should become an arrow to
  // allow for 'this' to retain context correctly
  const person = {
    name: 'Aaron',
    greetFriends: function(friends) {
      return friends.map(function(friend) {
        return this.name + ' greets to ' + friend
      })
    },
  }
  // WORKSHOP_END

  const friendsArray = ['Naomi', 'Jojo', 'Ryan', 'Owen']
  expect(() => person.greetFriends(friendsArray)).not.toThrow()
})

test('can make array filter chains more managable', () => {
  const data = [
    {type: 'Widget', name: 'Sprocket', price: 10.0, qty: 3},
    {type: 'Widget', name: 'Bracket', price: 1.0, qty: 5},
    {type: 'Widget', name: 'Brace', price: 2.5, qty: 1},
    {type: 'Widget', name: 'Sprocket', price: 4.0, qty: 2},
    {type: 'Food', name: 'Gouda', price: 8.75, qty: 4},
    {type: 'Food', name: 'Bacon', price: 3.5, qty: 3},
    {type: 'CD', name: 'Queen Best Hits', price: 5.5, qty: 5},
    {type: 'CD', name: 'Brittney Best Hits', price: 6.25, qty: 3},
    {type: 'CD', name: 'JT Best Hits', price: 2.25, qty: 6},
  ]

  // FINAL_START
  const shoppingList = data
    .filter(d => d.type != 'Widget') // Remove Widgets
    .filter(d => d.price < 5) // Find only remaining items with price < 5
    .sort((a, b) => a.qty - b.qty) // Sort by quantity, desc
    .map(d => d.name) // Pull just the name from each item
  // FINAL_END
  // WORKSHOP_START
  // REPLACE ALL REGULAR FUNCTIONS WITH ARROW FUNCTIONS
  const shoppingList = data
    .filter(function(d) {
      return d.type != 'Widget'
    }) // Remove Widgets
    .filter(function(d) {
      return d.price < 5
    }) // Find only remaining items with price < 5
    .sort(function(a, b) {
      return a.qty - b.qty
    }) // Sort by quantity, desc
    .map(function(d) {
      return d.name
    }) // Pull just the name from each item
  // WORKSHOP_END

  expect(shoppingList.shift()).toBe('Bacon')
  expect(shoppingList.shift()).toBe('JT Best Hits')
})

//////// Elaboration & Feedback /////////
// WORKSHOP_START
/*
http://ws.kcd.im/?ws=ES6+and+Beyond&e=Arrow+Functions&em=
*/
// WORKSHOP_END
test('I submitted my elaboration and feedback', () => {
  // WORKSHOP_START
  const submitted = false // change this when you've submitted!
  // WORKSHOP_END
  // FINAL_START
  const submitted = true
  // FINAL_END
  expect(true).toBe(submitted)
})
////////////////////////////////

//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests,
// then file a pull request to add them to the extra credit!
// Learn more here: http://kcd.im/es6-workshop-contributing
