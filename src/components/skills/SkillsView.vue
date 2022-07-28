<script setup>
import FrameWorks from './categories/FrameworksList.vue'
import Langauges from './categories/LanguagesList.vue'
import Tools from './categories/ToolsList.vue'
import Other from './categories/OtherList.vue'
</script>

<template>
  <div class="skills">
    <h1>My Skills</h1>
    <div>
      <Langauges />
      <FrameWorks />
    </div>
    <div>
      <Tools />
      <Other />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  h1 {
      color: #eee;
      text-decoration: underline;
      margin-bottom: 1rem;
    }
  .skills {
    display: flex;
    flex-direction: column;
    height: fit-content;
    margin-top: 2rem;
    margin-bottom: 4rem;
    row-gap: 4rem;
    div {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
  }
</style>
