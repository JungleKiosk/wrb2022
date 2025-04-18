import { createApp } from 'vue'
import './assets/scss/app.scss'
import App from './App.vue'
import router from "./router/index.js"
import i18n from './lang/i18n.js'

const app = createApp(App)
app.use(router)
app.use(i18n);
app.mount('#app')