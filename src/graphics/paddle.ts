import Paddle from '@/game/paddle'

export default class PaddleGraphics {
  private paddle: Paddle

  constructor (paddle: Paddle) {
    this.paddle = paddle
  }

  render (layer: CanvasRenderingContext2D) {
    const rectangle = this.paddle.physics.rectangle
    const { x, y } = rectangle.corners.topLeft
    const { width, height } = rectangle

    layer.fillStyle = '#424242'
    layer.fillRect(x, y, width, height)
  }
}
