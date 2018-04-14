test('String.prototype.padStart saves us from left-pad-gate', () => {
  const originalString = 'Worlds Finest'
  const result = originalString.padStart(17)
  expect(result).toBe('    Worlds Finest')
})

test('String.prototype.padEnd (and padStart) can be given a string to pad with', () => {
  const originalString = 'Stronger Together'
  const result = originalString.padEnd(27, '-123')
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
  const result = Object.values(show)
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
  const result = Object.entries(show)
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
      c,
    ) {
      log(a, b, c)
    }

    foo(
      1,
      2,
      3,
    )

    function bar(
      a,
      b,
      ...rest
    ) {
      log(a, b, ...rest)
    }
    bar(
      1, 2, 3,
      4, 5, 6,
    )

    function log() {
      // do nothing :)
    }
  `).toBeValidSyntax()
})

//////// Elaboration & Feedback /////////
test('I submitted my elaboration and feedback', () => {
  const submitted = true
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
