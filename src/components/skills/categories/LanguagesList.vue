<template>
  <div class="languages">
    <h2 class="title">
      Langauges
    </h2>
    <div class="icons">
      <a
        target="_blank"
        href="https://en.wikipedia.org/wiki/HTML5"
      >
        <img
          title="HTML5"
          alt="HTML5 logo"
          src="@/assets/HTML5-icon.svg"
          width="65"
          height="65"
        >
        <h2>HTML5</h2>
      </a>
      <a
        target="_blank"
        href="https://en.wikipedia.org/wiki/CSS"
      >
        <img
          title="CSS3"
          alt="CSS3 logo"
          src="@/assets/CSS3-icon.svg"
          width="65"
          height="65"
        >
        <h2>CSS3</h2>
      </a>
      <a
        target="_blank"
        href="https://www.javascript.com/"
      >
        <img
          title="JavaScript"
          alt="JS logo"
          src="@/assets/JavaScript-icon.svg"
          width="65"
          height="65"
        >
        <h2>JavaScript</h2>
      </a>
      <a
        target="_blank"
        href="https://nodejs.org/en/"
      >
        <img
          title="Nodejs"
          alt="Nodejs logo"
          src="@/assets/Nodejs-icon.svg"
          width="65"
          height="65"
        >
        <h2>Nodejs</h2>
      </a>
      <a
        target="_blank"
        href="https://sass-lang.com/"
      >
        <img
          title="Sass"
          alt="Sass logo"
          src="@/assets/Sass-icon.svg"
          width="65"
          height="65"
        >
        <h2>Sass</h2>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .languages {
    width: fit-content;
    display: flex;
    flex-direction: column;
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
      &:hover {
        filter: drop-shadow(5px 5px 5px black);
        transform: scale(1.2);
      }
    }
  }
  a {
    color: inherit;
    text-decoration: none;
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
