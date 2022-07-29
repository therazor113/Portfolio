<script setup>
import ForkliftProject from './items/ForkliftProject.vue'
import TicTacToe from './items/games/TicTacToe.vue'
import SnakeGame from './items/games/SnakeGame.vue'
</script>

<template>
  <div class="ProjectsContainer">
    <div>
      <h1 class="title">
        Projects
      </h1>
      <ForkliftProject />
    </div>
    <div>
      <div>Lorem Ipsum</div>
    </div>
    <div class="games">
      <TicTacToe />
      <SnakeGame />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .ProjectsContainer {
    width: 100%;
    height: 1500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      color: #fff;
      font-size: 40px;
      text-align: center;
      margin-bottom: 1rem;
    }
  }
  .games {
    display: flex;
    justify-content: space-around;
  }
</style>
