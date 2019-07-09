import State from '@/game/state'

export default class Mouse {
  private state: State
  private root: HTMLElement
  private running: boolean

  private moveListener: any
  private paddlePosition?: number

  private clickListener: any
  private launch: boolean

  constructor (state: State, root: HTMLElement) {
    this.state = state
    this.root = root
    this.running = false
    this.launch = false

    this.moveListener = this.moveHandler.bind(this)
    this.clickListener = this.clickHandler.bind(this)
  }

  start () {
    if (!this.running) {
      this.running = true
      this.root.addEventListener('mousemove', this.moveListener)
      this.root.addEventListener('click', this.clickListener)
    }
  }

  pause () {
    if (this.running) {
      this.running = false
      this.root.removeEventListener('mousemove', this.moveListener)
      this.root.removeEventListener('click', this.clickListener)
    }
  }

  private moveHandler (event: MouseEvent) {
    this.paddlePosition = event.clientX
  }

  private clickHandler () {
    this.launch = true
  }

  process () {
    if (this.paddlePosition !== undefined) {
      this.state.paddle.controls.move(this.paddlePosition)
    }

    if (this.launch) {
      this.state.paddle.controls.launch()
      this.launch = false
    }
  }
}
