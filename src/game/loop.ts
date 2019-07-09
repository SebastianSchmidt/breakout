import ControlsEngine from '@/controls/engine'
import GraphicsEngine from '@/graphics/engine'
import PhysicsEngine from '@/physics/engine'
import GameEngine from './engine'
import State from './state'

export default class Loop {
  private state: State
  private controls: ControlsEngine
  private physics: PhysicsEngine
  private game: GameEngine
  private graphics: GraphicsEngine
  private running: Boolean

  constructor (initialState: State, root: HTMLElement) {
    this.state = initialState
    this.controls = new ControlsEngine(this.state, root)
    this.physics = new PhysicsEngine(this.state)
    this.game = new GameEngine(this.state)
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
    this.game.process()
    this.graphics.render(timestamp)

    requestAnimationFrame(this.loop.bind(this))
  }
}
