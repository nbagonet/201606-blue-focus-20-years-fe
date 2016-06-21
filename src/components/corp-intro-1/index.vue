<template lang="jade">
//- .swiper-slide.corp-intro-1(v-bind:class="{ 'play': isPlay }")
.swiper-slide.corp-intro-1
  .corp-intro-inner

    .logo
    .corp-intro-box

      .title
        h2
          span.font-yahei-bold 大颜色的饮食男女

      ul.content.font-yahei.font-bold
        li
          dl
            //- dt(v-on:animationend="runCountUp([{ id: 'corp-intro-1-num-0', end: database.popRestaurantVisit }])"): span
            dt: span
            dd
              |最受蓝标人欢迎的餐厅是
              strong {{ database.popRestaurant }}
              |，过去一年被光顾了
              strong#corp-intro-1-num-0 &nbsp;
              |次！
        li
          dl
            //- dt(v-on:animationend="runCountUp([{ id: 'corp-intro-1-num-1', end: database.popFoodSell }])"): span
            dt: span
            dd
              |食堂最受欢迎的是
              br
              strong {{ database.popFood }}
              br
              |过去一年卖出了
              br
              strong#corp-intro-1-num-1 &nbsp;
              |份。
        li
          dl
            //- dt(v-on:animationend="runCountUp([{ id: 'corp-intro-1-num-2', end: database.youngNum }])"): span
            dt: span
            dd
              |而我们收获的90后小鲜肉，也已有
              strong#corp-intro-1-num-2 &nbsp;
              |枚！
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import { runCountUp } from '../../vuex/action'

module.exports = {
  name: 'corp-intro-1',
  vuex: {
    getters: {
      database: state => state.corpInfo,
      play: state => state.play
    },
    actions: { runCountUp }
  },
  computed: {
    isPlay: function () {
      if (this.play === 'corp-intro-1') {
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

    $('.corp-intro-1 .corp-intro-box dt:eq(0)').on(animationEnd, function () {
      _this.runCountUp([{ id: 'corp-intro-1-num-0', end: _this.database.popRestaurantVisit }])
    })
    $('.corp-intro-1 .corp-intro-box dt:eq(1)').on(animationEnd, function () {
      _this.runCountUp([{ id: 'corp-intro-1-num-1', end: _this.database.popFoodSell }])
    })
    $('.corp-intro-1 .corp-intro-box dt:eq(2)').on(animationEnd, function () {
      _this.runCountUp([{ id: 'corp-intro-1-num-2', end: _this.database.youngNum }])
    })
    // 计数器 end
  }
}
</script>
