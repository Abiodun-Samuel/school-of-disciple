import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'

const app = createApp(App)

app.use(router)
app.use(bootstrap)

app.mount('#app')
