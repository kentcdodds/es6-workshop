import * as Mathy from '../common/Mathy'
// FINAL_START
import _ from 'lodash'
import {sqrt as mySqrt, square as mySquare} from '../common/Mathy'
// FINAL_END
// WORKSHOP_START
// WRITE YOUR IMPORT STATEMENTS HERE
// WORKSHOP_END

test('can import Mathy', () => {
  // this one's already done! You're welcome :)
  expect(Mathy.sqrt).toBeTruthy()
  expect(Mathy.square).toBeTruthy()
  expect(Mathy.diag).toBeTruthy()
})

test('can destructure the import, to only retain pieces of the import', () => {
  // WORKSHOP_START
  // Import `Mathy` again, but pull out only the `sqrt` as mySqrt, and `square` as mySquare
  // WORKSHOP_END
  expect(mySqrt).toBeTruthy()
  expect(mySquare).toBeTruthy()
  expect(mySqrt).toBe(Mathy.sqrt)
  expect(mySquare).toBe(Mathy.square)
})

test('can import from my node_modules', () => {
  // WORKSHOP_START
  // import `lodash`
  // WORKSHOP_END
  expect(_).toBeTruthy()
})
