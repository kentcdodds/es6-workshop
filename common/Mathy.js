export {sqrt, square, diag}

function sqrt(num) {
  return Math.sqrt(num)
}

function square(num) {
  return num * num
}

function diag(x, y) {
  return sqrt(square(x) + square(y))
}
