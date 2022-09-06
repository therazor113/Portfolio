<script>
import NavLinks from '../NavLinks/NavLinks.vue'
export default {
  components: { NavLinks },
  data () {
    return {
      showMenu: false
    }
  }
}
</script>

<template>
  <div
    class="navMenuButton"
    tabindex="0"
    @click="showMenu = !showMenu"
    @blur="showMenu = false"
  >
    <span :style="showMenu && 'transform: scale(1.05); background-color: rgba(235, 235, 235, 0.64);'" />
    <span :style="showMenu && 'transform: scale(1.05); background-color: rgba(235, 235, 235, 0.64);'" />
    <span :style="showMenu && 'transform: scale(1.05); background-color: rgba(235, 235, 235, 0.64);'" />
  </div>
  <div
    :style="showMenu ? 'transform: scaleY(1); opacity: 1;' : 'transform: scaleY(0); opacity: 0;'"
    class="navMenu"
  >
    <NavLinks />
  </div>
</template>

<style lang='scss' scoped>
  @import './styles.module.scss';
</style>
