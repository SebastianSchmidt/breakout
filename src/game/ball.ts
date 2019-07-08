import Circle from '../physics/objects/circle'
import Point from '../physics/objects/point'
import Line from '../physics/objects/line'
import Brick from './brick'
import Paddle from './paddle'
import rectangleCollision, { Type } from '../physics/collision-detection/circle-rectangle'
import { FIELD_WIDTH, FIELD_HEIGHT } from './field'

export const RADIUS = 7

const MIN_X = RADIUS
const MAX_X = FIELD_WIDTH - RADIUS
const MIN_Y = RADIUS
const MAX_Y = FIELD_HEIGHT - RADIUS

const BALL_SPEED = 4

// 60 Grad
const MAX_ANGLE = Math.PI / 3

export default class Ball {
  circle: Circle
  velocity: [number, number]
  dropped: boolean

  constructor (position: Point) {
    this.circle = new Circle(position, RADIUS)
    this.velocity = [0, 0]
    this.dropped = false
  }

  move () {
    this.circle.center.x += this.velocity[0]
    this.circle.center.y += this.velocity[1]
  }

  checkBoundsCollision (width: number, height: number) {
    const { center, radius } = this.circle

    if (center.y - radius <= 0) {
      this.collisionFromBelow(0)
    }

    if (center.x + radius >= width) {
      this.collisionFromLeft(width)
    }

    if (center.x - radius <= 0) {
      this.collisionFromRight(0)
    }

    // Wenn der Ball unten aus dem Bildschirm gefallen ist:
    if (center.y - radius >= height) {
      this.dropped = true
    }
  }

  checkBrickCollision (brick: Brick) {
    const collisions = rectangleCollision(this.circle, brick.rectangle)

    if (!collisions) {
      return
    }

    brick.hitByBall()

    const { top, right, bottom, left } = brick.rectangle.edges

    if (collisions.includes(Type.Top)) {
      this.collisionFromAbove(top.start.y)
    }

    if (collisions.includes(Type.Right)) {
      this.collisionFromRight(right.start.x)
    }

    if (collisions.includes(Type.Bottom)) {
      this.collisionFromBelow(bottom.start.y)
    }

    if (collisions.includes(Type.Left)) {
      this.collisionFromLeft(left.start.x)
    }
  }

  checkPaddleCollision (paddle: Paddle) {
    if (paddle.balls.includes(this)) {
      return
    }

    const collisions = rectangleCollision(this.circle, paddle.rectangle)

    if (!collisions) {
      return
    }

    const { right, bottom, left } = paddle.rectangle.edges

    if (collisions.includes(Type.Top)) {
      this.paddleCollisionFromAbove(paddle)
    } else if (collisions.includes(Type.Right)) {
      this.collisionFromRight(right.start.x)
    } else if (collisions.includes(Type.Left)) {
      this.collisionFromLeft(left.start.x)
    } else if (collisions.includes(Type.Bottom)) {
      this.collisionFromBelow(bottom.start.y)
    }
  }

  updateVelocityBasedOnPaddlePosition (paddle: Paddle) {
    const x = paddle.rectangle.edges.top.start.x
    const length = paddle.rectangle.width
    const center = length / 2

    const intersection = Math.max(x, Math.min(x + length, this.circle.center.x))
    const relativeIntersection = x + center - intersection
    const normalizedIntersection = relativeIntersection / center

    const bounceAngle = normalizedIntersection * MAX_ANGLE
    this.velocity[0] = -Math.sin(bounceAngle) * BALL_SPEED
    this.velocity[1] = -Math.cos(bounceAngle) * BALL_SPEED
  }

  private paddleCollisionFromAbove (paddle: Paddle) {
    this.updateVelocityBasedOnPaddlePosition(paddle)
    this.collisionFromAbove(paddle.rectangle.edges.top.start.y)
  }

  private collisionFromAbove (maxY: number) {
    this.circle.center.y = Math.max(maxY - this.circle.radius, MIN_Y)

    if (this.velocity[1] > 0) {
      this.velocity[1] = -this.velocity[1]
    }
  }

  private collisionFromRight (minX: number) {
    this.circle.center.x = Math.min(minX + this.circle.radius, MAX_X)

    if (this.velocity[0] < 0) {
      this.velocity[0] = -this.velocity[0]
    }
  }

  private collisionFromBelow (minY: number) {
    this.circle.center.y = Math.min(minY + this.circle.radius, MAX_Y)

    if (this.velocity[1] < 0) {
      this.velocity[1] = -this.velocity[1]
    }
  }

  private collisionFromLeft (maxX: number) {
    this.circle.center.x = Math.max(maxX - this.circle.radius, MIN_X)

    if (this.velocity[0] > 0) {
      this.velocity[0] = -this.velocity[0]
    }
  }
}
