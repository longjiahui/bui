import { createApp } from 'vue'
import App from './App.vue'

let app = createApp(App)

import BUI from '../../dist/bundle'
app.use(BUI)

app.mount('#app')
