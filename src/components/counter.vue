<template lang="html">

</template>

<script>
export default {
  data: function () {
    return {
      num1: 1
    }
  },
  template: `
    <el-input-number v-model="num1" @change="handleChange" :step="2"></el-input-number>
  `,
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
    handleChange (val) {
      console.log(val)
    }
  },
  components: {}
}
</script>

<style lang="css">
</style>
