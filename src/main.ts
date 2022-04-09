import { createApp } from 'vue'
import App from './App'
import VFormAntd from '@/index'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
const app = createApp(App)
app.use(Antd)
app.use(VFormAntd)
app.mount('#app')
app.config.errorHandler = (err, vm, info) => {
  console.error(err, vm, info)
}
