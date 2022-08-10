<template>
  <div class="tools">
    <h2 class="title">
      Tools
    </h2>
    <div class="icons">
      <a
        target="_blank"
        href="https://www.sqlite.org/index.html"
      >
        <img
          title="SQLite"
          alt="Sqlite logo"
          src="@/assets/Sqlite-icon.svg"
          width="65"
          height="65"
        >
        <h2>SQLite</h2>
      </a>
      <a
        target="_blank"
        href="https://eslint.org/"
      >
        <img
          title="ESLint"
          alt="ESLint logo"
          src="@/assets/ESLint-icon.svg"
          width="65"
          height="65"
        >
        <h2>ESLint</h2>
      </a>
      <a
        target="_blank"
        href="https://www.npmjs.com/"
      >
        <img
          title="NPM"
          alt="NPM logo"
          src="@/assets/NPM-icon.svg"
          width="65"
          height="65"
        >
        <h2>NPM</h2>
      </a>
      <a
        target="_blank"
        href="https://git-scm.com/"
      >
        <img
          title="GIT"
          alt="git logo"
          src="@/assets/Git-icon.svg"
          width="65"
          height="65"
        >
        <h2>Git</h2>
      </a>
      <a
        target="_blank"
        href="https://github.com/"
      >
        <img
          title="GitHub"
          alt="GitHub logo"
          src="@/assets/GitHub-icon.svg"
          width="65"
          height="65"
        >
        <h2>GitHub</h2>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .tools {
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
      &:hover {
        filter: drop-shadow(5px 5px 5px black);
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
