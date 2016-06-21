<template lang="jade">
//- .swiper-slide.profile-5(v-if="showThis" v-bind:class="{ 'play': isPlay }")
.swiper-slide.profile-5(v-if="show")
  //- .logo(v-on:animationend="runCountUp([{ id: 'profile-5-num-0', end: profile.visitNumber }])")
  .logo

  .text
    p
      span(v-if="type === '0' || type === '2'") 你
      span(v-if="type === '1'")
        span(v-if="profile.gender === '0'") TA
        span(v-if="profile.gender === '1'") TA
      strong#profile-5-num-0
      |次的到访,
      br
      strong.font-normal.font-bold {{ profile.visitPlace }}
      br
      |我猜那里不是家,
      br
      |就是客户召唤
      span(v-if="type === '0' || type === '2'") 你
      span(v-if="type === '1'")
        span(v-if="profile.gender === '0'") TA
        span(v-if="profile.gender === '1'") TA
      |的地方。

  .building
  .people
  .car
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import { runCountUp, showSlide } from '../../vuex/action'

module.exports = {
  name: 'profile-5',
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
    // this.showSlide([this.type, this.profile.visitNumber, this.profile.visitPlace], this)
    console.log(Number(this.profile.visitNumber), this.profile.visitPlace)
    if (Number(this.profile.visitNumber) === 0) {
      this.$set('show', false)
    } else if (this.profile.visitPlace === '') {
      this.$set('show', false)
    }
    console.log(this.show)
    // this.$set('show', false)
    // 判断是否显示本页 end
  },
  // computed: {
  //   showThis: function () {
  //     if (Number(this.profile.visitNumber) > 0) {
  //       return true
  //     } else {
  //       return false
  //     }
  //   },
  //   isPlay: function () {
  //     let _flagIdx1 = 5
  //     let _flagIdx2 = 9
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

    $('.profile-5 .logo').on(animationEnd, function () {
      _this.runCountUp([{ id: 'profile-5-num-0', end: _this.profile.visitNumber }])
    })
    // 计数器 end
  }
}
</script>
