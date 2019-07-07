import State from './state'
import { BRICK_HEIGHT } from './brick'
import { FIELD_WIDTH, FIELD_HEIGHT } from './field'
import GraphicsEngine from '../graphics/engine'

const PHYSICS_TIMESTEP = 1000 / 60

export default class Loop {
  private state: State
  private graphics: GraphicsEngine
  private running: Boolean
  private lastTimestamp?: number
  private delta: number
  private fps?: number
  private framesThisSecond?: number
  private lastFpsUpdate?: number

  constructor (initialState: State, root: HTMLElement) {
    this.state = initialState
    this.graphics = new GraphicsEngine(root)
    this.running = false
    this.delta = 0
  }

  start () {
    this.running = true
    requestAnimationFrame(this.loop.bind(this))
  }

  pause () {
    if (!this.running) {
      return
    }

    this.running = false
    this.framesThisSecond = undefined
    this.lastFpsUpdate = undefined

    if (this.lastTimestamp) {
      this.delta += performance.now() - this.lastTimestamp
      this.lastTimestamp = undefined
    }
  }

  private loop (timestamp: number) {
    if (!this.running) {
      return
    }

    this.calculateFps(timestamp)
    this.physics(timestamp)
    this.graphics.render(this.state, this.fps)

    requestAnimationFrame(this.loop.bind(this))
  }

  private calculateFps (timestamp: number) {
    if (!this.lastFpsUpdate) {
      this.lastFpsUpdate = timestamp
    }

    if (timestamp > this.lastFpsUpdate + 1000) {
      this.fps = this.framesThisSecond
      this.lastFpsUpdate = timestamp
      this.framesThisSecond = 0
    }

    if (!this.framesThisSecond) {
      this.framesThisSecond = 0
    }
    this.framesThisSecond++
  }

  private physics (timestamp: number) {
    if (!this.lastTimestamp) {
      this.lastTimestamp = timestamp
    }

    this.delta += timestamp - this.lastTimestamp
    this.lastTimestamp = timestamp

    while (this.delta >= PHYSICS_TIMESTEP) {
      this.physicsStep()
      this.delta -= PHYSICS_TIMESTEP
    }
  }

  private physicsStep () {
    const { balls, bricks } = this.state

    balls.forEach(ball => {
      ball.move()

      const row = Math.round(ball.circle.center.y / BRICK_HEIGHT)
      const minRow = Math.max(0, row - 1)
      const maxRow = Math.min(17, row + 1)

      for (let row = minRow; row <= maxRow; row++) {
        const bricksRow = bricks[row]

        for (let column = 0; column < bricksRow.length; column++) {
          const brick = bricksRow[column]

          if (brick) {
            ball.checkBrickCollision(brick)

            if (brick.destroyed) {
              bricksRow[column] = null
            }
          }
        }
      }

      ball.checkBoundsCollision(FIELD_WIDTH, FIELD_HEIGHT)
    })
  }
}
