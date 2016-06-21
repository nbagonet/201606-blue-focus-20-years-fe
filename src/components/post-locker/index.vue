<template lang="jade">
.post-locker
  clip-loader
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import ClipLoader from '../../../node_modules/vue-spinner/src/ClipLoader.vue'

module.exports = {
  name: 'post-locker',
  vuex: {
    getters: {},
    actions: {}
  },
  components: {
    ClipLoader
  },
  ready: function () {}
}
</script>
