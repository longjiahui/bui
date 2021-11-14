import { createApp } from 'vue'
import App from './App.vue'

import BUI from '../../main'

const app = createApp(App)
app.use(BUI)

app.mount('#app')
