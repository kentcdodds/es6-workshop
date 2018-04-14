test('String.prototype.padStart saves us from left-pad-gate', () => {
  const originalString = 'Worlds Finest'
  // WORKSHOP_START
  // call padStart on this string to make the test pass
  const result = originalString
  // WORKSHOP_END
  // FINAL_START
  const result = originalString.padStart(17)
  // FINAL_END
  expect(result).toBe('    Worlds Finest')
})

test('String.prototype.padEnd (and padStart) can be given a string to pad with', () => {
  const originalString = 'Stronger Together'
  // WORKSHOP_START
  // call padEnd on this string to make the test pass
  // WORKSHOP_END
  // FINAL_START
  const result = originalString.padEnd(27, '-123')
  // FINAL_END
  expect(result).toBe('Stronger Together-123-123-1')
})

test('Object.values gets just the values of an object', () => {
  const show = {
    title: 'Supergirl',
    seasons: 1.2,
    characters: [
      'Supergirl',
      'Cat Grant',
      'Superman',
      'Jimmy Olsen',
      'Hank Henshaw',
      'Winn Schott',
      'Alex Danvers',
    ],
  }
  // WORKSHOP_START
  // get the values of the show object as an array
  // WORKSHOP_END
  // FINAL_START
  const result = Object.values(show)
  // FINAL_END
  expect(result).toEqual([
    'Supergirl',
    1.2,
    [
      'Supergirl',
      'Cat Grant',
      'Superman',
      'Jimmy Olsen',
      'Hank Henshaw',
      'Winn Schott',
      'Alex Danvers',
    ],
  ])
})

test('Object.entries gives an array of arrays as [key, value]', () => {
  const show = {
    title: 'The Flash',
    seasons: 2.2,
    characters: [
      'The Flash',
      'Iris West',
      'Caitlin Snow',
      'Eddie Thawne', // 😢
      'Cisco Ramon',
      'Harrison Wells',
      'Joe West',
    ],
  }
  // WORKSHOP_START
  // get a [key, value] array of the show object
  // WORKSHOP_END
  // FINAL_START
  const result = Object.entries(show)
  // FINAL_END
  expect(result).toEqual([
    ['title', 'The Flash'],
    ['seasons', 2.2],
    [
      'characters',
      [
        'The Flash',
        'Iris West',
        'Caitlin Snow',
        'Eddie Thawne',
        'Cisco Ramon',
        'Harrison Wells',
        'Joe West',
      ],
    ],
  ])
})

test('Trailing commas in function parameter lists and calls help us with git', () => {
  // becasue this is a syntax thing, we'll put it inside a string and use `eval` to make sure
  // that you get the syntax correct :)
  expect(`
    function foo(
      a,
      b,
      // WORKSHOP_START
      c
      // WORKSHOP_END
      // FINAL_START
      c,
      // FINAL_END
    ) {
      log(a, b, c)
    }

    foo(
      1,
      2,
      // WORKSHOP_START
      3
      // WORKSHOP_END
      // FINAL_START
      3,
      // FINAL_END
    )

    function bar(
      a,
      b,
      // WORKSHOP_START
      ...rest,
      // WORKSHOP_END
      // FINAL_START
      ...rest
      // FINAL_END
    ) {
      log(a, b, ...rest)
    }
    bar(
      1, 2, 3,
      // WORKSHOP_START
      4, 5, 6
      // WORKSHOP_END
      // FINAL_START
      4, 5, 6,
      // FINAL_END
    )

    function log() {
      // do nothing :)
    }
  `).toBeValidSyntax()
})

//////// Elaboration & Feedback /////////
// WORKSHOP_START
/*
http://ws.kcd.im/?ws=ES6+and+Beyond&e=ES2017&em=
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

// there's also this fancy Object.getOwnPropertyDescriptors thing,
// but you'll likely rarely use that directly...
// https://github.com/tc39/proposal-object-getownpropertydescriptors
// Maybe you could make a PR to add a test for this?!
