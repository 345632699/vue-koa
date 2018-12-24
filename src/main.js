// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui' // 引入element-ui
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import axios from 'axios' // Vue全局使用
import router from './router/index'
import VueQuillEditor from 'vue-quill-editor'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor /* { default global options } */)
Vue.prototype.$http = axios // 类似于vue-resource的调用方法

Vue.use(VueRouter)
Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    const token = sessionStorage.getItem('demo-token')
    const tokenExp = sessionStorage.getItem('token_exp')
    const nowTime = new Date().getTime()
    console.log(nowTime - tokenExp)
    if (token && nowTime - tokenExp <= 1000 * 60 * 60 * 2) {
      next()
    } else {
      next('/')
    }
  } else {
    next()
  }
})

// axios 请求拦截器处理请求数据
axios.interceptors.request.use(config => {
  const token = sessionStorage.getItem('demo-token')
  config.headers.common['Authorization'] = 'Bearer ' + token
  return config
})

// axios 响应拦截器处理响应数据
axios.interceptors.response.use(res => {
  return res
}, err => {
  return Promise.reject(err)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
