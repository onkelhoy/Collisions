export default class Rectangle {
  constructor (x, y, w, h) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h 
  }

  render (ctx, color) {
    ctx.lineWidth = 1
    ctx.strokeStyle = 'black'

    ctx.rect(this.x, this.y, this.w, this.h)
    if (color) {
      ctx.lineWidth = 4
      ctx.strokeStyle = color
    } 
    ctx.stroke()
  }
}