<script setup>
import NavBar from '@/components/core/Navbar/NavBar.vue'
import IntroView from '@/components/pageRefs/Welcome/WelcomeView.vue'
import AboutView from '@/components/pageRefs/About/AboutView.vue'
import ProjectView from '@/components/pageRefs/Projects/ProjectView.vue'
import SkillsView from '@/components/pageRefs/Skills/SkillsView.vue'
import ContactView from '@/components/pageRefs/Contact/ContactView.vue'
import FooterView from '@/components/core/Footer/FooterView.vue'
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
  @import './assets/styles/app.module.scss';
</style>
