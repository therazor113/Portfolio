<script>
export default {
  data () {
    return {
      text: 'Start',
      show: true,
      TICK_DELAY: 200,
      GRID_SIZE: 20,
      SNAKE_HEAD: 0,
      grid: [...Array(20)].map(() => [...Array(20)].map(() => 'empty')),
      snakePosition: [[12, 13]],
      direction: [0, 0]
    }
  },
  methods: {
    restart () {
      this.text = 'Restart'
      this.show = !this.show
      this.TICK_DELAY = 200
      this.GRID_SIZE = 20
      this.SNAKE_HEAD = 0
      this.grid = [...Array(20)].map(() => [...Array(20)].map(() => 'empty'))
      this.snakePosition = [[12, 13]]
      this.direction = [0, 0]
      this.randomFood()
      this.fn(this.TICK_DELAY)
      this.windowKeydown()
    },
    getRandomInt (max) {
      return Math.floor(Math.random() * Math.floor(max))
    },
    randomFood () {
      this.grid[this.getRandomInt(this.GRID_SIZE)][this.getRandomInt(this.GRID_SIZE)] = 'food'
      this.grid[this.getRandomInt(this.GRID_SIZE)][this.getRandomInt(this.GRID_SIZE)] = 'food'
    },
    fn (n) {
      setTimeout(() => {
        const [x, y] = this.snakePosition[this.SNAKE_HEAD]
        const [dx, dy] = this.direction
        const newHead = [dx + x, y + dy]

        for (let i = 0; i < this.grid.length; i++) {
          for (let k = 0; k < this.grid.length; k++) {
            if (this.grid[i][k] === 'snake') {
              this.grid[i][k] = 'empty'
            }
          }
        }
        this.snakePosition.forEach(([x, y]) => {
          this.grid[x][y] = 'snake'
        })

        function isOutOfBounds (n) {
          return n < 0 || n > 19
        }

        if (isOutOfBounds(newHead[0]) || isOutOfBounds(newHead[1])) {
          this.show = !this.show
          return
        }

        let ateFood = false
        if (this.grid[newHead[0]][newHead[1]] === 'food') {
          ateFood = true
          this.randomFood()
        }

        const snakeBody = this.snakePosition.slice(
          0,
          this.snakePosition.length - (ateFood ? 0 : 1)
        )

        if (snakeBody.some((x) => x[0] === newHead[0] && x[1] === newHead[1])) {
          this.show = !this.show
          return
        }

        this.snakePosition = [newHead, ...snakeBody]
        this.fn(this.TICK_DELAY - Math.min(this.snakePosition.length, 15) * 10)
      }, n)
    },
    windowKeydown () {
      window.addEventListener('keydown', (e) => {
        e.preventDefault()
        switch (e.key) {
          case 'ArrowLeft':
            this.direction = [0, -1]
            break
          case 'ArrowRight':
            this.direction = [0, 1]
            break
          case 'ArrowUp':
            this.direction = [-1, 0]
            break
          case 'ArrowDown':
            this.direction = [1, 0]
            break
        }
      })
    }
  }
}
</script>

<template>
  <div class="snakeContainer">
    <table>
      <tr
        v-for="(row, r) in grid"
        :key="r"
      >
        <td
          v-for="(cell, c) in row"
          :key="c"
          :class="cell"
        />
      </tr>
    </table>
    <h2 v-show="!show">
      Points: {{ snakePosition.length - 1 }}
    </h2>
    <button
      v-show="show"
      @click="restart"
    >
      {{ text }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
  .snakeContainer {
    text-align: center;
    width: 200px;
    height: 200px;
    button {
      margin-top: 10px;
    }
  }
  .row {
    display: flex;
  }
  .empty {
    background-color: black;
    width: 8px;
    height: 8px;
  }
  .food {
    background-color: red;
    width: 8px;
    height: 8px;
  }
  .snake {
    background-color: green;
    width: 8px;
    height: 8px;
  }
</style>
