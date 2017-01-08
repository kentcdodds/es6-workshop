const p = new Pixel(5, 12);
const q = Pixel.fromObj({x: 0, y: 0});

console.log(
  // p.distance(q)
  // q.distance(p)
  // p.midpoint(q)
  // q.midpoint(p)
  //
)

const v = new Voxel(5, 6, 7);
const w = Voxel.fromObj({x: 2, y: 3.4, z: 7.9});

console.log(
  // v.distance(w)
  // w.midpoint(v)
)


// TODO: refactor into class syntax
function Pixel(x=0, y=0) {
  this._x = x;
  this._y = y;

  // TODO: refactor with getter and setters
  getX: function() {
    return this._x;
  }
  setX: function(x=0) {
    this._x = x;
  }
  getY: function() {
    return this._y;
  }
  setY: function(y) {
    this._y = y;
  }
}

// TODO: fit into class syntax
Pixel.prototype.distance = function(p) {
  // p is a different pixel
  // p also has values for _x and _y
  const { pow, sqrt } = Math;
  const _distance = sqrt(pow((this.getX() - p.getX()), 2) + pow((this.getY() - p.getY()), 2))

  return _distance;
}

// TODO: fit into class syntax
Pixel.prototype.midpoint = function(p) {
  // p is another pixel point
  // this function should compute midpoint between two pixel points
  // P(x1, y1) and P(x2, y2) has midpoint P(x, y),
  // where x = (x1 + x2) / 2 and y = (y1 + y2)/2
  // TODO: Implement this function
}

// TODO: fit into class syntax
Pixel.fromObj = function(obj) {
  // create a pixel object and return it
  // using the obj passed into this function
  // This obj would be of the form {x: 5, y: 7}
  // TODO: Implement this function
}


// TODO: create a Voxel class extending Pixel class
// A voxel has a third field, a z coordinate
// the Voxel class should have the instance methods: distance and midpoint
// and the static method: fromObj()
