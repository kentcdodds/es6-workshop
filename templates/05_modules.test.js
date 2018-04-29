import * as Mathy from '../common/Mathy'
import * as IndexImport from '../common'
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

test('can specify what to import, to only retain pieces of the import', () => {
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

//////// Elaboration & Feedback /////////
// WORKSHOP_START
/*
http://ws.kcd.im/?ws=ES6+and+Beyond&e=Modules&em=
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
test.skip('Index import', () => {
  //I have noticed that using index.js is pretty common pattern
  //If someone has been confused about that maybe this helps
  // WORKSHOP_START
  expect(IndexImport.variable1).toBe(/* ENTER YOUR GUESS HERE */)
  expect(IndexImport.variable2).toBe(/* ENTER YOUR GUESS HERE */)
  expect(IndexImport.variable3).toBe(/* ENTER YOUR GUESS HERE */)
  expect(IndexImport.variable4).toBe(/* ENTER YOUR GUESS HERE */)
  // WORKSHOP_END
  // FINAL_START
  expect(IndexImport.variable1).toBe('Bob')
  expect(IndexImport.variable2).toBe('Kent')
  expect(IndexImport.variable3).toBe(222)
  expect(IndexImport.variable4).toBe(false)
  // FINAL_END
})
// If you get this far, try adding a few more tests,
// then file a pull request to add them to the extra credit!
// Learn more here: http://kcd.im/es6-workshop-contributing
