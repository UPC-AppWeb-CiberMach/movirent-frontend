import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import setupPrimeVue from './primevue-components.js'
const app = createApp(App);
setupPrimeVue(app)
app.mount('#app')