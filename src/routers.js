export default [
  {
    path: '/home',
    name: 'home',
    component: (resolve) => {
      require(['./views/home.vue'], resolve)
    }
  },
  {
    path: '/',
    name: 'index',
    component: (resolve) => {
      require(['./views/index.vue'], resolve)
    }
  },
  {
    path: '/counter',
    name: 'counter',
    component: (resolve) => {
      require(['./views/counter.vue'], resolve)
    }
  }
]
