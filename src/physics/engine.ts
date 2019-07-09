import State from '../game/state'

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
      ball.physics.step(this.state)
    }
  }
}
