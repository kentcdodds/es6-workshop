const wm = new WeakMap();

// TODO: The following throws error
// discuss potential workarounds
// or discuss why this won't work
wm.set(5, 6); // throws error

// we will store some Pythogorean triplets
// (a, b, c) form a triplet like this, if a^2 + b^2 = c^2
// (3, 4, 5) is an example of such triplet
const side1 = 5;
const side2 = 12;
/**
 * We can use any data structure for key
 * as long as it's weakly iterable
 * But we are not concerned about the order
 * of the first two elements in triplet
 * Just that they be there
 * TODO: Use a different data structure than native JS object
 * as key to the weakmap
 * Hint: It's either Array, or Set or Map
 */
const s = { side1, side2 }
wm.set(s, 13);

console.log(
  // wm.get(s)
)

/**
 * Refactor the earlier Pixel class
 * to ensure that private variables
 * cannot be accessed directly
 */
const data = new WeakMap();
class Pixel {
  constructor(x=0, y=0) {
    // TODO: Refactor the following with weakmap
    // to make sure an instance of this class
    // cannot directly access _x or _y
    // p = new Pixel(4, 5)
    // p._x should be undefined af
    this._x = x;
    this._y = y;
  }
}

class Voxel extends Pixel {
  constructor(x, y, z) {
    // TODO: Refactor as above
    // keep in mind that
    // now you have to store three entries
    // u = new Voxel(7, 8, 9);
    super(x, y);
    this._z = z;
  }
}
