import Graphics from '@/graphics/brick'
import Physics from '@/physics/brick'

export const BRICK_WIDTH = 40
export const BRICK_HEIGHT = 20

export default class Brick {
  physics: Physics
  graphics: Graphics

  destroyed: boolean

  constructor (row: number, column: number) {
    this.physics = new Physics(row, column)
    this.graphics = new Graphics(this)
    this.destroyed = false
  }

  hitByBall () {
    this.destroyed = true
  }
}
