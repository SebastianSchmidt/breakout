<template>
  <div>
    <canvas
      ref="canvas"
      :width="FIELD_WIDTH"
      :height="FIELD_HEIGHT"
    />
    <p><button @click="pause">Pause / Resume</button></p>
  </div>
</template>

<script>
import Loop from './loop'
import State from './state'
import Ball from './ball'
import Point from '../physics/objects/point'
import Brick from './brick'
import { FIELD_WIDTH, FIELD_HEIGHT } from './field'

export default {
  data: () => ({
    FIELD_WIDTH,
    FIELD_HEIGHT
  }),
  mounted () {
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        this.loop.pause()
      }
    })

    const canvas = this.$refs.canvas
    const context = canvas.getContext('2d')

    const state = new State()

    const ball = new Ball(new Point(280, 400))
    ball.velocity[0] = 3
    ball.velocity[1] = -3
    state.balls.push(ball)

    for (let row = 3; row < 11; row++) {
      for (let column = 0; column < 14; column++) {
        state.bricks[row][column] = new Brick(row, column)
      }
    }

    this.loop = new Loop(state, context)
    this.loop.start()
  },
  beforeDestroy () {
    if (this.visibilityListener) {
      document.removeEventListener(visibilityListener)
    }
  },
  methods: {
    pause () {
      if (this.loop) {
        if (this.loop.running) {
          this.loop.pause()
        } else {
          this.loop.start()
        }
      }
    }
  }
}
</script>
