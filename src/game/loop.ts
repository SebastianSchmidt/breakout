import State from './state'
import ControlsEngine from './controls'
import PhysicsEngine from '../physics/engine'
import GraphicsEngine from '../graphics/engine'

export default class Loop {
  private state: State
  private controls: ControlsEngine
  private physics: PhysicsEngine
  private graphics: GraphicsEngine
  private running: Boolean

  constructor (initialState: State, root: HTMLElement) {
    this.state = initialState
    this.controls = new ControlsEngine(this.state, root)
    this.physics = new PhysicsEngine(this.state)
    this.graphics = new GraphicsEngine(this.state, root)
    this.running = false
  }

  start () {
    if (!this.running) {
      this.running = true
      this.controls.start()
      requestAnimationFrame(this.loop.bind(this))
    }
  }

  pause () {
    if (this.running) {
      this.running = false
      this.controls.pause()
      this.physics.pause(performance.now())
      this.graphics.pause()
    }
  }

  private loop (timestamp: number) {
    if (!this.running) {
      return
    }

    this.controls.process()
    this.physics.calculate(timestamp)
    this.graphics.render(timestamp)

    requestAnimationFrame(this.loop.bind(this))
  }
}
