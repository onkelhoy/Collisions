export default class Event {
  constructor (canvas) {
    this.mouse = {
      x: 0,
      y: 0
    }
    canvas.onmousemove = this.mousemove.bind(this)
  }

  mousemove (e) {
    this.mouse.x = e.clientX
    this.mouse.y = e.clientY
  }
}