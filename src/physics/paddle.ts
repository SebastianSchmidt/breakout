import { BRICK_HEIGHT } from '@/game/brick'
import { FIELD_HEIGHT, FIELD_WIDTH } from '@/game/field'
import Point from './objects/point'
import Rectangle from './objects/rectangle'

export const PADDLE_WIDTH = 60
export const PADDLE_HEIGHT = BRICK_HEIGHT

const PADDLE_CENTER = PADDLE_WIDTH / 2

export default class PaddlePhysics {
  rectangle: Rectangle

  constructor () {
    const x = (FIELD_WIDTH / 2) - PADDLE_CENTER
    const y = FIELD_HEIGHT - (PADDLE_HEIGHT * 2)
    this.rectangle = new Rectangle(new Point(x, y), PADDLE_WIDTH, PADDLE_HEIGHT)
  }
}
