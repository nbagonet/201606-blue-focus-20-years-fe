<template lang="jade">
//- .swiper-slide.profile-1(v-if="profile.constellation" v-bind:class="{ 'play': isPlay }")
.swiper-slide.profile-1(v-if="show")
  //- .logo(v-on:animationend="runCountUp([{ id: 'profile-1-num-0', end: profile.sameBirthday }, { id: 'profile-1-num-1', end: profile.sameConstellation }])")
  .logo

  .text
    p
      span(v-if="type === '0' || type === '2'") 你
      span(v-if="type === '1'")
        span(v-if="profile.gender === '0'") TA
        span(v-if="profile.gender === '1'") TA
      |的生日是
      strong {{ profile.birthday.split('-')[1] }}
      |月
      strong {{ profile.birthday.split('-')[2] }}
      |日
      br
      span(v-if="profile.sameBirthday")
        |公司有
        strong#profile-1-num-0
        |位小伙伴
        br
        |和
        span(v-if="type === '0' || type === '2'") 你
        span(v-if="type === '1'")
          span(v-if="profile.gender === '0'") TA
          span(v-if="profile.gender === '1'") TA
        |一天生日,
        br
      span(v-if="profile.sameConstellation")
        strong#profile-1-num-1
        |位小伙伴和
        span(v-if="type === '0' || type === '2'") 你
        span(v-if="type === '1'")
          span(v-if="profile.gender === '0'") TA
          span(v-if="profile.gender === '1'") TA
        |一同
        br
        |守护
        strong {{ profile.constellation }}
        |。
  .cake
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import { runCountUp, showSlide } from '../../vuex/action'

module.exports = {
  name: 'profile-1',
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
    this.showSlide([this.type, this.profile.birthday, this.profile.sameBirthday, this.profile.sameConstellation, this.profile.constellation], this)
    // 判断是否显示本页 end
  },
  // computed: {
  //   isPlay: function () {
  //     if (this.play === 'profile-1' || this.play === 'corp-intro-5') {
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

    $('.profile-1 .logo').on(animationEnd, function () {
      _this.runCountUp([{ id: 'profile-1-num-0', end: _this.profile.sameBirthday }, { id: 'profile-1-num-1', end: _this.profile.sameConstellation }])
    })
    // 计数器 end
  }
}
</script>
