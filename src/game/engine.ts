import State from './state'
import Ball from './ball'
import Point from '../physics/objects/point'

export default class Engine {
  private state: State

  constructor (state: State) {
    this.state = state
    this.createBall()
  }

  private createBall () {
    const ball = new Ball(new Point(1, 1))
    this.state.balls.push(ball)
    this.state.paddle.stick(ball, true)
  }

  process () {
    this.handleDroppedBalls()
  }

  private handleDroppedBalls () {
    this.state.balls = this.state.balls.filter(ball => !ball.dropped)

    if (this.state.balls.length === 0) {
      this.createBall()
    }
  }
}
