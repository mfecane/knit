import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/components/App.vue'
import '@/scss/style.scss'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.mount('#app')
