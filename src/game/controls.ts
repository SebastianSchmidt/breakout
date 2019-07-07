import State from './state'

export default class Engine {
  private state: State
  private root: HTMLElement
  private running: boolean
  private listener?: any
  private paddlePosition?: number

  constructor (state: State, root: HTMLElement) {
    this.state = state
    this.root = root
    this.running = false
  }

  start () {
    if (!this.running) {
      this.running = true
      this.listener = this.mouseMovement.bind(this)
      this.root.addEventListener('mousemove', this.listener)
    }
  }

  pause () {
    if (this.running) {
      this.running = false
      this.root.removeEventListener('mousemove', this.listener)
    }
  }

  private mouseMovement (event: MouseEvent) {
    this.paddlePosition = event.x
  }

  process () {
    if (this.paddlePosition !== undefined) {
      this.state.paddle.move(this.paddlePosition)
    }
  }
}
