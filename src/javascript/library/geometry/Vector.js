export default class Vector {
  constructor (dims = []) {
    this.dimensions = dims
  }

  get mag () { // total, value, index
    return Math.sqrt(this.reduce((t, v, i) => t + v*v))
  }

  get size () {
    return this.dimensions.length
  }

  subtract (v) {
    if (v.size !== this.size) throw Error('Not the same dimensions')
    let vector = new Vector()
    this.map((val, i) => {
      vector.dimensions[i] = val - v.dimensions[i]
    })

    return vector
  }
  multiply (n) {
    let vector = new Vector()
    this.map((val, i) => {
      vector.dimensions[i] = val * n
    })

    return vector
  }
  

  map (fn) {
    for (let i = 0; i < this.size; i++) {
      let v = fn(this.dimensions[i], i)
      if (v !== null && v !== undefined) this.dimensions[i] = v
    }
  }
  reduce (fn) {
    let total = 0
    let index = 0
    for (let d of this.dimensions) {
      total = fn(total, d, index++)
    }
    return total
  }
  get copy () {
    return new Vector(this.dimensions.slice())
  }

  distance (v) {
    const norm = this.subtract(v)
    return norm.mag
  }
  dot (v) {
    if (v.size !== this.size) throw Error('Not the same dimensions')
    return this.reduce((total, value, index) => total + value * v.dimensions[index])
  }

  normalize () {
    let vector = this.copy
    const norm = vector.mag

    return vector.map((v, i) => v / norm )
  }
  projection (v) {
    const numerator = this.dot(v)
    const denominator = this.dot(this)

    const c = numerator / denominator
    return this.multiply(c)
  }
}