<script>
export default {
  data () {
    return {
      button: 'Start',
      buttonShow: true,
      player: 'X',
      roundWon: false,
      message: '',
      gameState: ['', '', '', '', '', '', '', '', ''],
      winningConditions: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6]
      ]
    }
  },
  methods: {
    Reset () {
      const container = document.querySelector('.ticContainer')
      container.querySelectorAll(':scope td').forEach(el => {
        el.textContent = ''
        el.className = 'on'
      })
      this.gameState = ['', '', '', '', '', '', '', '', '']
      this.message = this.player
      this.buttonShow = false
      this.roundWon = false
    },
    click (e) {
      const cellId = parseInt(e.target.id) - 1
      if (this.buttonShow || e.target.textContent) return

      this.gameState[cellId] = this.player
      e.target.textContent = this.gameState[cellId]
      this.player = this.player === 'X' ? 'O' : 'X'
      e.target.className = 'off'
      this.message = this.player

      const container = document.querySelector('.ticContainer')
      container.querySelectorAll(':scope td').forEach((el) => {
        for (let i = 0; i <= 7; i++) {
          const winCondition = this.winningConditions[i]
          const a = this.gameState[winCondition[0]]
          const b = this.gameState[winCondition[1]]
          const c = this.gameState[winCondition[2]]
          if (!a || !b || !c) continue

          if (a === b && b === c) {
            this.roundWon = true
            el.className = 'off'
            break
          }
        }
      })

      if (this.roundWon) {
        this.message = `${this.player === 'X' ? 'O' : 'X'} Wins!`
        this.button = 'Reset'
        this.className = 'off'
        this.buttonShow = true
      } else if (this.gameState.every(Boolean)) {
        this.message = 'TIE'
        this.button = 'Reset'
        this.className = 'off'
        this.buttonShow = true
      }
    }
  }
}
</script>

<template>
  <div class="ticContainer">
    <h1>Tic Tac Toe</h1>
    <table>
      <tr>
        <td
          v-for="n in 3"
          :id="n"
          :key="n"
          class="off"
          @click="click"
        />
      </tr>
      <tr>
        <td
          v-for="n in 3"
          :id="n + 3"
          :key="n"
          class="off"
          @click="click"
        />
      </tr>
      <tr>
        <td
          v-for="n in 3"
          :id="n + 6"
          :key="n"
          class="off"
          @click="click"
        />
      </tr>
    </table>
    <button
      v-show="buttonShow"
      @click="Reset"
    >
      {{ button }}
    </button>
    <h1>{{ message }}</h1>
  </div>
</template>

<style lang="scss" scoped>
    .ticContainer {
      display: flex;
      flex-direction: column;
      user-select: none;
    }
    button {
      width: 50px;
      height: 22px;
      margin: auto;
      margin-top: 10px;
      &:hover {
        cursor: pointer;
      }
    }
    h1 {
      margin: 10px;
      text-align: center;
      color: #F5F5F5;
      font-family: Arial, sans-serif;
    }
    table {
      background-color: gray;
      margin: auto;
      td {
        width: 50px;
        height: 50px;
        text-align: center;
        box-shadow: 0 0 0 1px #333333;
        font-size: 200%;
        font-family: Arial, sans-serif;
      }
      .on:hover {
        cursor: pointer;
        background-color: #B0B0B0;
      }
      .off:hover {
        cursor: default;
      }
    }
</style>
