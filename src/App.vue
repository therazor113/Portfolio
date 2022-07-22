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
    <IntroView />
    <ProjectView />
    <SkillsView />
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
</style>
