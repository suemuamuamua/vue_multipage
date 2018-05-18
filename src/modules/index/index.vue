<template>
  <div id="app">
    <p>主页面</p>
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue'

// 获取cookie
Vue.prototype.getCookie = function (name) {
  let arr
  let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  if (arr = document.cookie.match(reg)) {
    return decodeURI(decodeURI(arr[2]))
  } else {
    return null
  }
}
// 设置cookie
Vue.prototype.setCookie = function (name, value) {
  var expdate = new Date()
  expdate.setHours(expdate.getHours() + (24 * 1))
  document.cookie = encodeURI(name) + '=' + encodeURI(value) + ';expires=' + expdate.toGMTString() + ';path=/'
}
// 删除cookie
Vue.prototype.delCookie = function (name) {
  var exp = new Date()
  exp.setTime(exp.getTime() - 1)
  var cval = this.getCookie(name)
  if (cval != null) {
    document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
  }
}
// 随机数 1000-9999的随机数
Vue.prototype.Random = function () {
  do {
    var out = Math.floor(Math.random() * 10000)
  } while (out < 1000)
  return out
}
/*
*格式化时间
*yyyy-mm-dd hh-mm-ss =>yyyy-mm-dd
*/
Vue.prototype.formatDate = function (time) {
  let date = new Date(time)
  let year = date.getFullYear()
  let month = ('0' + (date.getMonth() + 1)).substr(-2)
  let day = ('0' + date.getDate()).substr(-2)
  return year + '-' + month + '-' + day
}

export default {
  name: 'Index'
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
