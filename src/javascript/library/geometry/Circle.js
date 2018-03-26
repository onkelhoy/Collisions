export default class Circle {
  constructor (x, y, r) {
    this.x = x
    this.y = y
    this.r = r
  }

  render (ctx) {
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
    ctx.stroke()
  }
}