import Ball from './ball'
import Field, { createEmptyField } from './field'
import Paddle from './paddle'

export default class State {
  bricks: Field = createEmptyField()
  balls: Ball[] = []
  paddle: Paddle = new Paddle()
}
