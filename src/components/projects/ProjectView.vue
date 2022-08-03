<script setup>
import ForkliftProject from './items/ForkliftProject.vue'
</script>

<template>
  <div class="ProjectsContainer">
    <div>
      <h1 class="title">
        Projects
      </h1>
      <ForkliftProject />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .ProjectsContainer {
    width: 100%;
    height: 100%;
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
