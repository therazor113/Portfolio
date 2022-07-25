<template>
  <div class="tools">
    <h2>Tools</h2>
    <div class="icons">
      <a href="https://www.sqlite.org/index.html">
        <img
          title="SQLite"
          alt="Sqlite logo"
          src="@/assets/Sqlite-icon.svg"
          width="65"
          height="65"
        >
      </a>
      <a href="https://eslint.org/">
        <img
          title="ESLint"
          alt="ESLint logo"
          src="@/assets/ESLint-icon.svg"
          width="65"
          height="65"
        >
      </a>
      <a href="https://www.npmjs.com/">
        <img
          title="NPM"
          alt="NPM logo"
          src="@/assets/NPM-icon.svg"
          width="65"
          height="65"
        >
      </a>
      <a href="https://git-scm.com/">
        <img
          title="GIT"
          alt="git logo"
          src="@/assets/Git-icon.svg"
          width="65"
          height="65"
        >
      </a>
      <a href="https://github.com/">
        <img
          title="GitHub"
          alt="GitHub logo"
          src="@/assets/GitHub-icon.svg"
          width="65"
          height="65"
        >
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
        &:hover {
          filter: drop-shadow(5px 5px 5px black);
          transform: scale(1.2);
        }
      }
    }
</style>
