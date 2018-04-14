import log from './pretty-log'

// TODO: refactor into class syntax
function Pixel(x = 0, y = 0) {
  this.x = x
  this.y = y
  this._id = Math.random()
}

// TODO: fit into class syntax
Pixel.prototype.distance = function(p) {
  const {pow, sqrt} = Math
  return sqrt(pow(this.x - p.x, 2) + pow(this.y - p.y, 2))
}

// TODO: fit into class syntax
Pixel.prototype.midpoint = function(p) {
  const x = (this.x + p.x) / 2.0
  const y = (this.y + p.y) / 2.0
  return Pixel.fromObj({x, y})
}

// TODO: fit into class syntax
Pixel.prototype.toString = function() {
  return `${this.id}: (x: ${this.x}, y: ${this.y})`
}

// TODO: fit into class syntax
Pixel.fromObj = function(obj) {
  const p = new Pixel(obj.x, obj.y)
  return p
}

Object.defineProperty(Pixel.prototype, 'id', {
  get() {
    return this._id
  },
  set(val) {
    this._id = val
  },
})

// TODO: create a Voxel class extending Pixel class
function Voxel(x, y, z = 0) {
  Pixel.call(this, x, y)
  this.z = z
}

Voxel.prototype = Object.create(Pixel.prototype)

// TODO: fit into class syntax
Voxel.prototype.distance = function(v) {
  const deltaX = this.x - v.x
  const deltaY = this.y - v.y
  const deltaZ = this.z - v.z

  const {pow, sqrt} = Math
  return sqrt(pow(deltaX, 2) + pow(deltaY, 2) + pow(deltaZ, 2))
}

// TODO: fit into class syntax
Voxel.prototype.midpoint = function(v) {
  const midX = (this.x + v.x) / 2.0
  const midY = (this.y + v.y) / 2.0
  const midZ = (this.z + v.z) / 2.0
  return Voxel.fromObj({x: midX, y: midY, z: midZ})
}

Voxel.prototype.toString = function() {
  return `${this.id}: (x: ${this.x}, y: ${this.y}, z: ${this.z})`
}

// TODO: fit into class syntax
Voxel.fromObj = function(obj) {
  return new Voxel(obj.x, obj.y, obj.z)
}

// ----- Quiz Functions ----

log()
// testDistance(),
// testMidpoint(),
// testDistanceVoxel(),
// testMidpointVoxel(),

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

// SOLUTION BELOW THIS LINE
// No peeking!

class PixelSOLUTION {
  constructor(x = 0, y = 0) {
    this.x = x
    this.y = y
    this._id = Math.random()
  }
  get id() {
    return this._id
  }
  set id(val) {
    this._id = val
  }
  distance(p) {
    const {pow, sqrt} = Math
    return sqrt(pow(this.x - p.x, 2) + pow(this.y - p.y, 2))
  }
  midpoint(p) {
    const x = (this.x + p.x) / 2.0
    const y = (this.y + p.y) / 2.0
    return PixelSOLUTION.fromObj({x, y})
  }
  toString() {
    return `${this.id}: (x: ${this.x}, y: ${this.y})`
  }
  static fromObj(obj) {
    const p = new PixelSOLUTION(obj.x, obj.y)
    return p
  }
}

class VoxelSOLUTION extends PixelSOLUTION {
  constructor(x, y, z = 0) {
    super(x, y)
    this.z = z
  }
  distance(v) {
    const deltaX = this.x - v.x
    const deltaY = this.y - v.y
    const deltaZ = this.z - v.z
    const {pow, sqrt} = Math
    return sqrt(pow(deltaX, 2) + pow(deltaY, 2) + pow(deltaZ, 2))
  }
  midpoint(v) {
    const midX = (this.x + v.x) / 2.0
    const midY = (this.y + v.y) / 2.0
    const midZ = (this.z + v.z) / 2.0
    return VoxelSOLUTION.fromObj({x: midX, y: midY, z: midZ})
  }
  toString() {
    return `${this.id}: (x: ${this.x}, y: ${this.y}, z: ${this.z})`
  }
  static fromObj(obj) {
    return new VoxelSOLUTION(obj.x, obj.y, obj.z)
  }
}

log()
// testDistanceSOLUTION(),
// testMidpointSOLUTION(),
// testDistanceVoxelSOLUTION(),
// testMidpointVoxelSOLUTION(),

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

/* eslint func-names:0*/
