<template>
  <div class="other">
    <h2>Other</h2>
    <div class="icons">
      <a href="https://vercel.com/">
        <img
          class="verc"
          title="Vercel"
          alt="Vercel logo"
          src="@/assets/Vercel-icon.svg"
          width="65"
          height="65"
        >
      </a>
      <a href="https://vitejs.dev/">
        <img
          title="Vite"
          alt="Vite logo"
          src="@/assets/Vite-icon.svg"
          width="65"
          height="65"
        >
      </a>
      <a href="https://code.visualstudio.com/">
        <img
          title="VSCode"
          alt="VSCode logo"
          src="@/assets/VSCode-icon.svg"
          width="65"
          height="65"
        >
      </a>
      <a href="https://www.postgresql.org/">
        <img
          title="PostgreSQL"
          alt="PostgreSQL logo"
          src="@/assets/Postgresql-icon.svg"
          width="65"
          height="65"
        >
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
    .other {
      display: flex;
      flex-direction: column;
      width: fit-content;
      text-align: center;
      h2 {
        margin-bottom: 10px;
        text-decoration: underline;
      }
    }
    .icons {
      display: flex;
      justify-content: center;
      width: 500px;
      height: 80px;
      img {
        transition: width 0.2s, height 0.2s;
        margin: 5px;
        &:hover:not(.verc) {
          transition: width 0.2s, height 0.2s, filter 0.2s;
          filter: drop-shadow(5px 5px 5px black);
          width: 75px;
          height: 75px;
        }
        &:hover.verc {
          transition: width 0.2s, height 0.2s;
          filter: drop-shadow(6px 6px 6px rgb(30, 30, 30));
          width: 75px;
          height: 75px;
        }
      }
    }
</style>
