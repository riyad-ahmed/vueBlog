import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './routes';
import '@glidejs/glide/dist/css/glide.core.min.css'


createApp(App).use(router).mount('#app')
