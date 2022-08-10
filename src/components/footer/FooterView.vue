<template>
  <footer>
    <p>Designed and developed by Zachary Burtcher</p>
    <div>
      <p>Tools Used:</p>
      <a
        target="_blank"
        href="https://vuejs.org/"
      >
        <img
          alt="Vue logo"
          src="@/assets/Vue-icon.svg"
          width="25"
          height="25"
        >
      </a>
      <a
        target="_blank"
        href="https://vitejs.dev/"
      >
        <img
          alt="Vite logo"
          src="@/assets/Vite-icon.svg"
          width="25"
          height="25"
        >
      </a>
      <a
        target="_blank"
        href="https://sass-lang.com/"
      >
        <img
          alt="Sass logo"
          src="@/assets/Sass-icon.svg"
          width="25"
          height="25"
        >
      </a>
      <p>Hosted with:</p>
      <a
        target="_blank"
        href="https://vercel.com/"
      >
        <img
          title="Vercel"
          alt="Vercel logo"
          src="@/assets/Vercel-icon.svg"
          width="25"
          height="25"
        >
      </a>
    </div>
  </footer>
</template>

<style lang='scss' scoped>
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
    a {
      margin-left: 5px;
    }
    p {
      margin-left: 1rem;
    }
  }
</style>
