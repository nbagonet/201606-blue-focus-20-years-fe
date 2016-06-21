<template lang="jade">
.loading
  .loading-box

    .progress
      .logo
      .bar#loading-progress-bar

    .title
      h2
        span.font-yahei.font-bold 蓝色光标20周年
      small.font-yahei(v-show="loading") loading...
      small(v-show="!loading") &nbsp;

    ul.subtitle.font-yahei
      li.animated.none
        |20岁的
        //- span(v-if="type === '0'") 你
        span(v-if="type === '1'")
          span(v-if="profile.gender === '0'") TA
          span(v-if="profile.gender === '1'") TA
        span(v-else) 你
        |，会勇敢追梦
      li.animated.none
        |20岁的
        //- span(v-if="type === '0'") 你
        span(v-if="type === '1'")
          span(v-if="profile.gender === '0'") TA
          span(v-if="profile.gender === '1'") TA
        span(v-else) 你
        |，会青春萌动
      li.animated.none
        |20岁的
        //- span(v-if="type === '0'") 你
        span(v-if="type === '1'")
          span(v-if="profile.gender === '0'") TA
          span(v-if="profile.gender === '1'") TA
        span(v-else) 你
        |，会无所顾忌
      li.animated.none
        |20岁的
        //- span(v-if="type === '0'") 你
        span(v-if="type === '1'")
          span(v-if="profile.gender === '0'") TA
          span(v-if="profile.gender === '1'") TA
        span(v-else) 你
        |，会大胆开创

</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import { loadImages, getProfile, getWXInfo, initType } from '../../vuex/action'

module.exports = {
  name: 'loading',
  vuex: {
    getters: {
      loading: state => state.loading,
      type: state => state.type,
      profile: state => state.profile
    },
    actions: { loadImages, getProfile, getWXInfo, initType }
  },
  ready: function () {
    // 加载素材
    this.loadImages()
    // 初始化类型
    this.initType()
    // 加载个人信息
    if (this.type === '1') {
      this.getProfile(this)
    }
    // 配置微信jssdk
    this.getWXInfo(this)
  }
}
</script>
