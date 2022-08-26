import { createApp } from 'vue'
import App from './App.vue'
import ScrollTo from '@/components/utilities/ScrollTo/ScrollTo.vue'
import IconComponent from '@/components/utilities/IconComponent/IconComponent.vue'
import './assets/styles/globals.scss'

createApp(App)
  .component('ScrollLink', ScrollTo)
  .component('Icon', IconComponent)
  .mount('#app')
