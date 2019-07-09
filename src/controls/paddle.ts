import Paddle from '@/game/paddle'
import Ball from '@/game/ball'
import { FIELD_WIDTH } from '@/game/field'
import { PADDLE_WIDTH } from '@/physics/paddle'
import { MIN_X as MIN_BALL_X, MAX_X as MAX_BALL_X } from '@/physics/ball'

const PADDLE_CENTER = PADDLE_WIDTH / 2

const MIN_PADDLE_X = 0
const MAX_PADDLE_X = FIELD_WIDTH - PADDLE_WIDTH

export default class PaddleControls {
  private paddle: Paddle

  constructor (paddle: Paddle) {
    this.paddle = paddle
  }

  // ------------------------------------------------------------
  // Move paddle
  // ------------------------------------------------------------

  move (x: number) {
    const diff = this.updatePaddlePosition(x)
    this.updateBallPositions(diff)
  }

  private updatePaddlePosition (x: number) {
    const rectangle = this.paddle.physics.rectangle
    const topLeft = rectangle.corners.topLeft

    const newX = Math.min(MAX_PADDLE_X, Math.max(MIN_PADDLE_X, x - PADDLE_CENTER))
    const diff = newX - topLeft.x

    rectangle.moveTo(newX, topLeft.y)
    return diff
  }

  private updateBallPositions (diff: number) {
    for (let ball of this.paddle.balls) {
      this.updateBallPosition(ball, diff)
    }
  }

  private updateBallPosition (ball: Ball, diff: number) {
    const oldX = ball.physics.circle.center.x
    const newX = Math.min(MAX_BALL_X, Math.max(MIN_BALL_X, oldX + diff))
    ball.physics.circle.center.x = newX
  }

  // ------------------------------------------------------------
  // Launch balls
  // ------------------------------------------------------------

  launch () {
    if (this.paddle.balls.length === 0) {
      return
    }

    for (let ball of this.paddle.balls) {
      ball.physics.updateVelocityBasedOnPaddlePosition(this.paddle)
    }
    this.paddle.balls = []
  }
}
