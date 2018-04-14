import log from './pretty-log'

function shorthandPropertyNames() {
  // refactor with shortening the object literal
  // and removing reptition
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)

  return {
    red: red,
    green: green,
    blue: blue,
  }
}
// log(shorthandPropertyNames())

function proto() {
  // refactor using __proto__ :)
  const parent = {
    parentProp: 'parent',
    overriddenProp: 'parent overridden?',
  }
  const child = Object.create(parent, {
    childProp: {
      value: 'child',
      configurable: true,
      enumerable: true,
      writable: true,
    },
    overriddenProp: {
      value: 'child overridden!',
      configurable: true,
      enumerable: true,
      writable: true,
    },
  })
  // getAllPropsInObject returns an object with
  // `inheritedProps` and `ownProps` objects.
  return getAllPropsInObject(child)
}
// log(proto())

function methodShorthand() {
  // refactor using method shorthand
  const greeter = {
    sayHi: function sayHi(name) {
      return `Hi ${name}`
    },
  }
  return greeter.sayHi('Nancy')
}
// log(methodShorthand())

function methodSuperCalls() {
  // refactor fileTaxes on the child using method shorthand and use `super` instead
  const parent = {
    doFilingOfTaxes() {
      return 'taxes filed'
    },
    fileTaxes: function fileTaxes() {
      return this.doFilingOfTaxes()
    },
  }
  const child = {
    __proto__: parent,
    taxesFiledCount: 0,
    fileTaxes: function fileTaxes() {
      this.taxesFiledCount++
      return Object.getPrototypeOf(this).fileTaxes.call(this)
    },
  }
  const taxesResult = child.fileTaxes()
  return {taxesResult, taxesFiledCount: child.taxesFiledCount}
}
// log(methodSuperCalls())

function computedPropertyNames() {
  function getCar(make, model) {
    const car = {}
    car[make.toLowerCase()] = model
    return car
  }
  return getCar('Hyundai', 'Accent')
}
// log(computedPropertyNames())

// helpers

function getAllPropsInObject(obj) {
  const allPropsObj = {ownProps: {}, inheritedProps: {}}
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      allPropsObj.ownProps[prop] = obj[prop]
    } else {
      allPropsObj.inheritedProps[prop] = obj[prop]
    }
  }
  return allPropsObj
}

/*







SOLUTIONS ARE BELOW









 */

function shorthandPropertyNamesSOLUTION() {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)

  return {red, green, blue}
}
// log(shorthandPropertyNamesSOLUTION())

function protoSOLUTION() {
  const parent = {
    parentProp: 'parent',
    overriddenProp: 'parent overridden?',
  }
  const child = {
    __proto__: parent,
    childProp: 'child',
    overriddenProp: 'child overridden!',
  }
  return getAllPropsInObject(child)
}
// log(protoSOLUTION())

function methodShorthandSOLUTION() {
  const greeter = {
    sayHi(name) {
      return `Hi ${name}`
    },
  }
  return greeter.sayHi('Nancy')
}
// log(methodShorthandSOLUTION())

function methodSuperCallsSOLUTION() {
  const parent = {
    doFilingOfTaxes() {
      return 'taxes filed'
    },
    fileTaxes: function fileTaxes() {
      return this.doFilingOfTaxes()
    },
  }
  const child = {
    __proto__: parent,
    taxesFiledCount: 0,
    fileTaxes() {
      this.taxesFiledCount++
      return super.fileTaxes()
    },
  }
  const taxesResult = child.fileTaxes()
  return {taxesResult, taxesFiledCount: child.taxesFiledCount}
}
// log(methodSuperCallsSOLUTION())

function computedPropertyNamesSOLUTION() {
  function getCar(make, model) {
    return {
      [make.toLowerCase()]: model,
    }
  }
  return getCar('Hyundai', 'Accent')
}
// log(computedPropertyNamesSOLUTION())

/* eslint object-shorthand:0 */
