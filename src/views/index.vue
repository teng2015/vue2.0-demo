<template lang="html">

</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  template: `
  <div>
    <h1>routers</h1>
    <p>current router name: {{ $route.name }}</p>
    <ul>
      <li><router-link :to="{ name: 'home' }">home</router-link></li>
      <li><router-link :to="{ name: 'counter' }">counter</router-link></li>
    </ul>
    <router-view class="view"></router-view>
  </div>
  `,
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
  .router-link-active {
    color: red;
  }

</style>
