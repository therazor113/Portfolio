<template>
  <div>
    <h2 class="title">
      Forklift App
    </h2>
  </div>
  <div class="forkContainer">
    <div>
      <img
        class="badge"
        alt="Forklift App Badge"
        src="@/assets/badge-forklift.jpg"
        width="350"
        height="300"
      >
      <img
        class="loginKeys"
        alt="Forklift App loginKeys"
        src="@/assets/loginKeys-forklift.jpg"
        width="350"
        height="300"
      >
      <img
        class="weights"
        alt="Forklift App Weights"
        src="@/assets/details-forklift.jpg"
        width="350"
        height="300"
      >
    </div>
    <div class="forkText">
      <p>Lorem Ipsum</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .title {
      color: #eee;
      text-decoration: underline;
      margin-bottom: 1rem;
    }
  .forkText {
    float: right;
    width: 45%;
    height: 500px;
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
    transition: left 0.3s;
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
</style>
