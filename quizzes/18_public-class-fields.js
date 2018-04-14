import log from './pretty-log'

function basicExample() {
  // can you find the bug in this code?
  // how could we fix it?
  class Greeter {
    constructor(name, preference) {
      this.name = name
      this.preference = preference
    }
    greet(otherName) {
      return `Hello ${otherName}, my name is ${this.name}`
    }
    askAboutWeather() {
      const antiPreference = this.preference === 'cool' ? 'warm' : 'cool'
      return `Is it ${antiPreference} outside? I prefer it ${this.preference}.`
    }
    getInterestingCallbacks() {
      return {
        greet: this.greet,
        askAboutWeather: this.askAboutWeather,
      }
    }
  }
  const greeter = new Greeter('Ronald', 'cool')
  const interestingCallbacks = greeter.getInterestingCallbacks()
  return {
    greeting: interestingCallbacks.greet('Jane'),
    weatherQuestion: interestingCallbacks.askAboutWeather(),
  }
}
// log(basicExample())

// SOLUTIONS BELOW!

function basicExampleSOLUTION() {
  class Greeter {
    constructor(name, preference) {
      this.name = name
      this.preference = preference
    }
    greet = otherName => {
      return `Hello ${otherName}, my name is ${this.name}`
    }
    askAboutWeather = () => {
      const antiPreference = this.preference === 'cool' ? 'warm' : 'cool'
      return `Is it ${antiPreference} outside? I prefer it ${this.preference}.`
    }
    getInterestingCallbacks() {
      return {
        greet: this.greet,
        askAboutWeather: this.askAboutWeather,
      }
    }
  }
  const greeter = new Greeter('Ronald', 'cool')
  const interestingCallbacks = greeter.getInterestingCallbacks()
  return {
    greeting: interestingCallbacks.greet('Jane'),
    weatherQuestion: interestingCallbacks.askAboutWeather(),
  }
}
log(basicExampleSOLUTION())
