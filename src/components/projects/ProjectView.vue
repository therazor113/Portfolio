<script setup>
import ForkliftProject from './items/ForkliftProject.vue'
import TicTacToe from './items/games/TicTacToe.vue'
import SnakeGame from './items/games/SnakeGame.vue'
</script>

<template>
  <div class="container">
    <h2>Projects</h2>
    <ForkliftProject />
    <div class="gamesContainer">
      <div>Lorem Ipsum</div>

      <div class="games">
        <TicTacToe class="tictactoe" />
        <SnakeGame class="snakeGame" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 1500px;
    display: flex;
    flex-direction: column;
    h2 {
      text-align: center;
      text-decoration: underline;
    }
  }
  .gamesContainer {
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;
    &:hover {
      .snakeGame {
        left: 300px;
      }
    }
  }
  .games {
    height: 300px;
    width: 550px;
  }
  .tictactoe {
    position: absolute;
    top: 17px;
    left: 190px;
    z-index: 30;
  }
  .snakeGame {
    transition: left 0.4s;
    position: absolute;
    top: 15px;
    left: 250px;
    z-index: 10;
  }
</style>
