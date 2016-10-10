import Vue from 'vue'
import App from './App'
import routers from './router'
import store from './store'
import {Button, Switch, InputNumber} from 'element-ui'
Vue.component(Button.name, Button) // 注册全局组件
Vue.component(Switch.name, Switch)
Vue.component(InputNumber.name, InputNumber)

new Vue({
  store,
  router: routers,
  ...App
}).$mount('#app')
