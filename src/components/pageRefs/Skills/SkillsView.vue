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
  @import './styles.module.scss';
</style>
