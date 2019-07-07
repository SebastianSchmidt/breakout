import Circle from '../physics/objects/circle'
import Point from '../physics/objects/point'
import Brick from './brick'
import rectangleCollision, { Type } from '../physics/collision-detection/circle-rectangle'

const RADIUS = 5

export default class Ball {
  circle: Circle
  velocity: [number, number]

  constructor (position: Point) {
    this.circle = new Circle(position, RADIUS)
    this.velocity = [0, 0]
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

    if (center.y + radius >= height) {
      this.collisionFromAbove(height)
    }

    if (center.x - radius <= 0) {
      this.collisionFromRight(0)
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

  private collisionFromAbove (maxY: number) {
    this.circle.center.y = maxY - this.circle.radius

    if (this.velocity[1] > 0) {
      this.velocity[1] = -this.velocity[1]
    }
  }

  private collisionFromRight (minX: number) {
    this.circle.center.x = minX + this.circle.radius

    if (this.velocity[0] < 0) {
      this.velocity[0] = -this.velocity[0]
    }
  }

  private collisionFromBelow (minY: number) {
    this.circle.center.y = minY + this.circle.radius

    if (this.velocity[1] < 0) {
      this.velocity[1] = -this.velocity[1]
    }
  }

  private collisionFromLeft (maxX: number) {
    this.circle.center.x = maxX - this.circle.radius

    if (this.velocity[0] > 0) {
      this.velocity[0] = -this.velocity[0]
    }
  }
}
