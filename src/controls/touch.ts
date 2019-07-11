import State from '@/game/state'

export default class Touch {
  private state: State
  private root: HTMLElement

  private touchListener: any

  private paddlePosition?: number
  private startTime?: number
  private launch: boolean

  constructor (state: State, root: HTMLElement) {
    this.state = state
    this.root = root
    this.launch = false

    this.touchListener = this.touchHandler.bind(this)
  }

  start () {
    this.root.addEventListener('touchstart', this.touchListener)
    this.root.addEventListener('touchmove', this.touchListener)
    this.root.addEventListener('touchend', this.touchListener)
  }

  pause () {
    this.root.removeEventListener('touchstart', this.touchListener)
    this.root.removeEventListener('touchmove', this.touchListener)
    this.root.removeEventListener('touchend', this.touchListener)
  }

  private touchHandler (event: TouchEvent) {
    const touch = event.changedTouches[0]
    this.paddlePosition = touch.clientX
    event.preventDefault()

    if (event.type === 'touchstart') {
      this.startTime = performance.now()
    } else if (event.type === 'touchend' && this.startTime) {
      const diff = performance.now() - this.startTime
      if (diff <= 200) {
        this.launch = true
      }
    }
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
