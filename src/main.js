import Vue from 'vue'
// import App from 'components/App'
import VueRouter from 'vue-router'
import routers from './routers'
import {Button, Switch, InputNumber} from 'element-ui'
Vue.component(Button.name, Button) // 注册全局组件
Vue.component(Switch.name, Switch)
Vue.component(InputNumber.name, InputNumber)

Vue.use(VueRouter)
// 实例化router
const router = new VueRouter({
  // hashbang: true,
  // history: false,
  // saveScrollPosition: true,
  // transitionOnLoad: true,
  mode: 'history',
  base: __dirname,
  routes: routers
})

// 此处可以做登录验证
router.beforeEach((transition) => {
  console.log(transition)
})

new Vue({
  router,
  template: `
    <div id='app'>
      <h1>routers</h1>
      <p>current router name: {{ $route.name }}</p>
      <ul>
        <li><router-link to="/home">home</router-link></li>
        <li><router-link to="/counter">counter</router-link></li>
      </ul>
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app')
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
