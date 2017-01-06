console.log(
  quiz1()
)

function quiz1() {
  let x = 100
  return x
}

function quiz2() {
  if (3 > 1) {
    const x = 34
  }
  return x
}

function quiz3() {
  { // this is called a "block" ✨
    const x = 42
  }
  return x
}

function quiz4() {
  let x = 33
  {
    const x = 123
  }
  return x
}

function quiz5() {
  {
    let x
    {
      x = 55
    }
    // let x = 45
  }
  return x
}
