<template lang="jade">
.swiper-slide.profile-0(v-if="show")
  .profile-0-male-on
    //- .logo(v-on:animationend="runCountUp([{ id: 'profile-0-num-0', end: profile.serving }])")
    .logo

    .text
      p.text-left(v-if="type === '0' || type === '2'")
        |Hi&nbsp;
        strong.font-normal.font-bold {{ profile.name }}
      p.text-left(v-if="type === '1'")
        |TA是
        strong.font-normal.font-bold {{ profile.name }}
      p.text-right
        strong {{ profile.entry.split('-')[0] }}
        |年
        strong {{ profile.entry.split('-')[1] }}
        |月
        strong {{ profile.entry.split('-')[2] }}
        |日,
        span(v-if="type === '0' || type === '2'") 你
        span(v-if="type === '1'") TA
        |来到了这里,
      p.text-right
        |今天是
        span(v-if="type === '0' || type === '2'") 你
        span(v-if="type === '1'") TA
        |加入蓝标大家庭的
        br
        |第
        strong#profile-0-num-0
        |天

    .building
    .people
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import { runCountUp, showSlide } from '../../vuex/action'

module.exports = {
  name: 'profile-0-male-on',
  vuex: {
    getters: {
      type: state => state.type,
      profile: state => state.profile
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

    $('.profile-0-male-on .logo').on(animationEnd, function () {
      _this.runCountUp([{ id: 'profile-0-num-0', end: _this.profile.serving }])
    })
    // 计数器 end
  }
}
</script>
