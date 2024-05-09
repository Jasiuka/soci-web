import './assets/styles/base.css'
import './assets/styles/common.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import BaseSection from './components/Base/BaseSection.vue'
import TheLayout from './components/UI/TheLayout.vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router).component('TheLayout', TheLayout).component('BaseSection', BaseSection)

app.mount('#app')
