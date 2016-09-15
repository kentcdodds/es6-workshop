import {expect} from 'chai'

describe('Default Values', () => {
  it('can be triggered when the incoming argument is undefined', () => {

    function test(name = 'Mercury') {
      return name
    }

    // FINAL_START
    expect(test('Aaron')).to.equal('Aaron')
    expect(test()).to.equal('Mercury')
    expect(test(undefined)).to.equal('Mercury')
    expect(test(null)).to.equal(null)
    // FINAL_END
    // WORKSHOP_START
    expect(test('Aaron')).to.equal(/*ENTER YOUR GUESS HERE*/)
    expect(test(undefined)).to.equal(/*ENTER YOUR GUESS HERE*/)
    expect(test(null)).to.equal(/*ENTER YOUR GUESS HERE*/)
    expect(test()).to.equal(/*ENTER YOUR GUESS HERE*/)
    // WORKSHOP_END
  })

  it(`aren't included in arguments`, () => {

    function test(name = 'Mercury') {
      return arguments.length
    }

    // FINAL_START
    expect(test('Aaron')).to.equal(1)
    expect(test(null)).to.equal(1)
    expect(test()).to.equal(0)
    // FINAL_END
    // WORKSHOP_START
    expect(test('Aaron')).to.equal(/*ENTER YOUR GUESS HERE*/)
    expect(test(null)).to.equal(/*ENTER YOUR GUESS HERE*/)
    expect(test()).to.equal(/*ENTER YOUR GUESS HERE*/)
    // WORKSHOP_END
  })

  it('can trigger a function call', () => {
    let triggerCount = 0

    function test(name = getDefault()) {
      return name
    }

    function getDefault() {
      triggerCount++
      return 'Mercury'
    }

    // FINAL_START
    expect(triggerCount).to.equal(0)
    expect(test('Aaron')).to.equal('Aaron')
    expect(test()).to.equal('Mercury')
    expect(test(undefined)).to.equal('Mercury')
    expect(triggerCount).to.equal(2)
    // FINAL_END
    // WORKSHOP_START
    expect(triggerCount).to.equal(/*ENTER YOUR GUESS HERE*/)
    expect(test('Aaron')).to.equal(/*ENTER YOUR GUESS HERE*/)
    expect(test()).to.equal(/*ENTER YOUR GUESS HERE*/)
    expect(test(undefined)).to.equal(/*ENTER YOUR GUESS HERE*/)
    expect(triggerCount).to.equal(/*ENTER YOUR GUESS HERE*/)
    // WORKSHOP_END
  })
})

describe('Rest Parameters', () => {

  it('catch non-specified params', () => {
    function resty(first, second, ...others) {
      return others
    }

    // FINAL_START
    expect(resty().length).to.equal(0)
    expect(resty(1).length).to.equal(0)
    expect(resty(1, 2).length).to.equal(0)
    expect(resty(1, 2, 3).length).to.equal(1)
    expect(resty(1, 2, 3, undefined, 5, undefined, 7, undefined, 9, 10).length).to.equal(8)
    // FINAL_END
    // WORKSHOP_START
    expect(resty().length).to.equal(/*ENTER YOUR GUESS HERE*/)
    expect(resty(1).length).to.equal(/*ENTER YOUR GUESS HERE*/)
    expect(resty(1, 2).length).to.equal(/*ENTER YOUR GUESS HERE*/)
    expect(resty(1, 2, 3).length).to.equal(/*ENTER YOUR GUESS HERE*/)
    expect(resty(1, 2, 3, undefined, 5, undefined, 7, undefined, 9, 10).length).to.equal(/*ENTER YOUR GUESS HERE*/)
    // WORKSHOP_END
  })

  it('has a different length than `arguments`', () => {
    function resty(first, second, ...others) {
      return others.length == arguments.length
    }

    // FINAL_START
    // expect(resty()).to.equal(true)
    // expect(resty(1)).to.equal(false)
    // expect(resty(1, 2)).to.equal(false)
    // expect(resty(1, 2, 3)).to.equal(false)
    // expect(resty(1, 2, 3, undefined, 5, undefined, 7, undefined, 9, 10)).to.equal(false)
    // FINAL_END
    // WORKSHOP_START
    expect(resty()).to.equal(/*ENTER YOUR GUESS HERE*/)
    expect(resty(1)).to.equal(/*ENTER YOUR GUESS HERE*/)
    expect(resty(1, 2)).to.equal(/*ENTER YOUR GUESS HERE*/)
    expect(resty(1, 2, 3)).to.equal(/*ENTER YOUR GUESS HERE*/)
    expect(resty(1, 2, 3, undefined, 5, undefined, 7, undefined, 9, 10)).to.equal(/*ENTER YOUR GUESS HERE*/)
    // WORKSHOP_END
  })

  it('is an actual array, unlike arguments', () => {
    function resty(...args) {
      return args
    }

    function argy() {
      return arguments
    }

    var args = argy(1, 2, 3)
    var rests = resty(1, 2, 3)

    // FINAL_START
    expect(args.__proto__ == rests.__proto__).to.equal(false)
    expect(args.splice).to.equal(undefined)
    expect(rests.__proto__).to.equal(Array.prototype)
    expect(rests.splice).to.exist
    expect(rests.splice).to.equal(Array.prototype.splice)
    // FINAL_END
    // WORKSHOP_START
    expect(args.__proto__ == rests.__proto__).to.equal(/*ENTER YOUR GUESS HERE*/)
    expect(args.splice).to.equal(/*ENTER YOUR GUESS HERE*/)
    expect(rests.__proto__).to.equal(/*ENTER YOUR GUESS HERE*/)
    expect(rests.splice).to.exist
    expect(rests.splice).to.equal(Array.prototype.splice)
    // WORKSHOP_END
  })

  describe('EXTRA CREDIT', () => {

    it('it can default all arguments, optionally', () => {
      // WORKSHOP_START
      // Modify the method signature of `myFunction` to allow for all args to be optional
      // WORKSHOP_END

      // FINAL_START
      function myFunction({name = 'Aaron', age = 35, favoriteBand = 'Queen'} = {}) {
      // FINAL_END
      // COMMENT_START make the parser happy :)
      }
      // COMMENT_END
      // WORKSHOP_START
      function myFunction({name, age, favoriteBand}) {
      // WORKSHOP_END
        expect(name).to.exist
        expect(age).to.exist
        expect(favoriteBand).to.exist
      }

      myFunction({name: 'Axel', age: 37, favoriteBand: 'Taylor Swift'})
      myFunction({name: 'Axel', age: 37})
      myFunction({name: 'Axel'})
      myFunction({})
      myFunction()
    })
  })
})
