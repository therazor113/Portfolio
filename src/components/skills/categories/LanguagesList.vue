<template>
  <div class="languages">
    <h2>Langauges</h2>
    <div class="icons">
      <a href="https://en.wikipedia.org/wiki/HTML5">
        <img
          title="HTML5"
          alt="HTML5 logo"
          src="@/assets/HTML5-icon.svg"
          width="65"
          height="65"
        >
      </a>
      <a href="https://en.wikipedia.org/wiki/CSS">
        <img
          title="CSS3"
          alt="CSS3 logo"
          src="@/assets/CSS3-icon.svg"
          width="65"
          height="65"
        >
      </a>
      <a href="https://www.javascript.com/">
        <img
          title="JavaScript"
          alt="JS logo"
          src="@/assets/JavaScript-icon.svg"
          width="65"
          height="65"
        >
      </a>
      <a href="https://nodejs.org/en/">
        <img
          title="Nodejs"
          alt="Nodejs logo"
          src="@/assets/Nodejs-icon.svg"
          width="65"
          height="65"
        >
      </a>
      <a href="https://sass-lang.com/">
        <img
          title="Sass"
          alt="Sass logo"
          src="@/assets/Sass-icon.svg"
          width="65"
          height="65"
        >
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
    .languages {
      width: 500px;
      display: flex;
      flex-direction: column;
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
        &:hover {
          transition: width 0.2s, height 0.2s, filter 0.2s;
          filter: drop-shadow(5px 5px 5px black);
          width: 75px;
          height: 75px;
        }
      }
    }
</style>
