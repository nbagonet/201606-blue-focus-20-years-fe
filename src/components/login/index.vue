<template lang="jade">
//- .swiper-slide.login(v-if="type === '0'" v-bind:class="{ 'play': isPlay }")
.swiper-slide.login(v-if="type === '0' || type === '2'")

  .logo
  .intro
    p 输入员工编号
    p 开启你的专属蓝色密道

  .login-form
    .input
      input(type="text" name="id" v-model="state.profileId" placeholder="输入员工编号" v-on:focus="setSize")
    .input
      input(type="password" name="password" v-model="state.password" placeholder="输入OA密码(财务系统)" v-on:focus="setSize")
    .help *离职员工输入工号即可登录
    .button
      button(type="button" v-on:click="login(this)") 开启
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import $ from 'jquery'
import { login } from '../../vuex/action'

module.exports = {
  name: 'login',
  vuex: {
    getters: {
      play: state => state.play,
      state: state => state,
      type: state => state.type
    },
    actions: { login }
  },
  methods: {
    setSize: function () {
      // const _vw = $(window).width() / 100
      // const _vh = $(window).height() / 100
      const _obj = $('input[name="id"]')
      const _w = _obj.width()
      const _h = _obj.height()
      const _fontSize = _obj.css('font-size')
      const _textIndent = _obj.css('text-indent')
      const _paddingTop = _obj.css('padding-top')
      const _paddingBottom = _obj.css('padding-bottom')
      const _paddingLeft = _obj.css('padding-left')
      const _paddingRight = _obj.css('padding-right')

      $('input[name="id"], input[name="password"]').width(_w)
      $('input[name="id"], input[name="password"]').height(_h)
      $('input[name="id"], input[name="password"]').css({
        'font-size': _fontSize,
        'text-indent': _textIndent,
        'letter-spacing': _textIndent,
        'padding-top': _paddingTop,
        'padding-bottom': _paddingBottom,
        'padding-left': _paddingLeft,
        'padding-right': _paddingRight
      })
    }
  },
  // computed: {
  //   isPlay: function () {
  //     if (this.play === 'corp-intro-4') {
  //       return true
  //     } else {
  //       return false
  //     }
  //   }
  // },
  ready: function () {
    this.setSize()
  }
}
</script>
