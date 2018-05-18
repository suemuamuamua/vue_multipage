import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/Page1'
    },
    {
      path: '/Page1',
      name: 'Page1',
      component: resolve => require(['../view/Page1.vue'], resolve)
    },
    {
      path: '/Page2',
      name: 'Page2',
      component: resolve => require(['../view/Page2.vue'], resolve)
    }
  ]
})
