import Ball from '@/game/ball'

export default class BallGraphics {
  private ball: Ball

  constructor (ball: Ball) {
    this.ball = ball
  }

  render (layer: CanvasRenderingContext2D) {
    const { center, radius } = this.ball.physics.circle

    layer.fillStyle = '#000000'
    layer.beginPath()
    layer.arc(
      center.x,
      center.y,
      radius,
      0,
      2 * Math.PI
    )
    layer.fill()
  }
}
