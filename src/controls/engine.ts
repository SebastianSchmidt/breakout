import State from '../game/state'
import MouseControls from './mouse'

export default class Engine {
  private mouse: MouseControls

  constructor (state: State, root: HTMLElement) {
    this.mouse = new MouseControls(state, root)
  }

  start () {
    this.mouse.start()
  }

  pause () {
    this.mouse.pause()
  }

  process () {
    this.mouse.process()
  }
}
