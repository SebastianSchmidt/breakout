import State from './state'
import { BRICK_HEIGHT } from './brick'
import { FIELD_WIDTH, FIELD_HEIGHT } from './field'

const PHYSICS_TIMESTEP = 1000 / 60

export default class Loop {
  state: State
  canvas: CanvasRenderingContext2D
  running: Boolean
  lastTimestamp?: number
  delta: number
  fps?: number
  framesThisSecond?: number
  lastFpsUpdate?: number

  constructor (initialState: State, canvas: CanvasRenderingContext2D) {
    this.state = initialState
    this.canvas = canvas
    this.running = false
    this.delta = 0
  }

  start () {
    this.running = true
    requestAnimationFrame(this.loop.bind(this))
  }

  pause () {
    if (!this.running) {
      return
    }

    this.running = false
    this.framesThisSecond = undefined
    this.lastFpsUpdate = undefined

    if (this.lastTimestamp) {
      this.delta += performance.now() - this.lastTimestamp
      this.lastTimestamp = undefined
    }
  }

  private loop (timestamp: number) {
    if (!this.running) {
      return
    }

    this.calculateFps(timestamp)
    this.physics(timestamp)
    this.draw()

    requestAnimationFrame(this.loop.bind(this))
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

  private physics (timestamp: number) {
    if (!this.lastTimestamp) {
      this.lastTimestamp = timestamp
    }

    this.delta += timestamp - this.lastTimestamp
    this.lastTimestamp = timestamp

    while (this.delta >= PHYSICS_TIMESTEP) {
      this.physicsStep()
      this.delta -= PHYSICS_TIMESTEP
    }
  }

  private physicsStep () {
    const { balls, bricks } = this.state

    balls.forEach(ball => {
      ball.move()

      const row = Math.round(ball.circle.center.y / BRICK_HEIGHT)
      const minRow = Math.max(0, row - 1)
      const maxRow = Math.min(17, row + 1)

      for (let row = minRow; row <= maxRow; row++) {
        const bricksRow = bricks[row]

        for (let column = 0; column < bricksRow.length; column++) {
          const brick = bricksRow[column]

          if (brick) {
            ball.checkBrickCollision(brick)

            if (brick.destroyed) {
              bricksRow[column] = null
            }
          }
        }
      }

      ball.checkBoundsCollision(FIELD_WIDTH, FIELD_HEIGHT)
    })
  }

  private draw () {
    const canvas = this.canvas

    // Background
    canvas.fillStyle = '#E0F2F1'
    canvas.fillRect(0, 0, FIELD_WIDTH, FIELD_HEIGHT)

    // Bricks
    for (let row of this.state.bricks) {
      for (let brick of row) {
        if (!brick) {
          continue
        }

        const rectangle = brick.rectangle

        const gradient = canvas.createLinearGradient(
          rectangle.corners.topLeft.x,
          rectangle.corners.topLeft.y,
          rectangle.corners.topLeft.x + rectangle.width,
          rectangle.corners.topLeft.y + rectangle.height
        )
        gradient.addColorStop(0, '#004D40')
        gradient.addColorStop(1, '#4DB6AC')
        canvas.fillStyle = gradient

        canvas.fillRect(
          rectangle.corners.topLeft.x,
          rectangle.corners.topLeft.y,
          rectangle.width,
          rectangle.height
        )
      }
    }

    // Balls
    this.state.balls.forEach(ball => {
      const circle = ball.circle

      canvas.fillStyle = '#000000'
      canvas.beginPath()
      canvas.arc(
        circle.center.x,
        circle.center.y,
        circle.radius,
        0,
        2 * Math.PI
      )
      canvas.fill()
    })

    // FPS
    if (this.fps) {
      canvas.strokeStyle = '#000000'
      canvas.textAlign = 'right'
      canvas.fillText(Math.round(this.fps) + ' FPS', FIELD_WIDTH - 15, 25)
    }
  }
}
