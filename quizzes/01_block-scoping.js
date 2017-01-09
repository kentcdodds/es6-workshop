console.log(
  // basic(),
  // ifBlock(),
  // block(),
  // scoped(),
  // veryScoped(),
  // semiPractical(),
)


function basic() {
  // what is returned?
  let x = 100
  const y = 200
  return {x: x, y: y}
}

function ifBlock() {
  // what is returned?
  if (3 > 1) {
    const x = 34
    let y = 43
  }
  return {x: x, y: y}
}

function block() {
  // what is returned?
  { // this is called a "block" ✨
    const x = 42
    let y = 24
  }
  return {x: x, y: y}
}

function scoped() {
  // what is returned?
  let x = 33
  {
    const x = 123
  }
  return x
}

function veryScoped() {
  // what is returned?
  let x = 23
  {
    let x
    {
      x = 55
    }
    // let x = 45 // if this weren't commented out, this file would fail parsing
  }
  return x
}

function semiPractical() {
  // what is returned from this function?
  const myThings = ['thing1', 'thing2', 'red fish', 'blue fish']
  const callbacks = []
  for (var i = 0; i < myThings.length; i++) {
    callbacks.push(function thingGetter() {
      return myThings[i]
    })
  }
  return callbacks.map(callback => callback())
}







// SOLUTIONS ARE BELOW THIS LINE!












function semiPracticalSOLUTION() {
  const myThings = ['thing1', 'thing2', 'red fish', 'blue fish']
  const callbacks = []
  for (let i = 0; i < myThings.length; i++) {
    callbacks.push(function thingGetter() {
      return myThings[i]
    })
  }
  return callbacks.map(callback => callback())
}



/*
  eslint
  prefer-const:0,
  no-undef:0,
  no-shadow:0,
  no-lone-blocks:0,
  object-shorthand:0,
  vars-on-top:0,
  no-var:0,
  no-loop-func:0
*/
