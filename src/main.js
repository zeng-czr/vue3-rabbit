import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入初始化样式
import '@/styles/common.scss'

const app = createApp(App)
// 导入测试接口
import { getCategory } from '@/apis/testApi.js'
getCategory().then(res => {
  console.log(res)
})
// 导入pinia
app.use(createPinia())
// 导入路由
app.use(router)
// 挂载
app.mount('#app')
