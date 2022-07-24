<script>

</script>

<template>
  <nav>
    <h1>&lt;/&gt;</h1>
    <div>
      <ScrollLink href="#home">
        <h2>Home</h2>
      </ScrollLink>
      <ScrollLink href="#projects">
        <h2>Projects</h2>
      </ScrollLink>
      <ScrollLink href="#skills">
        <h2>Skills</h2>
      </ScrollLink>
      <ScrollLink href="#contact">
        <h2>Contact</h2>
      </ScrollLink>
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
      a {
        color: inherit; /* blue colors for links too */
        text-decoration: inherit; /* no underline */
        }
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
