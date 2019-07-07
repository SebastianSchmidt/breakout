import { FIELD_WIDTH, FIELD_HEIGHT } from '../game/field'
import State from '../game/state'

export default class Engine {
  private root: HTMLElement
  private canvas: HTMLCanvasElement
  private context: CanvasRenderingContext2D

  constructor (root: HTMLElement) {
    this.root = root
    this.canvas = document.createElement('canvas')
    this.canvas.setAttribute('width', FIELD_WIDTH + '')
    this.canvas.setAttribute('height', FIELD_HEIGHT + '')
    this.context = this.initRenderingContext()
    this.root.appendChild(this.canvas)
  }

  private initRenderingContext () {
    const context = this.canvas.getContext('2d')
    if (context) {
      return context
    } else {
      throw new TypeError('Could not initialize rendering context.')
    }
  }

  render (state: State, fps?: number) {
    this.renderBackground()
    this.renderBricks(state)
    this.renderBalls(state)
    this.renderFps(fps)
  }

  private renderBackground () {
    this.context.fillStyle = '#E0F2F1'
    this.context.fillRect(0, 0, FIELD_WIDTH, FIELD_HEIGHT)
  }

  private renderBricks (state: State) {
    for (let row of state.bricks) {
      for (let brick of row) {
        if (!brick) {
          continue
        }

        const rectangle = brick.rectangle

        const gradient = this.context.createLinearGradient(
          rectangle.corners.topLeft.x,
          rectangle.corners.topLeft.y,
          rectangle.corners.topLeft.x + rectangle.width,
          rectangle.corners.topLeft.y + rectangle.height
        )
        gradient.addColorStop(0, '#004D40')
        gradient.addColorStop(1, '#4DB6AC')
        this.context.fillStyle = gradient

        this.context.fillRect(
          rectangle.corners.topLeft.x,
          rectangle.corners.topLeft.y,
          rectangle.width,
          rectangle.height
        )
      }
    }
  }

  private renderBalls (state: State) {
    state.balls.forEach(ball => {
      const circle = ball.circle

      this.context.fillStyle = '#000000'
      this.context.beginPath()
      this.context.arc(
        circle.center.x,
        circle.center.y,
        circle.radius,
        0,
        2 * Math.PI
      )
      this.context.fill()
    })
  }

  private renderFps (fps?: number) {
    if (fps) {
      this.context.strokeStyle = '#000000'
      this.context.textAlign = 'right'
      this.context.fillText(Math.round(fps) + ' FPS', FIELD_WIDTH - 15, 25)
    }
  }
}
