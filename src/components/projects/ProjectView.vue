<script setup>
import ForkliftProject from './items/ForkliftProject.vue'
</script>

<template>
  <div class="ProjectsContainer">
    <h1 class="title">
      Projects
    </h1>
    <ForkliftProject />
  </div>
</template>

<style lang="scss" scoped>
  .ProjectsContainer {
    width: 100%;
    height: fit-content;
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
</style>
