<template>
  <div>
    <div class="root" ref="root" />
    <p><button @click="pause">Pause / Resume</button></p>
  </div>
</template>

<script>
import Loop from './loop'
import State from './state'
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

    const state = new State()

    for (let row = 3; row < 11; row++) {
      for (let column = 0; column < 14; column++) {
        state.bricks[row][column] = new Brick(row, column)
      }
    }

    this.loop = new Loop(state, this.$refs.root)
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

<style scoped>
.root, .root * {
  margin: 0;
  padding: 0;
}

.root {
  display: inline-block;
}
</style>
