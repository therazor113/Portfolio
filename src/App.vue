<script setup>
import NavBar from '@/components/nav/NavBar.vue'
import FooterView from '@/components/footer/FooterView.vue'
import IntroView from '@/components/introduction/IntroView.vue'
import ProjectView from '@/components/projects/ProjectView.vue'
import SkillsView from '@/components/skills/SkillsView.vue'
import ContactView from '@/components/contact/ContactView.vue'
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
      id="projects"
      class="id"
    />
    <ProjectView />
    <div
      id="skills"
      class="id"
    />
    <SkillsView />
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
  .id {
    width: 100%;
    bottom: 60px;
    text-align: center;
    z-index: 100000;
  }
</style>
