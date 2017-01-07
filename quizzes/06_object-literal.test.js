console.log(
  // getRGB();
);

function getRGB() {
  // refactor with shortening the object literal
  // and removing reptition
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return {
    red: red,
    green: green,
    blue: blue,
  }
}
