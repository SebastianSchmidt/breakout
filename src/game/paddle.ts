import Rectangle from '../physics/objects/rectangle'
import Point from '../physics/objects/point'
import { BRICK_HEIGHT } from './brick'
import { FIELD_WIDTH, FIELD_HEIGHT } from './field'

export const PADDLE_WIDTH = 60
export const PADDLE_HEIGHT = BRICK_HEIGHT

const PADDLE_CENTER = PADDLE_WIDTH / 2

const MIN_PADDLE_X = 0
const MAX_PADDLE_X = FIELD_WIDTH - PADDLE_WIDTH

export default class Paddle {
  rectangle: Rectangle

  constructor () {
    const x = (FIELD_WIDTH / 2) - PADDLE_CENTER
    const y = FIELD_HEIGHT - (PADDLE_HEIGHT * 2)
    this.rectangle = new Rectangle(new Point(x, y), PADDLE_WIDTH, PADDLE_HEIGHT)
  }

  move (x: number) {
    const newX = Math.min(MAX_PADDLE_X, Math.max(MIN_PADDLE_X, x - PADDLE_CENTER))
    this.rectangle.moveTo(newX, this.rectangle.corners.topLeft.y)
  }
}
