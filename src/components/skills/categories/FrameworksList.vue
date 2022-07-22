<template>
  <div class="frameworks">
    <h2>Frameworks</h2>
    <div class="icons">
      <a href="https://reactjs.org/">
        <img
          title="React"
          alt="React logo"
          src="@/assets/React-icon.svg"
          width="65"
          height="65"
        >
      </a>
      <a href="https://nextjs.org/">
        <img
          class="next"
          title="Nextjs"
          alt="Nextjs logo"
          src="@/assets/Nextjs-icon.svg"
          width="65"
          height="65"
        >
      </a>
      <a href="https://vuejs.org/">
        <img
          title="Vuejs"
          alt="Vue logo"
          src="@/assets/Vue-icon.svg"
          width="65"
          height="65"
        >
      </a>
      <a href="https://expressjs.com/">
        <img
          title="Expressjs"
          alt="Expressjs logo"
          src="@/assets/Expressjs-icon.svg"
          width="70"
          height="70"
        >
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
    .frameworks {
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
        &:hover:not(.next) {
          transition: width 0.2s, height 0.2s, filter 0.2s;
          filter: drop-shadow(5px 5px 5px black);
          width: 75px;
          height: 75px;
        }
        &:hover.next {
          transition: width 0.2s, height 0.2s;
          filter: drop-shadow(6px 6px 6px rgb(30, 30, 30));
          width: 75px;
          height: 75px;
        }
      }
    }
</style>
