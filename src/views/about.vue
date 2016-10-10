<template>
  <div >
    <img class="logo" src="../assets/logo.png">
    <hello></hello>
    <el-button>默认按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-switch
      v-model="test"
      on-color="#13ce66"
      off-color="#ff4949">
    </el-switch>
  </div>
</template>

<script>
import Hello from 'components/Hello'
export default {
  data: function () {
    return {
      test: true
    }
  },
  computed: {},
  methods: {},
  components: {Hello}
}
</script>

<style lang="scss">
  html {
    height: 100%;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  * {
    margin: 0;
    padding: 0;
  }
  #app {
    color: #2c3e50;
    margin-top: -100px;
    max-width: 600px;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    text-align: center;
  }

  #app a {
    // color: #42b983;
    text-decoration: none;
  }

  .logo {
    width: 100px;
    height: 100px
  }
  .router-link-active {
    color: red;
  }

</style>
