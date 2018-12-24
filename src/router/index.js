import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import TodoList from '../components/TodoList'
import Upload from '../components/upload/page'
import Home from '../components/Home'
import Hello from '../components/HelloWorld'
import ArticleCreate from '../components/article/create'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/', // 默认首页打开是登录页
      component: Login,
      meta: {requireAuth: false}
    },
    {
      path: '/todolist',
      component: TodoList,
      meta: {requireAuth: true}
    },
    {
      path: '/upload',
      component: Upload,
      meta: {requireAuth: true}
    },
    {
      path: '',
      component: Home,
      children: [
        {
          path: '/home',
          name: 'home',
          component: Hello
        },
        {
          path: '/article/create',
          name: 'article-create',
          component: ArticleCreate
        }
      ],
      meta: {requireAuth: true}
    },
    {
      path: '*',
      redirect: '/', // 输入其他不存在的地址自动跳回首页
      meta: {requireAuth: false}
    }
  ]
})
