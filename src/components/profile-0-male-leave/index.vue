<template lang="jade">
.swiper-slide.profile-0(v-if="show")
  .profile-0-male-leave
    //- .logo(v-on:animationend="runCountUp([{ id: 'profile-0-num-0', end: profile.serving }])")
    .logo

    .text
      p.text-left(v-if="type === '0' || type === '2'")
        |Hi&nbsp;
        strong.font-normal.font-bold {{ profile.name }}
      p.text-left(v-if="type === '1'")
        |TA是
        strong.font-normal.font-bold {{ profile.name }}
      p.text-left
        |经历了
        strong#profile-0-num-0
        |天的朝夕相处与陪伴,
      p.text-left
        span(v-if="type === '0' || type === '2'") 你
        span(v-if="type === '1'") TA
        |于
        strong {{ profile.leave.split('-')[0] }}
        |年
        strong {{ profile.leave.split('-')[1] }}
        |月
        strong {{ profile.leave.split('-')[2] }}
        |日远走高飞,
      p.text-left
        |不时让人想起夕阳下奔跑的那位少年。

    .building
    .people
    .bubble
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import { runCountUp, showSlide } from '../../vuex/action'

module.exports = {
  name: 'profile-0-male-leave',
  vuex: {
    getters: {
      profile: state => state.profile,
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
    this.showSlide([this.type, this.profile.name], this)
    // 判断是否显示本页 end
  },
  ready: function () {
    // 计数器 begin
    const $ = window.$
    const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
    const _this = this

    $('.profile-0-male-leave .logo').on(animationEnd, function () {
      _this.runCountUp([{ id: 'profile-0-num-0', end: _this.profile.serving }])
    })
    // 计数器 end
  }
}
</script>
