import Ball from './ball'
import Physics from '@/physics/paddle'
import Graphics from '@/graphics/paddle'
import Controls from '@/controls/paddle'
import { RADIUS } from '@/physics/ball'

export default class Paddle {
  physics: Physics
  graphics: Graphics
  controls: Controls

  balls: Ball[] = []

  constructor () {
    this.physics = new Physics()
    this.graphics = new Graphics(this)
    this.controls = new Controls(this)
  }

  stick (ball: Ball, random: boolean = false) {
    this.balls.push(ball)

    if (random) {
      this.stickBallRandomly(ball)
    } else {
      this.stickBallBasedOnPosition(ball)
    }

    ball.physics.circle.center.y = this.physics.rectangle.edges.top.start.y - RADIUS

    ball.physics.velocity[0] = 0
    ball.physics.velocity[1] = 0
  }

  private stickBallRandomly (ball: Ball) {
    const x = this.physics.rectangle.corners.topLeft.x
    const width = this.physics.rectangle.width

    let minX
    let maxX

    if (Math.random() >= 0.5) {
      // Linker Bereich auf dem Schläger:
      minX = x + (1 / 12 * width)
      maxX = x + (2 / 6 * width)
    } else {
      // Rechter Bereich auf dem Schläger:
      minX = x + width - (2 / 6 * width)
      maxX = x + width - (1 / 12 * width)
    }

    ball.physics.circle.center.x = Math.random() * (maxX - minX) + minX
  }

  private stickBallBasedOnPosition (ball: Ball) {
    const { topLeft, topRight } = this.physics.rectangle.corners
    const oldX = ball.physics.circle.center.x
    ball.physics.circle.center.x = Math.min(topRight.x, Math.max(topLeft.x, oldX))
  }
}
