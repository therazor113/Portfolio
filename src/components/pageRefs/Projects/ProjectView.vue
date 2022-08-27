<script setup>
import ForkliftProject from './items/ForkliftProject/ForkliftProject.vue'
import MoodProject from './items/MoodProject/MoodProject.vue'
</script>

<template>
  <div class="ProjectsContainer">
    <h1 class="title">
      Projects
    </h1>
    <MoodProject />
    <ForkliftProject />
  </div>
</template>

<style lang='scss' scoped>
  @import './styles.module.scss';
</style>
