<template lang="jade">
.cover(v-bind:class="{ 'play': isPlay }")
  .cover-box

    //- 小logo
    .logo-s

    //- 大logo
    .logo-b
      //- 小字
      .logo-b-stxt
      //- 大字
      ul.logo-b-btxt
        - for(var i=0; i<4; i++)
          li
            span
      //- 线条
      ul.logo-b-line
        - for(var i=0; i<11; i++)
          li

    //- 按钮
    a.btn(v-on:click="setStep('corp-intro')")
      |点击开始
      span(v-if="type === '0' || type === '2'") 你
      span(v-if="type === '1'")
        span(v-if="profile.gender === '0'") TA
        span(v-if="profile.gender === '1'") TA
      |的蓝色之旅
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import { setPlayTag, setStep } from '../../vuex/action.js'

module.exports = {
  name: 'cover',
  vuex: {
    getters: {
      loadingAnimateing: state => state.loadingAnimateing,
      play: state => state.play,
      type: state => state.type,
      profile: state => state.profile
    },
    actions: { setPlayTag, setStep }
  },
  computed: {
    isPlay: function () {
      if (this.play === 'cover') {
        return true
      } else {
        return false
      }
    }
  },
  ready: function () {
    this.setPlayTag('cover')
  }
}
</script>
