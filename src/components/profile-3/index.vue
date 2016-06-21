<template lang="jade">
//- .swiper-slide.profile-3(v-if="showThis" v-bind:class="{ 'play': isPlay }")
.swiper-slide.profile-3(v-if="show")
  //- .logo(v-on:animationend="runCountUp([{ id: 'profile-3-num-0', end: profile.consumption }, { id: 'profile-3-num-1', end: profile.popConsumptionMoney }])")
  .logo

  .text
    p
      |过去一年
      br
      span(v-if="type === '0' || type === '2'") 你
      span(v-if="type === '1'")
        span(v-if="profile.gender === '0'") TA
        span(v-if="profile.gender === '1'") TA
      |的工卡消费了
      strong#profile-3-num-0
      |次,
      br
      |在
      strong {{ profile.popConsumption.split('-')[0] }}
      |年
      strong {{ profile.popConsumption.split('-')[1] }}
      |月
      strong {{ profile.popConsumption.split('-')[2] }}
      |日,
      br
      span(v-if="type === '0' || type === '2'") 你
      span(v-if="type === '1'")
        span(v-if="profile.gender === '0'") TA
        span(v-if="profile.gender === '1'") TA
      |挥霍了
      strong#profile-3-num-1
      |软妹币。

  .hand
  .desk
  - for(var i=0; i<8;i++)
    div(class="food-#{i}")
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import { runCountUp, showSlide } from '../../vuex/action'

module.exports = {
  name: 'profile-3',
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
    this.showSlide([this.type, this.profile.popConsumption, this.profile.popConsumptionMoney], this)
    // 判断是否显示本页 end
  },
  // computed: {
  //   showThis: function () {
  //     if (Number(this.profile.consumption) > 0) {
  //       return true
  //     } else {
  //       return false
  //     }
  //   },
  //   isPlay: function () {
  //     let _flagIdx1 = 3
  //     let _flagIdx2 = 7
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

    $('.profile-3 .logo').on(animationEnd, function () {
      _this.runCountUp([{ id: 'profile-3-num-0', end: _this.profile.consumption }, { id: 'profile-3-num-1', end: _this.profile.popConsumptionMoney }])
    })
    // 计数器 end
  }
}
</script>
