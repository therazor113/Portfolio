<script>
export default {
  props: ['title', 'size', 'href']
}
</script>

<template>
  <a
    target="_blank"
    :href="href"
  >
    <img
      :class="title"
      :title="title"
      :alt="`${title} logo`"
      :src="`./src/assets/icons/${title}-icon.svg`"
      :width="size"
      :height="size"
    >
    <slot />
  </a>
</template>

<style lang="scss" scoped>
  @import './styles.module.scss';
</style>
