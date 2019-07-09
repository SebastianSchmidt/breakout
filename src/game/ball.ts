import Physics from '@/physics/ball'
import Graphics from '@/graphics/ball'

export default class Ball {
  physics: Physics
  graphics: Graphics

  dropped: boolean

  constructor () {
    this.physics = new Physics(this)
    this.graphics = new Graphics(this)
    this.dropped = false
  }
}
