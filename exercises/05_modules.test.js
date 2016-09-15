import * as Mathy from '../common/Mathy'
// WRITE YOUR IMPORT STATEMENTS HERE

test('can import Mathy', () => {
  // this one's already done! You're welcome :)
  expect(Mathy.sqrt).toBeTruthy()
  expect(Mathy.square).toBeTruthy()
  expect(Mathy.diag).toBeTruthy()
})

test('can destructure the import, to only retain pieces of the import', () => {
  // Import `Mathy` again, but pull out only the `sqrt` as mySqrt, and `square` as mySquare
  expect(mySqrt).toBeTruthy()
  expect(mySquare).toBeTruthy()
  expect(mySqrt).toBe(Mathy.sqrt)
  expect(mySquare).toBe(Mathy.square)
})

test('can import from my node_modules', () => {
  // import `lodash`
  expect(_).toBeTruthy()
})
