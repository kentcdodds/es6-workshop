import * as Mathy from '../common/Mathy'
import * as IndexImport from '../common'
// WRITE YOUR IMPORT STATEMENTS HERE

test('can import Mathy', () => {
  // this one's already done! You're welcome :)
  expect(Mathy.sqrt).toBeDefined()
  expect(Mathy.square).toBeDefined()
  expect(Mathy.diag).toBeDefined()
})

test('can specify what to import, to only retain pieces of the import', () => {
  // Import `Mathy` again, but pull out only the `sqrt` as mySqrt, and `square` as mySquare
  expect(mySqrt).toBeDefined()
  expect(mySquare).toBeDefined()
  expect(mySqrt).toBe(Mathy.sqrt)
  expect(mySquare).toBe(Mathy.square)
})

test('can import from my node_modules', () => {
  // import `lodash`
  expect(_).toBeDefined()
})

//////// Elaboration & Feedback /////////
/*
http://ws.kcd.im/?ws=ES6+and+Beyond&e=Modules&em=
*/
test('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(true).toBe(submitted)
})
////////////////////////////////

//////// EXTRA CREDIT ////////
test.skip('Index import', () => {
  //I have noticed that using index.js is pretty common pattern
  //If someone has been confused about that maybe this helps
  expect(IndexImport.variable1).toBe(/* ENTER YOUR GUESS HERE */)
  expect(IndexImport.variable2).toBe(/* ENTER YOUR GUESS HERE */)
  expect(IndexImport.variable3).toBe(/* ENTER YOUR GUESS HERE */)
  expect(IndexImport.variable4).toBe(/* ENTER YOUR GUESS HERE */)
})
// If you get this far, try adding a few more tests,
// then file a pull request to add them to the extra credit!
// Learn more here: http://kcd.im/es6-workshop-contributing
