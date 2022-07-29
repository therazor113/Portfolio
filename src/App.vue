<script setup>
import NavBar from '@/components/nav/NavBar.vue'
import IntroView from '@/components/introduction/IntroView.vue'
import AboutView from '@/components/about/AboutView.vue'
import ProjectView from '@/components/projects/ProjectView.vue'
import SkillsView from '@/components/skills/SkillsView.vue'
import ContactView from '@/components/contact/ContactView.vue'
import FooterView from '@/components/footer/FooterView.vue'
</script>

<template>
  <div class="container">
    <NavBar />
    <div
      id="home"
      class="id"
    />
    <IntroView />
    <div
      id="about"
      class="id"
    />
    <div class="aboutMe">
      <AboutView />
      <SkillsView />
      <div />
    </div>
    <div
      id="projects"
      class="id"
    />
    <ProjectView />
    <div
      id="contact"
      class="id"
    />
    <ContactView />
    <FooterView />
  </div>
</template>

<style lang='scss' scoped>
  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .aboutMe {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 3rem;
    height: 100vh;
    min-height: 800px;
  }
  .id {
    width: 100%;
    bottom: 60px;
    text-align: center;
  }
</style>
