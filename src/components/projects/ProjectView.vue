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
        <div class="test1" />
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
    border: 2px solid white;
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
      .test1 {
        left: 50px;
      }
      .snakeGame {
        left: 300px;
      }
    }
  }
  .games {
    height: 300px;
    width: 550px;
  }
  .test1 {
    transition: left 0.4s;
    position: absolute;
    top: 40px;
    left: 100px;
    width: 200px;
    height: 200px;
    background: blue;
    z-index: 20;
  }
  .snakeGame {
    transition: left 0.4s;
    position: absolute;
    top: 40px;
    left: 250px;
    z-index: 10;
  }
  .tictactoe {
    position: absolute;
    top: 0px;
    left: 190px;
    z-index: 30;
  }
</style>
