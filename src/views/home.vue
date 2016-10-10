<template lang="html">
  <div>
    <h1>vue2.0 demo</h1>
    <ul class="router">
      <li class="router-item"><router-link to="/about">about</router-link></li>
      <li class="router-item"><router-link to="/counter">counter</router-link></li>
    </ul>
    <transition name="router" mode="out-in">
      <router-view></router-view>
    </transition>
  <div>
</template>
<style lang="scss" scoped>
ul, li {
  list-style: none;
}
.router {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  .router-item {
    flex: 1;
  }
}
a.router-link-active {
  color: rgb(170, 69, 111);
}
.router-enter-active,
.router-leave-active {
  transition: all .4s cubic-bezier(0, 0, 0, 1);
}
.router-enter,
.router-leave-active {
  opacity: .1;
}
.router-enter {
  transform: translate3D(100%, 0, 0);
}
.router-leave-active {
  transform: translate3D(-100%, 0, 0);
}
</style>
