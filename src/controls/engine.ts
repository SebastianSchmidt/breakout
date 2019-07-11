import State from '@/game/state'
import MouseControls from './mouse'
import TouchControls from './touch'

export default class Engine {
  private mouse: MouseControls
  private touch: TouchControls
  private running: boolean

  constructor (state: State, root: HTMLElement) {
    this.mouse = new MouseControls(state, root)
    this.touch = new TouchControls(state, root)
    this.running = false
  }

  start () {
    if (!this.running) {
      this.running = true
      this.mouse.start()
      this.touch.start()
    }
  }

  pause () {
    if (this.running) {
      this.running = false
      this.mouse.pause()
      this.touch.pause()
    }
  }

  process () {
    this.mouse.process()
    this.touch.process()
  }
}
