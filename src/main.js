import { createApp } from 'vue'
import App from './App.vue'
import ScrollTo from '@/scrollTo/ScrollTo.vue'
import './assets/base.css'

createApp(App).component('ScrollLink', ScrollTo).mount('#app')
