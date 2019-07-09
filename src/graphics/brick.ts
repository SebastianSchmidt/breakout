import Brick from '@/game/brick'

export default class BrickGraphics {
  private brick: Brick

  constructor (brick: Brick) {
    this.brick = brick
  }

  draw (layer: CanvasRenderingContext2D) {
    const rectangle = this.brick.physics.rectangle
    const { x, y } = rectangle.corners.topLeft
    const { width, height } = rectangle

    const gradient = layer.createLinearGradient(x, y, x + width, y + height)
    gradient.addColorStop(0, '#004D40')
    gradient.addColorStop(1, '#4DB6AC')
    layer.fillStyle = gradient

    layer.fillRect(x, y, width, height)
  }
}
