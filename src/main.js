import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'aos/dist/aos.css'
import 'swiper/swiper-bundle.css';



const app = createApp(App)

app.use(router)

app.mount('#app')
