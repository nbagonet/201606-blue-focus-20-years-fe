<template lang="jade">
//- .swiper-slide.corp-intro-0(v-bind:class="{ 'play': isPlay }")
.swiper-slide.corp-intro-0
  .corp-intro-inner

    .logo
    .corp-intro-box

      .title
        h3
          span.font-yahei-bold 蓝色光标20年

      .timeline.font-yahei.font-bold
        dl
          dt
            span 1996
          dd
            span 蓝色光标成立
          dt
            span 1996&nbsp;-&nbsp;&nbsp;<br>2009
          dd
            span 专注公关领域，<br>成为领军企业
          dt
            span 2010
          dd
            span 深圳证券<br>交易所上市
          dt
            span 2010&nbsp;-&nbsp;&nbsp;<br>2015
          dd
            span 积极推进数字化和国际化战略，成为覆盖营销传播全产业链的综合性传播集团
          dt
            span 2016&nbsp;-
          dd
            span 开启智能营销时代
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
module.exports = {
  name: 'corp-intro-0',
  vuex: {
    getters: {
      play: state => state.play
    },
    actions: {}
  },
  computed: {
    isPlay: function () {
      if (this.play === 'corp-intro-0') {
        return true
      } else {
        return false
      }
    }
  },
  ready: function () {}
}
</script>
