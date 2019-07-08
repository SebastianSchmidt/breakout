import State from '../game/state'
import Ball from '../game/ball'
import { BRICK_HEIGHT, BRICK_WIDTH } from '../game/brick'
import { Row, FIELD_WIDTH, FIELD_HEIGHT, NUMBER_OF_ROWS, NUMBER_OF_COLUMNS } from '../game/field'

const PHYSICS_TIMESTEP = 1000 / 60

export default class Engine {
  private state: State
  private delta: number
  private lastTimestamp?: number

  constructor (state: State) {
    this.state = state
    this.delta = 0
  }

  pause (timestamp: number) {
    if (this.lastTimestamp) {
      this.delta += timestamp - this.lastTimestamp
      this.lastTimestamp = undefined
    }
  }

  calculate (timestamp: number) {
    if (!this.lastTimestamp) {
      this.lastTimestamp = timestamp
    }

    this.delta += timestamp - this.lastTimestamp
    this.lastTimestamp = timestamp

    while (this.delta >= PHYSICS_TIMESTEP) {
      this.step()
      this.delta -= PHYSICS_TIMESTEP
    }
  }

  private step () {
    for (let ball of this.state.balls) {
      this.ballStep(ball)
    }
  }

  private ballStep (ball: Ball) {
    ball.move()
    ball.checkPaddleCollision(this.state.paddle)
    this.ballBricksCollision(ball)
    ball.checkBoundsCollision(FIELD_WIDTH, FIELD_HEIGHT)
  }

  private ballBricksCollision (ball: Ball) {
    const row = Math.round(ball.circle.center.y / BRICK_HEIGHT)
    const minRow = Math.max(0, row - 1)
    const maxRow = Math.min(NUMBER_OF_ROWS - 1, row + 1)

    for (let row = minRow; row <= maxRow; row++) {
      this.checkBrickRow(this.state.bricks[row], ball)
    }
  }

  private checkBrickRow (row: Row, ball: Ball) {
    const column = Math.round(ball.circle.center.x / BRICK_WIDTH)
    const minColumn = Math.max(0, column - 1)
    const maxColumn = Math.min(NUMBER_OF_COLUMNS - 1, column + 1)

    for (let column = minColumn; column <= maxColumn; column++) {
      this.checkBrickCell(row, column, ball)
    }
  }

  private checkBrickCell (row: Row, column: number, ball: Ball) {
    const brick = row[column]

    if (brick) {
      ball.checkBrickCollision(brick)

      if (brick.destroyed) {
        row[column] = null
      }
    }
  }
}
