// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Index from './index.vue'

Vue.config.productionTip = false
// console.log(router)
// router跳转之前进行登录验证
router.beforeEach((from, to, next) => {
  // if(!sessionStorage.getItem('') && to.path != '/login') {
  //   window.location.href='/'
  // }else {
  //   next()
  // }
  next()
})
console.log(router)

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(Index)
}).$mount('#multipage')
