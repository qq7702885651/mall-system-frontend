import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
const pinia = createPinia()

// 使用插件
app.use(router)
pinia.use(piniaPluginPersistedstate)
app.use(ElementPlus)
app.use(pinia)
app.mount('#app')
