import Brick from '@/game/brick'

export default class BrickGraphics {
  private brick: Brick
  private drawn: boolean

  constructor (brick: Brick) {
    this.brick = brick
    this.drawn = false
  }

  // Annahme: Steine werden nicht bewegt und überschneiden sich nicht.
  render (layer: CanvasRenderingContext2D) {
    if (!this.brick.destroyed && !this.drawn) {
      this.draw(layer)
      this.drawn = true
    } else if (this.brick.destroyed && this.drawn) {
      this.clear(layer)
      this.drawn = false
    }
  }

  private draw (layer: CanvasRenderingContext2D) {
    const rectangle = this.brick.physics.rectangle
    const { x, y } = rectangle.corners.topLeft
    const { width, height } = rectangle

    const gradient = layer.createLinearGradient(x, y, x + width, y + height)
    gradient.addColorStop(0, '#004D40')
    gradient.addColorStop(1, '#4DB6AC')
    layer.fillStyle = gradient

    layer.fillRect(x, y, width, height)
  }

  private clear (layer: CanvasRenderingContext2D) {
    const rectangle = this.brick.physics.rectangle
    const { x, y } = rectangle.corners.topLeft
    const { width, height } = rectangle

    layer.clearRect(x, y, width, height)
  }
}
