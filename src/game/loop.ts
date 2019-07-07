import State from './state'
import PhysicsEngine from '../physics/engine'
import GraphicsEngine from '../graphics/engine'

export default class Loop {
  private state: State
  private physics: PhysicsEngine
  private graphics: GraphicsEngine
  private running: Boolean
  private fps?: number
  private framesThisSecond?: number
  private lastFpsUpdate?: number

  constructor (initialState: State, root: HTMLElement) {
    this.state = initialState
    this.physics = new PhysicsEngine(this.state)
    this.graphics = new GraphicsEngine(root)
    this.running = false
  }

  start () {
    this.running = true
    requestAnimationFrame(this.loop.bind(this))
  }

  pause () {
    if (this.running) {
      this.running = false
      this.framesThisSecond = undefined
      this.lastFpsUpdate = undefined
      this.physics.pause(performance.now())
    }
  }

  private loop (timestamp: number) {
    if (!this.running) {
      return
    }

    this.calculateFps(timestamp)
    this.physics.calculate(timestamp)
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
}
