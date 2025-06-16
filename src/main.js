import './assets/main.css'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

gsap.registerPlugin(ScrollToPlugin) 
const app = createApp(App)

app.use(router)

app.mount('#app')
