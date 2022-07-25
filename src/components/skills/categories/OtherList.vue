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
        transition: transform 0.2s, filter 0.2s;
        margin: 5px;
        &:hover:not(.verc) {
          filter: drop-shadow(5px 5px 5px black);
          transform: scale(1.2);
        }
        &:hover.verc {
          filter: drop-shadow(4px 4px 4px rgb(35, 35, 35));
          transform: scale(1.2);
        }
      }
    }
</style>
