import Point from './objects/point'
import Rectangle from './objects/rectangle'

export const BRICK_WIDTH = 40
export const BRICK_HEIGHT = 20

export default class BrickPhysics {
  rectangle: Rectangle

  constructor (row: number, column: number) {
    const position = new Point(column * BRICK_WIDTH, row * BRICK_HEIGHT)
    this.rectangle = new Rectangle(position, BRICK_WIDTH, BRICK_HEIGHT)
  }
}
