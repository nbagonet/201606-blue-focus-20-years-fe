<template lang="jade">
//- .swiper-slide.corp-intro-3(v-bind:class="{ 'play': isPlay }")
.swiper-slide.corp-intro-3
  .corp-intro-inner

    .logo
    .corp-intro-box

      .title
        h2
          span.font-yahei-bold 特别鸣谢

      ul.content.font-yahei.font-bold
        li
          dl
            dt: span
            dd
              |感谢
              strong {{ database.provinces[0] }}
              |，
              strong {{ database.provinces[1] }}
              |，
              strong {{ database.provinces[2] }}
              |，你们养育了最多的蓝标人！
        li
          dl
            dt: span
            dd
              |感谢<br>
              strong {{ database.university[0] }}
              |，<br>
              strong {{ database.university[1] }}
              |，<br>
              strong {{ database.university[2] }}
              |，<br>
              |你们培育了最多<br>的蓝标人！
        li
          dl
            dt: span
            dd
              |向&nbsp;
              strong {{ database.punchTime }}
              |&nbsp;的打卡机致敬！这时的你们最辛苦，谁让我们都是不爱迟到的好员工!
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import { runCountUp } from '../../vuex/action'

module.exports = {
  name: 'corp-intro-3',
  vuex: {
    getters: {
      database: state => state.corpInfo,
      play: state => state.play
    },
    actions: { runCountUp }
  },
  computed: {
    isPlay: function () {
      if (this.play === 'corp-intro-3') {
        return true
      } else {
        return false
      }
    }
  },
  ready: function () {}
}
</script>
