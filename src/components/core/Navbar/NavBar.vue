<script setup>
import NavLinks from './NavLinks/NavLinks.vue'
import NavMenu from './NavMenu/NavMenu.vue'
</script>
<template>
  <nav>
    <a
      href="/"
    >
      <h1>&lt;/&gt;</h1>
    </a>
    <NavLinks />
    <NavMenu />
  </nav>
</template>

<style lang='scss' scoped>
  @import './styles.module.scss';
</style>
