import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'

import { lantern } from './library'

createApp(App).use(lantern).mount('#app')
