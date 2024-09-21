
import { createApp } from 'vue'
import App from './App.vue'
import i18n from '@/traslate/i18n.js'
import setupPrimeVue from './primevue-components.js'

const app = createApp(App)

setupPrimeVue(app)

app.use(i18n)

app.mount('#app')
