import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/about'
import Counter from '../views/counter'
import Home from '../views/home'
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/counter',
          component: Counter
        },
        {
          path: '/about',
          component: About
        }
      ]
    }
  ]
})
