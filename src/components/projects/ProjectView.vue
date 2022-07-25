<script setup>
import ForkliftProject from './items/ForkliftProject.vue'
import TicTacToe from './items/games/TicTacToe.vue'
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
        <div class="test2" />
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
  }
  .games {
    height: 300px;
    width: 550px;
    &:hover {
      .test1 {
        left: 50px;
      }
      .test2 {
        left: 300px;
      }
    }
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
  .test2 {
    transition: left 0.4s;
    position: absolute;
    top: 40px;
    left: 250px;
    width: 200px;
    height: 200px;
    background: black;
    z-index: 10;
  }
  .tictactoe {
    position: absolute;
    top: 0px;
    left: 190px;
    z-index: 30;
  }
</style>
