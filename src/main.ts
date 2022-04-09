import { createApp } from 'vue'
import App from './App.js'
import VFormAntd from '@/index'

const app = createApp(App)
app.use(VFormAntd)
app.mount('#app')
app.config.errorHandler = (err, vm, info) => {
  console.error(err, vm, info)
}
