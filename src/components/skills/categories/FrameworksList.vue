<template>
  <div class="frameworks">
    <h2 class="title">
      Frameworks
    </h2>
    <div class="icons">
      <a
        target="_blank"
        href="https://reactjs.org/"
      >
        <img
          title="React"
          alt="React logo"
          src="@/assets/React-icon.svg"
          width="65"
          height="65"
        >
        <h2>React</h2>
      </a>
      <a
        target="_blank"
        href="https://nextjs.org/"
      >
        <img
          class="next"
          title="Nextjs"
          alt="Nextjs logo"
          src="@/assets/Nextjs-icon.svg"
          width="65"
          height="65"
        >
        <h2>Nextjs</h2>
      </a>
      <a
        target="_blank"
        href="https://vuejs.org/"
      >
        <img
          title="Vuejs"
          alt="Vue logo"
          src="@/assets/Vue-icon.svg"
          width="65"
          height="65"
        >
        <h2>Vuejs</h2>
      </a>
      <a
        target="_blank"
        href="https://expressjs.com/"
      >
        <img
          title="Expressjs"
          alt="Expressjs logo"
          src="@/assets/Expressjs-icon.svg"
          width="70"
          height="70"
        >
        <h2>Express</h2>
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
    .title {
      margin-bottom: 10px;
      text-decoration: underline;
    }
  }
  .icons {
    display: flex;
    justify-content: center;
    width: fit-content;
    height: 80px;
    img {
      transition: transform 0.2s, filter 0.2s;
      margin: 5px;
      &:hover:not(.next) {
        filter: drop-shadow(5px 5px 5px black);
        transform: scale(1.2);
      }
      &:hover.next {
        filter: drop-shadow(6px 6px 6px rgb(30, 30, 30));
        transform: scale(1.2);
      }
    }
  }
  a {
    h2 {
      display: none;
    }
    &:hover {
      h2 {
        position: absolute;
        top: 115%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
      }
    }
  }
</style>
