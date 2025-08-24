
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

const saved = localStorage.getItem('aetherflow-theme')
if (saved === 'dark') {
  document.documentElement.classList.add('dark')
}

createApp(App).mount('#app')
//rhis is a comment
