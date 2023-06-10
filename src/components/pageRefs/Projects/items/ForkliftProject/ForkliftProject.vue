<template>
  <div class="projectContainer">
    <div class="pics">
      <img
        class="topImage forkImg"
        alt="Forklift App Badge"
        src="@/assets/images/badge-forklift.jpg"
        width="350"
        height="325"
      >
      <img
        class="middleImage forkImg"
        alt="Forklift App loginKeys"
        src="@/assets/images/login-forklift.jpg"
        width="350"
        height="325"
      >
      <img
        class="bottomImage forkImg"
        alt="Forklift App Weights"
        src="@/assets/images/details-forklift.jpg"
        width="350"
        height="325"
      >
    </div>
    <div class="ProjectDetails">
      <h2 class="title">
        Forklift-Next
      </h2>
      <br>
      <i>*Styles are based on a forklift work application*</i>
      <br>
      <p>
        Forklift-Next allows a user to edit and manage freight data such as location,
        dock position, trailer destination, and various other freight related data.
        To achieve this, the application uses dynamic API’s to retrieve and update information from the provided database.
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
          title="Sass"
          size="45"
          href="https://sass-lang.com/"
        />
        <div>
          <Icon
            title="PostgreSQL"
            size="45"
            href="https://www.postgresql.org/"
          />
          <Icon
            title="Supabase"
            size="45"
            href="https://supabase.com/"
          />
        </div>
        <div>
          <h2 class="title">
            Links
          </h2>
          <div>
            <Icon
              title="Live"
              size="45"
              href="https://forklift-next.vercel.app/"
            />
            <Icon
              title="GitHub"
              size="45"
              href="https://github.com/therazor113/Forklift-Next"
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
