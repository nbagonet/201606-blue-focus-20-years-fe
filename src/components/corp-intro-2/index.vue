<template lang="jade">
//- .swiper-slide.corp-intro-2(v-bind:class="{ 'play': isPlay }")
.swiper-slide.corp-intro-2
  .corp-intro-inner

    .logo
    .corp-intro-box

      .title
        h2
          span.font-yahei-bold 大颜色的来来往往

      ul.content.font-yahei.font-bold
        li
          dl
            //- dt(v-on:animationend="runCountUp([{ id: 'corp-intro-2-num-0', end: database.fly }, { id: 'corp-intro-2-num-1', end: database.flyRound }])"): span
            dt: span
            dd
              |过去一年蓝标人共飞行了
              strong#corp-intro-2-num-0 {{ database.fly }}
              |次，飞行距离可以环绕地球
              strong#corp-intro-2-num-1 {{ database.flyRound }}
              |圈。
        li
          dl
            //- dt(v-on:animationend="runCountUp([{ id: 'corp-intro-2-num-2', end: database.delivery }])"): span
            dt: span
            dd
              |过去一年蓝标人共寄出快递
              strong#corp-intro-2-num-2 {{ database.delivery }}
              |次，“东南门取快递”看起来更多哦!
        li
          dl
            dt: span
            dd
              |数字
              strong {{ database.license }}
              |是蓝标人最爱的车尾号，
              strong {{ database.landmark }}
              |是他们最想炸掉的地标！
        li
          dl
            //- dt(v-on:animationend="runCountUp([{ id: 'corp-intro-2-num-3', end: database.email }])"): span
            dt: span
            dd
              |过去一年@bluefocus
              br
              |接收和发送邮件
              br
              strong#corp-intro-2-num-3 {{ database.email }}
              |封，
              br
              |沟通的路上没有拥堵!
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import { runCountUp } from '../../vuex/action'

module.exports = {
  name: 'corp-intro-2',
  vuex: {
    getters: {
      database: state => state.corpInfo,
      play: state => state.play
    },
    actions: { runCountUp }
  },
  computed: {
    isPlay: function () {
      if (this.play === 'corp-intro-2') {
        return true
      } else {
        return false
      }
    }
  },
  ready: function () {
    // 计数器 begin
    const $ = window.$
    const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
    const _this = this

    $('.corp-intro-2 .corp-intro-box dt:eq(0)').on(animationEnd, function () {
      _this.runCountUp([{ id: 'corp-intro-2-num-0', end: _this.database.fly }, { id: 'corp-intro-2-num-1', end: _this.database.flyRound }])
    })
    $('.corp-intro-2 .corp-intro-box dt:eq(1)').on(animationEnd, function () {
      _this.runCountUp([{ id: 'corp-intro-2-num-2', end: _this.database.delivery }])
    })
    $('.corp-intro-2 .corp-intro-box dt:eq(2)').on(animationEnd, function () {
      _this.runCountUp([{ id: 'corp-intro-2-num-3', end: _this.database.email }])
    })
    // 计数器 end
  }
}
</script>
