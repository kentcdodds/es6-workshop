import * as Mathy from '../common/Mathy'
import * as IndexImport from '../common'
import _ from 'lodash'
import {sqrt as mySqrt, square as mySquare} from '../common/Mathy'

test('can import Mathy', () => {
  // this one's already done! You're welcome :)
  expect(Mathy.sqrt).toBeDefined()
  expect(Mathy.square).toBeDefined()
  expect(Mathy.diag).toBeDefined()
})

test('can specify what to import, to only retain pieces of the import', () => {
  expect(mySqrt).toBeDefined()
  expect(mySquare).toBeDefined()
  expect(mySqrt).toBe(Mathy.sqrt)
  expect(mySquare).toBe(Mathy.square)
})

test('can import from my node_modules', () => {
  expect(_).toBeDefined()
})

//////// Elaboration & Feedback /////////
test('I submitted my elaboration and feedback', () => {
  const submitted = true
  expect(true).toBe(submitted)
})
////////////////////////////////

//////// EXTRA CREDIT ////////
test.skip('Index import', () => {
  //I have noticed that using index.js is pretty common pattern
  //If someone has been confused about that maybe this helps
  expect(IndexImport.variable1).toBe('Bob')
  expect(IndexImport.variable2).toBe('Kent')
  expect(IndexImport.variable3).toBe(222)
  expect(IndexImport.variable4).toBe(false)
})
// If you get this far, try adding a few more tests,
// then file a pull request to add them to the extra credit!
// Learn more here: http://kcd.im/es6-workshop-contributing
