import Field, { createEmptyField } from './field'
import Ball from './ball'

export default class State {
  bricks: Field = createEmptyField()
  balls: Ball[] = []
}
