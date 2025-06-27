import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { pharos } from './themes/pharos.ts';
import { lantern } from './library'

createApp(App).use(lantern, {
    theme: pharos,
    defaultColor: 'default',
    components: ['Alert', 'sdsd', 'Button']
}).mount('#app')