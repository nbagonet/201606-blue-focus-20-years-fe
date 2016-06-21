<template lang="jade">
//- .swiper-slide.profile-4(v-bind:class="{ 'play': isPlay }")
.swiper-slide.profile-4(v-if="show")
  //- .logo(v-on:animationend="runCountUp([{ id: 'profile-4-num-0', end: profile.punchDays }])")
  .logo

  .text
    p(v-if="profile.overDate && profile.overTime")
      |记得,
      br
      strong {{ profile.overDate.split('-')[0] }}
      |年
      strong {{ profile.overDate.split('-')[1] }}
      |月
      strong {{ profile.overDate.split('-')[2] }}
      |日,
      br
      span(v-if="type === '0' || type === '2'") 你
      span(v-if="type === '1'")
        span(v-if="profile.gender === '0'") TA
        span(v-if="profile.gender === '1'") TA
      |日以继夜, 夜以继日的付出,
      br
      |直到
      strong {{ profile.overTime }}
      |才离开公司。

    p(v-if="!profile.overDate && !profile.overTime && (profile.punchDays || profile.punchDays !== '0')")
      strong#profile-4-num-0
      |天的正常打卡记录,
      br
      |记录着
      span(v-if="type === '0' || type === '2'") 你
      span(v-if="type === '1'")
        span(v-if="profile.gender === '0'") TA
        span(v-if="profile.gender === '1'") TA
      |工作中点点滴滴的
      br
      |付出。

    p(v-if="!profile.overDate && !profile.overTime && (!profile.punchDays || profile.punchDays === '0')")
      span(v-if="type === '0' || type === '2'") 你
      span(v-if="type === '1'")
        span(v-if="profile.gender === '0'") TA
        span(v-if="profile.gender === '1'") TA
      strong 从未
      |打过的工卡,
      br
      |还在静静地等着
      span(v-if="type === '0' || type === '2'") 你
      span(v-if="type === '1'")
        span(v-if="profile.gender === '0'") TA
        span(v-if="profile.gender === '1'") TA
      |去打ta。

  //- 会议界面
  .meeting(v-if="profile.overDate || (profile.punchDays || profile.punchDays !== '0')")
    //- 灯
    .light
      .light-l
      .light-m
      .light-r
    //- 桌子
    .table
      //- 咖啡
      .coffee
      //- 人
      - for(var i=0;i<6;i++)
        div(class="people-#{i}")

  //- 打卡界面
  .punch(v-if="!profile.overDate && !profile.overTime && (!profile.punchDays || profile.punchDays === '0')")
    .building
    .people
    .card
    .bubble
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import { runCountUp, showSlide } from '../../vuex/action'

module.exports = {
  name: 'profile-4',
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
  // computed: {
  //   isPlay: function () {
  //     let _flagIdx1 = 4
  //     let _flagIdx2 = 8
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
  ready: function () {
    // 计数器 begin
    const $ = window.$
    const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
    const _this = this

    $('.profile-4 .logo').on(animationEnd, function () {
      _this.runCountUp([{ id: 'profile-4-num-0', end: _this.profile.punchDays }])
    })
    // 计数器 end
  }
}
</script>
