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
  expect(Mathy.sqrt).toBeDefined()
  expect(Mathy.square).toBeDefined()
  expect(Mathy.diag).toBeDefined()
})

test('can destructure the import, to only retain pieces of the import', () => {
  // WORKSHOP_START
  // Import `Mathy` again, but pull out only the `sqrt` as mySqrt, and `square` as mySquare
  // WORKSHOP_END
  expect(mySqrt).toBeDefined()
  expect(mySquare).toBeDefined()
  expect(mySqrt).toBe(Mathy.sqrt)
  expect(mySquare).toBe(Mathy.square)
})

test('can import from my node_modules', () => {
  // WORKSHOP_START
  // import `lodash`
  // WORKSHOP_END
  expect(_).toBeDefined()
})

// WORKSHOP_START
//////// Elaboration /////////
// Please write, in your own words
// a few of the core concepts from
// the feature(s) in this exercise
//
// 1.
// 2.
// 3.
////////////////////////////////
//
/////////// Feedback ///////////
/*
http://ws.kcd.im/?ws=ES6+and+Beyond&e=Modules&em=
*/
////////////////////////////////
// WORKSHOP_END

//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests, then file a pull request to add them to the extra credit!
// Learn more here: https://github.com/kentcdodds/es6-workshop/blob/master/CONTRIBUTING.md#development
