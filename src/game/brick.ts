import Rectangle from '../physics/objects/rectangle'
import Point from '../physics/objects/point'

export const BRICK_WIDTH = 40
export const BRICK_HEIGHT = 20

export default class Brick {
  rectangle: Rectangle
  destroyed: boolean

  constructor (row: number, column: number) {
    const position = new Point(column * BRICK_WIDTH, row * BRICK_HEIGHT)
    this.rectangle = new Rectangle(position, BRICK_WIDTH, BRICK_HEIGHT)
    this.destroyed = false
  }

  hitByBall () {
    this.destroyed = true
  }
}
