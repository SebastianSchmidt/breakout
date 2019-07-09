import { FIELD_HEIGHT, FIELD_WIDTH } from '@/game/field'
import State from '@/game/state'

export default class Engine {
  private state: State
  private root: HTMLElement

  private bricksLayer: CanvasRenderingContext2D
  private dynamicLayer: CanvasRenderingContext2D

  private fps?: number
  private framesThisSecond?: number
  private lastFpsUpdate?: number

  constructor (state: State, root: HTMLElement) {
    this.state = state
    this.root = this.initRoot(root)
    this.bricksLayer = this.createCanvas(0)
    this.dynamicLayer = this.createCanvas(1)
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

    const scale = window.devicePixelRatio || 1
    canvas.width = FIELD_WIDTH * scale
    canvas.height = FIELD_HEIGHT * scale

    canvas.style.position = 'absolute'
    canvas.style.top = '0'
    canvas.style.left = '0'
    canvas.style.width = FIELD_WIDTH + 'px'
    canvas.style.height = FIELD_HEIGHT + 'px'
    canvas.style.zIndex = zIndex + ''

    this.root.appendChild(canvas)

    const context = canvas.getContext('2d')

    if (context) {
      context.scale(scale, scale)
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
    this.renderBricks()
    this.clearDynamicLayer()
    this.renderPaddle()
    this.renderBalls()
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

  private renderBricks () {
    for (let row of this.state.bricks) {
      for (let brick of row) {
        if (brick) {
          brick.graphics.render(this.bricksLayer)
        }
      }
    }
  }

  private clearDynamicLayer () {
    this.dynamicLayer.clearRect(0, 0, FIELD_WIDTH, FIELD_HEIGHT)
  }

  private renderPaddle () {
    this.state.paddle.graphics.render(this.dynamicLayer)
  }

  private renderBalls () {
    this.state.balls.forEach(ball => {
      ball.graphics.render(this.dynamicLayer)
    })
  }

  private renderFps () {
    if (this.fps) {
      this.dynamicLayer.strokeStyle = '#000000'
      this.dynamicLayer.textAlign = 'right'
      this.dynamicLayer.fillText(Math.round(this.fps) + ' FPS', FIELD_WIDTH - 15, 25)
    }
  }
}
