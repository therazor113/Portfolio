<template>
  <div class="forkContainer">
    <div class="pics">
      <img
        class="badge"
        alt="Forklift App Badge"
        src="@/assets/badge-forklift.jpg"
        width="350"
        height="325"
      >
      <img
        class="loginKeys"
        alt="Forklift App loginKeys"
        src="@/assets/login-forklift.jpg"
        width="350"
        height="325"
      >
      <img
        class="weights"
        alt="Forklift App Weights"
        src="@/assets/details-forklift.jpg"
        width="350"
        height="325"
      >
    </div>
    <div class="forkText">
      <h2 class="title">
        Forklift-Next
      </h2>
      <br>
      <p>
        Forklift-Next allows the user to edit and manage freight data such as location, dock position, trailer destination,
        and various other freight related data using dynamic Api’s to retrieve and update information from the provided database.
      </p>
      <br>
      <h2 class="title">
        Technologies
      </h2>
      <div>
        <a
          target="_blank"
          href="https://reactjs.org/"
        >
          <img
            title="React"
            alt="React logo"
            src="@/assets/React-icon.svg"
            width="45"
            height="45"
          >
        </a>
        <a
          target="_blank"
          href="https://nextjs.org/"
        >
          <img
            title="Nextjs"
            alt="Nextjs logo"
            src="@/assets/Nextjs-icon.svg"
            width="45"
            height="45"
          >
        </a>
        <a
          target="_blank"
          href="https://nodejs.org/en/"
        >
          <img
            title="Nodejs"
            alt="Nodejs logo"
            src="@/assets/Nodejs-icon.svg"
            width="45"
            height="45"
          >
        </a>
        <a
          target="_blank"
          href="https://sass-lang.com/"
        >
          <img
            title="Sass"
            alt="Sass logo"
            src="@/assets/Sass-icon.svg"
            width="45"
            height="45"
          >
        </a>
        <div>
          <h2 class="title">
            Links
          </h2>
          <div>
            <a
              target="_blank"
              href="https://forklift-next.vercel.app/"
              class="link"
            >
              <img
                title="Live"
                alt="Live Link"
                src="@/assets/Link-icon.svg"
                width="45"
                height="45"
              >
            </a>
            <a
              target="_blank"
              href="https://github.com/therazor113/Forklift-Next"
            >
              <img
                title="GitHub"
                alt="GitHub logo"
                src="@/assets/GitHub-icon.svg"
                width="45"
                height="45"
              >
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .title {
    font-weight: 500;
    text-decoration: underline;
  }
  .forkText {
    display: flex;
    flex-direction: column;
    max-width: 490px;
    height: 500px;
    justify-content: center;
    img {
    margin-right: 0.6rem;
    margin-top: 1rem;
    transition: transform 0.2s;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
  .badge {
    top: 35px;
    left: 15px;
    z-index: 30;
  }
  .loginKeys {
    top: 90px;
    left: 65px;
    z-index: 20;
  }
  .weights {
    top: 140px;
    left: 115px;
    z-index: 10;
  }
  .forkContainer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
      &:hover {
        .badge {
          left: 35px;
        }
        .loginKeys {
          left: 125px;
        }
        .weights {
          left: 215px;
        }
      }
    .pics {
      width: 500px;
      height: 400px;
      img {
        transition: transform 0.2s, left 0.5s;
        position: absolute;
        outline: 2px solid black;
        border-radius: 5px;
        &:hover {
          transform: scale(1.2);
          z-index: 100;
        }
      }
    }
  }
</style>
