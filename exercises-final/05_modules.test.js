import * as Mathy from '../common/Mathy'
import _ from 'lodash'
import {sqrt as mySqrt, square as mySquare} from '../common/Mathy'

test('can import Mathy', () => {
  // this one's already done! You're welcome :)
  expect(Mathy.sqrt).toBeDefined()
  expect(Mathy.square).toBeDefined()
  expect(Mathy.diag).toBeDefined()
})

test('can destructure the import, to only retain pieces of the import', () => {
  expect(mySqrt).toBeDefined()
  expect(mySquare).toBeDefined()
  expect(mySqrt).toBe(Mathy.sqrt)
  expect(mySquare).toBe(Mathy.square)
})

test('can import from my node_modules', () => {
  expect(_).toBeDefined()
})
