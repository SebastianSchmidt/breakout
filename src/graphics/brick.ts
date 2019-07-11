import color from 'tinycolor2'
import Brick from '@/game/brick'

const BORDER_SIZE = 3

const COLOR = '#00796B'
const BORDER_TOP_COLOR = color(COLOR).lighten().toHex8String()
const BORDER_BOTTOM_COLOR = color(COLOR).darken().toHex8String()

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

    // Border bottom:
    layer.fillStyle = BORDER_BOTTOM_COLOR
    layer.fillRect(x, y, width, height)

    // Center:
    layer.fillStyle = COLOR
    layer.fillRect(x + BORDER_SIZE, y + BORDER_SIZE, width - BORDER_SIZE * 2, height - BORDER_SIZE * 2)

    // Border top:
    layer.fillStyle = BORDER_TOP_COLOR
    layer.beginPath()
    layer.moveTo(x, y)
    layer.lineTo(x + width, y)
    layer.lineTo(x + width - BORDER_SIZE, y + BORDER_SIZE)
    layer.lineTo(x + BORDER_SIZE, y + BORDER_SIZE)
    layer.lineTo(x + BORDER_SIZE, y + height - BORDER_SIZE)
    layer.lineTo(x, y + height)
    layer.lineTo(x, y)
    layer.fill()
  }

  private clear (layer: CanvasRenderingContext2D) {
    const rectangle = this.brick.physics.rectangle
    const { x, y } = rectangle.corners.topLeft
    const { width, height } = rectangle

    layer.clearRect(x, y, width, height)
  }
}
