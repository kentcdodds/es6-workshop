test(`should ensure a variable is unique reference`, () => {
  const SKY_COLOR_BLUE = Symbol()
  const OCEAN_COLOR_BLUE = Symbol()

  expect(SKY_COLOR_BLUE).not.toBe(OCEAN_COLOR_BLUE)
  expect(typeof SKY_COLOR_BLUE).toBe('symbol')
  expect(typeof SKY_COLOR_BLUE).toBe('symbol')
})

test(`should help determine if a singleton has already been declared`, () => {
  const toRuleThemAll = Symbol('One ring, to rule them all.')
  const myRing = OneRing()
  const myPrecious = OneRing()

  function OneRing() {

    // Check if we already have an instance of OneRing
    // If so, return it
    if (OneRing[toRuleThemAll]) return OneRing[toRuleThemAll]

    // If not, set up a new instance.
    let destroy = function() {
      return 'Ring destroyed!'
    }

    // Return the new instance and assign it to a symbol
    return OneRing[toRuleThemAll] = {
      destroy,
    }
  }

  // Rings should be defined
  expect(myRing).toBeDefined()
  expect(myPrecious).toBeDefined()

  // We should have a symbol to hold a reference to the singleton
  expect(typeof toRuleThemAll).toBe('symbol')

  // Both variables should reference the same instance
  expect(myRing).toBe(myPrecious)

  // Both should be properly created instances
  expect(myRing.destroy()).toBe('Ring destroyed!')
  expect(myPrecious.destroy()).toBe('Ring destroyed!')
})
