<script>

</script>

<template>
  <nav>
    <h1>&lt;/&gt;</h1>
    <div>
      <h2>Home</h2>
      <h2>Projects</h2>
      <h2>Contact</h2>
    </div>
  </nav>
</template>

<style lang='scss'>
  nav {
    display: flex;
    justify-content: space-between;
    align-content: center;
    border-bottom: 2px solid rgba(10, 10, 10, 0.5);
    div {
      display: flex;
      gap: 3rem;
      h2 {
        border-radius: 10px;
        line-height: 11px;
        text-align: center;
        padding: 8px;
        height: 2rem;
        cursor: pointer;
        &:hover {
          transition: color 0.5s, background-color 0.5s;
          color: #42b883;
          background: rgba(80, 80, 80, 0.2);
        }
      }
    }
  }
</style>
