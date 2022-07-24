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
      class="pro"
    />
    <IntroView />
    <div
      id="projects"
      class="pro"
    />
    <ProjectView />
    <div
      id="skills"
      class="pro"
    />
    <SkillsView />
    <div
      id="contact"
      class="pro"
    />
    <ContactView />
    <FooterView />
  </div>
</template>

<style lang='scss'>
  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .pro {
    width: 100%;
    bottom: 60px;
    text-align: center;
    z-index: 100000;
  }
</style>
