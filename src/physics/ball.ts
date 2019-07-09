import Ball from '@/game/ball'
import State from '@/game/state'
import Paddle from '@/game/paddle'
import Brick, { BRICK_WIDTH, BRICK_HEIGHT } from '@/game/brick'
import Field, { Row, FIELD_WIDTH, FIELD_HEIGHT, NUMBER_OF_ROWS, NUMBER_OF_COLUMNS } from '@/game/field'

import Circle from './objects/circle'
import Point from './objects/point'
import rectangleCollision, { Type } from './collision-detection/circle-rectangle'

export const RADIUS = 7

const MIN_X = RADIUS
const MAX_X = FIELD_WIDTH - RADIUS
const MIN_Y = RADIUS
const MAX_Y = FIELD_HEIGHT - RADIUS

const BALL_SPEED = 5

// 60 Grad
const MAX_ANGLE = Math.PI / 3

export default class BallPhysics {
  private ball: Ball
  circle: Circle
  velocity: [number, number]

  constructor (ball: Ball) {
    this.ball = ball
    this.circle = new Circle(new Point(0, 0), RADIUS)
    this.velocity = [0, 0]
  }

  step (state: State) {
    this.move()
    this.checkPaddleCollision(state.paddle)
    this.checkBricksCollision(state.bricks)
    this.checkBoundsCollision()
  }

  // ------------------------------
  // Movement
  // ------------------------------

  private move () {
    this.circle.center.x += this.velocity[0]
    this.circle.center.y += this.velocity[1]
  }

  // ------------------------------
  // Paddle
  // ------------------------------

  private checkPaddleCollision (paddle: Paddle) {
    if (paddle.balls.includes(this.ball)) {
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

  private paddleCollisionFromAbove (paddle: Paddle) {
    this.updateVelocityBasedOnPaddlePosition(paddle)
    this.collisionFromAbove(paddle.rectangle.edges.top.start.y)
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

  // ------------------------------
  // Bricks
  // ------------------------------

  private checkBricksCollision (bricks: Field) {
    const row = Math.round(this.circle.center.y / BRICK_HEIGHT)
    const minRow = Math.max(0, row - 1)
    const maxRow = Math.min(NUMBER_OF_ROWS - 1, row + 1)

    for (let row = minRow; row <= maxRow; row++) {
      this.checkBrickRow(bricks[row])
    }
  }

  private checkBrickRow (row: Row) {
    const column = Math.round(this.circle.center.x / BRICK_WIDTH)
    const minColumn = Math.max(0, column - 1)
    const maxColumn = Math.min(NUMBER_OF_COLUMNS - 1, column + 1)

    for (let column = minColumn; column <= maxColumn; column++) {
      this.checkBrickCell(row, column)
    }
  }

  private checkBrickCell (row: Row, column: number) {
    const brick = row[column]

    if (brick) {
      this.checkBrickCollision(brick)

      if (brick.destroyed) {
        row[column] = null
      }
    }
  }

  private checkBrickCollision (brick: Brick) {
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

  // ------------------------------
  // Bounds
  // ------------------------------

  private checkBoundsCollision () {
    const { center, radius } = this.circle

    if (center.y - radius <= 0) {
      this.collisionFromBelow(0)
    }

    if (center.x + radius >= FIELD_WIDTH) {
      this.collisionFromLeft(FIELD_WIDTH)
    }

    if (center.x - radius <= 0) {
      this.collisionFromRight(0)
    }

    // Wenn der Ball unten aus dem Bildschirm gefallen ist:
    if (center.y - radius >= FIELD_HEIGHT) {
      this.ball.dropped = true
    }
  }

  // ------------------------------
  // Collision helper methods
  // ------------------------------

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
