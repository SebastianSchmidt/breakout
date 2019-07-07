import { FIELD_WIDTH, FIELD_HEIGHT } from '../game/field'
import State from '../game/state'
import Brick from '../game/brick'
import Ball from '../game/ball'

export default class Engine {
  private state: State
  private root: HTMLElement
  private layer: CanvasRenderingContext2D

  private fps?: number
  private framesThisSecond?: number
  private lastFpsUpdate?: number

  constructor (state: State, root: HTMLElement) {
    this.state = state
    this.root = this.initRoot(root)
    this.layer = this.createCanvas(0)
  }

  private initRoot (root: HTMLElement) {
    root.style.position = 'relative'
    root.style.width = FIELD_WIDTH + 'px'
    root.style.height = FIELD_HEIGHT + 'px'
    root.style.backgroundColor = '#E0F2F1'
    return root
  }

  private createCanvas (zIndex: number) {
    const canvas = document.createElement('canvas')

    canvas.setAttribute('width', FIELD_WIDTH + '')
    canvas.setAttribute('height', FIELD_HEIGHT + '')

    canvas.style.position = 'absolute'
    canvas.style.top = '0'
    canvas.style.left = '0'
    canvas.style.zIndex = zIndex + ''

    this.root.appendChild(canvas)

    const context = canvas.getContext('2d')

    if (context) {
      return context
    } else {
      throw new TypeError('Could not initialize rendering context.')
    }
  }

  pause () {
    this.framesThisSecond = undefined
    this.lastFpsUpdate = undefined
  }

  render (timestamp: number) {
    this.calculateFps(timestamp)
    this.clearLayers()
    this.renderBricks()
    this.renderBalls()
    this.renderPaddle()
    this.renderFps()
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

  private clearLayers () {
    this.layer.clearRect(0, 0, FIELD_WIDTH, FIELD_HEIGHT)
  }

  private renderBricks () {
    for (let row of this.state.bricks) {
      for (let brick of row) {
        if (brick) {
          this.renderBrick(brick)
        }
      }
    }
  }

  private renderBrick (brick: Brick) {
    const layer = this.layer
    const rectangle = brick.rectangle

    const gradient = layer.createLinearGradient(
      rectangle.corners.topLeft.x,
      rectangle.corners.topLeft.y,
      rectangle.corners.topLeft.x + rectangle.width,
      rectangle.corners.topLeft.y + rectangle.height
    )
    gradient.addColorStop(0, '#004D40')
    gradient.addColorStop(1, '#4DB6AC')
    layer.fillStyle = gradient

    layer.fillRect(
      rectangle.corners.topLeft.x,
      rectangle.corners.topLeft.y,
      rectangle.width,
      rectangle.height
    )
  }

  private renderBalls () {
    this.state.balls.forEach(ball => {
      this.renderBall(ball)
    })
  }

  private renderBall (ball: Ball) {
    const layer = this.layer
    const circle = ball.circle

    layer.fillStyle = '#000000'
    layer.beginPath()
    layer.arc(
      circle.center.x,
      circle.center.y,
      circle.radius,
      0,
      2 * Math.PI
    )
    layer.fill()
  }

  private renderPaddle () {
    const rectangle = this.state.paddle.rectangle
    this.layer.fillStyle = '#424242'
    this.layer.fillRect(
      rectangle.corners.topLeft.x,
      rectangle.corners.topLeft.y,
      rectangle.width,
      rectangle.height
    )
  }

  private renderFps () {
    if (this.fps) {
      this.layer.strokeStyle = '#000000'
      this.layer.textAlign = 'right'
      this.layer.fillText(Math.round(this.fps) + ' FPS', FIELD_WIDTH - 15, 25)
    }
  }
}
