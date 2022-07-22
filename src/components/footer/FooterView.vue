<template>
  <footer>
    <p>Designed and developed by Zachary Burtcher</p>
    <div>
      <p>Tools Used:</p>
      <a href="https://vuejs.org/">
        <img
          alt="Vue logo"
          src="@/assets/Vue-icon.svg"
          width="25"
          height="25"
        >
      </a>
      <a href="https://vitejs.dev/">
        <img
          alt="Vite logo"
          src="@/assets/Vite-icon.svg"
          width="25"
          height="25"
        >
      </a>
      <a href="https://sass-lang.com/">
        <img
          alt="Sass logo"
          src="@/assets/Sass-icon.svg"
          width="25"
          height="25"
        >
      </a>
    </div>
  </footer>
</template>

<style lang='scss'>
  footer {
    border-top: 1px solid black;
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    place-items: center;
    div {
      display: flex;
      line-height: 25px;
    }
    img {
      margin-left: 5px;
    }
  }
</style>
