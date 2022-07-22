<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  methods: {
    handleHome () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<template>
  <nav>
    <h1>&lt;/&gt;</h1>
    <div>
      <h2 @click="handleHome">
        Home
      </h2>
      <h2>Projects</h2>
      <h2>Skills</h2>
      <h2>Contact</h2>
    </div>
  </nav>
</template>

<style lang='scss' scoped>
  nav {
    top: 0;
    left: 0;
    width: 100vw;
    height: 4rem;
    z-index: 1100;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-content: center;
    background: #222222;
    padding: 0.8rem;
    div {
      display: flex;
      gap: 3rem;
      margin-right: 2rem;
      h2 {
        transition: color 0.2s, background-color 0.2s;
        border-radius: 10px;
        line-height: 14px;
        text-align: center;
        padding: 8px;
        height: 2rem;
        cursor: pointer;
        &:hover {
          transition: color 0.2s, background-color 0.2s;
          color: #53dfa2;
          background: rgba(80, 80, 80, 0.2);
        }
      }
    }
  }
</style>
