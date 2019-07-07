import State from './state'
import PhysicsEngine from '../physics/engine'
import GraphicsEngine from '../graphics/engine'

export default class Loop {
  private state: State
  private physics: PhysicsEngine
  private graphics: GraphicsEngine
  private running: Boolean

  constructor (initialState: State, root: HTMLElement) {
    this.state = initialState
    this.physics = new PhysicsEngine(this.state)
    this.graphics = new GraphicsEngine(this.state, root)
    this.running = false
  }

  start () {
    this.running = true
    requestAnimationFrame(this.loop.bind(this))
  }

  pause () {
    if (this.running) {
      this.running = false
      this.physics.pause(performance.now())
      this.graphics.pause()
    }
  }

  private loop (timestamp: number) {
    if (!this.running) {
      return
    }

    this.physics.calculate(timestamp)
    this.graphics.render(timestamp)

    requestAnimationFrame(this.loop.bind(this))
  }
}
