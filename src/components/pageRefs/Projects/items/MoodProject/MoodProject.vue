<template>
  <div class="projectContainer">
    <div class="pics">
      <img
        class="topImage"
        alt="Forklift App Badge"
        src="@/assets/images/login-mood.jpg"
        width="355"
        height="340"
      >
      <img
        class="middleImage"
        alt="Forklift App loginKeys"
        src="@/assets/images/create-mood.jpg"
        width="355"
        height="340"
      >
      <img
        class="bottomImage"
        alt="Forklift App Weights"
        src="@/assets/images/charts-mood.jpg"
        width="355"
        height="340"
      >
    </div>
    <div class="ProjectDetails">
      <h2 class="title">
        Mood-Next
      </h2>
      <br>
      <p>
        Mood-Next allows the user to create an account,
        upload and manage daily, weekly, and monthly journals,
        and keep track of their progress utilizing the provided charts.
        The user's data is kept secure with the use of JWT’s, cookies, and password encryption.
      </p>
      <br>
      <h2 class="title">
        Technologies
      </h2>
      <div>
        <Icon
          title="React"
          size="45"
          href="https://reactjs.org/"
        />
        <Icon
          title="Nextjs"
          size="45"
          href="https://nextjs.org/"
        />
        <Icon
          title="Nodejs"
          size="45"
          href="https://nodejs.org/en/"
        />
        <Icon
          title="JWT"
          size="45"
          href="https://sass-lang.com/"
        />
        <Icon
          title="Sass"
          size="45"
          href="https://sass-lang.com/"
        />
        <div>
          <h2 class="title">
            Links
          </h2>
          <div>
            <Icon
              title="Live"
              size="45"
              href="https://mood-next.vercel.app/"
            />
            <Icon
              title="GitHub"
              size="45"
              href="https://github.com/therazor113/Mood-Next"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../styles.module.scss';
</style>
