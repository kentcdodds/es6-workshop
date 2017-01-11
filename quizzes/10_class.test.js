// TODO: refactor into class syntax
function Pixel(x = 0, y = 0) {
  this._x = x
  this._y = y

  // TODO: refactor with getters and setters
  this.getX = function() {
    return this._x
  }
  this.setX = function(x1 = 0) {
    this._x = x1
  }
  this.getY = function() {
    return this._y
  }
  this.setY = function(y1 = 0) {
    this._y = y1
  }
}

// TODO: fit into class syntax
Pixel.fromObj = function(obj) {
  // create a pixel object and return it
  // using the obj passed into this function
  // This obj would be of the form {x: 5, y: 7}
  // TODO: Implement this function
  const p = new Pixel(obj.x, obj.y)
  return p
}

// TODO: fit into class syntax
Pixel.prototype.distance = function(p) {
  // p is a different pixel
  // p also has values for _x and _y
  const {pow, sqrt} = Math
  const _distance = sqrt(pow((this.getX() - p.getX()), 2) + pow((this.getY() - p.getY()), 2))

  return _distance
}

// TODO: fit into class syntax
Pixel.prototype.midpoint = function(p) {
  // p is another pixel point
  // this function should compute midpoint between two pixel points
  // P(x1, y1) and P(x2, y2) has midpoint P(x, y),
  // where x = (x1 + x2) / 2 and y = (y1 + y2)/2
  const x = (this.getX() + p.getX()) / 2.0
  const y = (this.getY() + p.getY()) / 2.0

  return Pixel.fromObj({x, y})

}

Pixel.prototype.toString = function() {
  return `(x: ${this.getX()}, y: ${this.getY()})`
}


// TODO: create a Voxel class extending Pixel class
// A voxel has a third field, a z coordinate
// the Voxel class should have the instance methods: distance and midpoint
// and the static method: fromObj()
function Voxel(x, y, z) {
  this._x = x
  this._y = y
  this._z = z

  // TODO: refactor with getters and setters
  this.getX = function() {
    return this._x
  }
  this.setX = function(x1 = 0) {
    this._x = x1
  }
  this.getY = function() {
    return this._y
  }
  this.setY = function(y1 = 0) {
    this._y = y1
  }
  this.getZ = function() {
    return this._z
  }
  this.setZ = function(z1) {
    this._z = z1
  }
}

// TODO: fit into class syntax
Voxel.prototype.distance = function(v) {
  const deltaX = this.getX() - v.getX()
  const deltaY = this.getY() - v.getY()
  const deltaZ = this.getZ() - v.getZ()

  const {pow, sqrt} = Math
  return sqrt(pow(deltaX, 2) + pow(deltaY, 2) + pow(deltaZ, 2))
}

// TODO: fit into class syntax
Voxel.prototype.midpoint = function(v) {
  const midX = (this.getX() + v.getX()) / 2.0
  const midY = (this.getY() + v.getY()) / 2.0
  const midZ = (this.getZ() + v.getZ()) / 2.0

  return Voxel.fromObj({x: midX, y: midY, z: midZ})
}

Voxel.prototype.toString = function() {
  return `(x: ${this.getX()}, y: ${this.getY()}, z: ${this.getZ()})`
}

// TODO: fit into class syntax
Voxel.fromObj = function(obj) {
  return new Voxel(obj.x, obj.y, obj.z)
}


// ----- Quiz Functions ----

function testDistance() {
  const p = new Pixel(5, 12)
  const q = Pixel.fromObj({x: 0, y: 0})
  return p.distance(q)
}

function testMidpoint() {
  const p = new Pixel(7, 24)
  const q = Pixel.fromObj({x: 0, y: 0})
  return p.midpoint(q).toString()
}

function testDistanceVoxel() {
  const v = new Voxel(5, 6, 7)
  const w = Voxel.fromObj({x: 2, y: 3.4, z: 7.9})

  return v.distance(w)
}

function testMidpointVoxel() {
  const v = new Voxel(5, 6, 7)
  const w = Voxel.fromObj({x: 2, y: 3.4, z: 7.9})

  return v.midpoint(w).toString()
}


console.log(
  // testDistance(),
  // testMidpoint(),
  // testMidpointVoxel(),
  // testDistanceVoxel()
)










// SOLUTION BELOW THIS LINE
// No peeking!
















class PixelSOLUTION {
  constructor(x = 0, y = 0) {
    this._x = x
    this._y = y
  }
  get X() {
    return this._x
  }
  set X(x) {
    this._x = x
  }
  get Y() {
    return this._y
  }
  set Y(y) {
    this._y = y
  }
  distance(p) {
    const {pow, sqrt} = Math
    const _distance = sqrt(pow((this.X - p.X), 2) + pow((this.Y - p.Y), 2))
    return _distance
  }
  midpoint(p) {
    return PixelSOLUTION.fromObj({
      x: (this.X + p.X) / 2.0,
      y: (this.Y + p.Y) / 2.0,
    })
  }
  toString() {
    return `(x: ${this.X}, y: ${this.Y})`
  }
  static fromObj({x, y}) {
    return new PixelSOLUTION(x, y)
  }
}

class VoxelSOLUTION extends PixelSOLUTION {
  constructor(x = 0, y = 0, z = 0) {
    super(x, y)
    this._z = z
  }
  get Z() {
    return this._z
  }
  set Z(z) {
    this._z = z
  }
  midpoint(v) {
    const midX = (this.X + v.X) / 2.0
    const midY = (this.Y + v.Y) / 2.0
    const midZ = (this.Z + v.Z) / 2.0

    return VoxelSOLUTION.fromObj({x: midX, y: midY, z: midZ})
  }
  static fromObj({x, y, z}) {
    return new VoxelSOLUTION(x, y, z)
  }
  distance(v) {
    const deltaX = this.X - v.X
    const deltaY = this.Y - v.Y
    const deltaZ = this.Z - v.Z

    const {pow, sqrt} = Math
    return sqrt(pow(deltaX, 2) + pow(deltaY, 2) + pow(deltaZ, 2))
  }
  toString() {
    return `(x: ${this.X}, y: ${this.Y}, z: ${this.Z})`
  }
}


// Solution Quiz functions

function testDistanceSOLUTION() {
  const p = new PixelSOLUTION(5, 12)
  const q = PixelSOLUTION.fromObj({x: 0, y: 0})
  return p.distance(q)
}

function testMidpointSOLUTION() {
  const p = new PixelSOLUTION(7, 24)
  const q = PixelSOLUTION.fromObj({x: 0, y: 0})
  return p.midpoint(q).toString()
}

function testDistanceVoxelSOLUTION() {
  const v = new VoxelSOLUTION(5, 6, 7)
  const w = VoxelSOLUTION.fromObj({x: 2, y: 3.4, z: 7.9})

  return v.distance(w)
}

function testMidpointVoxelSOLUTION() {
  const v = new VoxelSOLUTION(5, 6, 7)
  const w = VoxelSOLUTION.fromObj({x: 2, y: 3.4, z: 7.9})

  return v.midpoint(w).toString()
}


console.log(
  // testDistanceSOLUTION(),
  // testMidpointSOLUTION(),
  // testMidpointVoxelSOLUTION(),
  // testDistanceVoxelSOLUTION()
)




/* eslint func-names:0*/
