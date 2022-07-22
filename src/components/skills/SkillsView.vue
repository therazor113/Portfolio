<script setup>
import FrameWorks from './categories/FrameworksList.vue'
import Langauges from './categories/LanguagesList.vue'
import Tools from './categories/ToolsList.vue'
import Other from './categories/OtherList.vue'
</script>

<template>
  <div class="container">
    <h1>Skills</h1>
    <div class="skills">
      <Langauges />
      <FrameWorks />
      <Tools />
      <Other />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    border: 2px solid white;
    width: 100%;
    height: 50vh;
    h1 {
      text-align: center;
      text-decoration: underline;
      margin-bottom: 2rem;
    }
  }
  .skills {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
  }
</style>
