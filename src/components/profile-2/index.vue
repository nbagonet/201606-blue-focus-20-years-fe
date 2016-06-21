<template lang="jade">
//- .swiper-slide.profile-2(v-if="profile.hometown" v-bind:class="{ 'play': isPlay }")
.swiper-slide.profile-2(v-if="show")
  //- .logo(v-on:animationend="runCountUp([{ id: 'profile-2-num-0', end: profile.fellow }])")
  .logo

  .text
    p
      span(v-if="type === '0' || type === '2'") 你
      span(v-if="type === '1'")
        span(v-if="profile.gender === '0'") TA
        span(v-if="profile.gender === '1'") TA
      |来自美丽的
      strong {{ profile.hometown }}
      br
      span(v-if="profile.fellow")
        |在蓝标有
        strong#profile-2-num-0
        |名同乡,
        br
        |正等着让
        span(v-if="type === '0' || type === '2'") 你
        span(v-if="type === '1'")
          span(v-if="profile.gender === '0'") TA
          span(v-if="profile.gender === '1'") TA
        |两眼泪汪汪。
  .mountain
  .tree
  .railway
  .train
  .plane
  .people
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import { runCountUp, showSlide } from '../../vuex/action'

module.exports = {
  name: 'profile-2',
  vuex: {
    getters: {
      profile: state => state.profile,
      play: state => state.play,
      type: state => state.type
    },
    actions: { runCountUp, showSlide }
  },
  data: function () {
    return {
      show: true
    }
  },
  compiled: function () {
    // 判断是否显示本页 begin
    this.showSlide([this.type, this.profile.hometown, this.profile.fellow], this)
    // 判断是否显示本页 end
  },
  // computed: {
  //   isPlay: function () {
  //     let _flagIdx1 = 2
  //     let _flagIdx2 = 6
  //     if (!this.profile.hometown && !this.profile.constellation) {
  //       _flagIdx1 = _flagIdx1 - 2
  //       _flagIdx2 = _flagIdx2 - 2
  //     } else {
  //       if ((this.profile.hometown && !this.profile.constellation) || (this.profile.constellation && !this.profile.hometown)) {
  //         _flagIdx1 = _flagIdx1 - 1
  //         _flagIdx2 = _flagIdx2 - 1
  //       }
  //     }
  //     if (this.play === 'profile-' + _flagIdx1 || this.play === 'corp-intro-' + _flagIdx2) {
  //       return true
  //     } else {
  //       return false
  //     }
  //   }
  // },
  // components: {},
  ready: function () {
    // 计数器 begin
    const $ = window.$
    const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
    const _this = this

    $('.profile-2 .logo').on(animationEnd, function () {
      _this.runCountUp([{ id: 'profile-2-num-0', end: _this.profile.fellow }])
    })
    // 计数器 end
  }
}
</script>
