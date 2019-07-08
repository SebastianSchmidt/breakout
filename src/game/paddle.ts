import Rectangle from '../physics/objects/rectangle'
import Point from '../physics/objects/point'
import { BRICK_HEIGHT } from './brick'
import { FIELD_WIDTH, FIELD_HEIGHT } from './field'
import Ball, { RADIUS } from './ball'

export const PADDLE_WIDTH = 60
export const PADDLE_HEIGHT = BRICK_HEIGHT

const PADDLE_CENTER = PADDLE_WIDTH / 2

const MIN_PADDLE_X = 0
const MAX_PADDLE_X = FIELD_WIDTH - PADDLE_WIDTH

const MIN_BALL_X = RADIUS
const MAX_BALL_X = FIELD_WIDTH - RADIUS

export default class Paddle {
  rectangle: Rectangle
  balls: Ball[] = []

  constructor () {
    const x = (FIELD_WIDTH / 2) - PADDLE_CENTER
    const y = FIELD_HEIGHT - (PADDLE_HEIGHT * 2)
    this.rectangle = new Rectangle(new Point(x, y), PADDLE_WIDTH, PADDLE_HEIGHT)
  }

  move (x: number) {
    const diff = this.updatePaddlePosition(x)
    this.updateBallPositions(diff)
  }

  stick (ball: Ball, random: boolean = false) {
    this.balls.push(ball)

    const { topLeft, topRight } = this.rectangle.corners

    if (random) {
      ball.circle.center.x = Math.random() * (topRight.x - topLeft.x) + topLeft.x
    } else {
      const oldX = ball.circle.center.x
      ball.circle.center.x = Math.min(topRight.x, Math.max(topLeft.x, oldX))
    }

    ball.circle.center.y = this.rectangle.edges.top.start.y - RADIUS

    ball.velocity[0] = 0
    ball.velocity[1] = 0
  }

  launch () {
    if (this.balls.length === 0) {
      return
    }

    for (let ball of this.balls) {
      ball.updateVelocityBasedOnPaddlePosition(this)
    }
    this.balls = []
  }

  private updatePaddlePosition (x: number) {
    const newX = Math.min(MAX_PADDLE_X, Math.max(MIN_PADDLE_X, x - PADDLE_CENTER))
    const diff = newX - this.rectangle.corners.topLeft.x
    this.rectangle.moveTo(newX, this.rectangle.corners.topLeft.y)
    return diff
  }

  private updateBallPositions (diff: number) {
    for (let ball of this.balls) {
      this.updateBallPosition(ball, diff)
    }
  }

  private updateBallPosition (ball: Ball, diff: number) {
    const oldX = ball.circle.center.x
    const newX = Math.min(MAX_BALL_X, Math.max(MIN_BALL_X, oldX + diff))
    ball.circle.center.x = newX
  }
}
