import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { lantern } from './library'

createApp(App).use(lantern).mount('#app')