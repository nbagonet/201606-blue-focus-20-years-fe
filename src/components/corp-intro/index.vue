<template lang="jade">
//- .corp-intro(v-bind:class="{ 'play': isPlay }")
.corp-intro
  .swiper-container.corp-intro-container
    .swiper-wrapper.corp-intro-wrapper

      corp-intro-0
      corp-intro-1
      corp-intro-2
      corp-intro-3
      login(v-if="type === '0'")
      login(v-if="type === '2'")

      profile-0(v-if="type === '1'")
      profile-1(v-if="type === '1'")
      profile-2(v-if="type === '1'")
      profile-3(v-if="type === '1'")
      profile-4(v-if="type === '1'")
      profile-5(v-if="type === '1'")
      share(v-if="type === '1'")
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import CorpIntro0 from '../corp-intro-0'
import CorpIntro1 from '../corp-intro-1'
import CorpIntro2 from '../corp-intro-2'
import CorpIntro3 from '../corp-intro-3'
import Login from '../login'

import Profile0 from '../profile-0'
import Profile1 from '../profile-1'
import Profile2 from '../profile-2'
import Profile3 from '../profile-3'
import Profile4 from '../profile-4'
import Profile5 from '../profile-5'
import Share from '../share'

import { initCorpIntro, initProfile } from '../../vuex/action'

module.exports = {
  name: 'corp-intro',
  vuex: {
    getters: {
      play: state => state.play,
      type: state => state.type,
      profile: state => state.profile
    },
    actions: { initCorpIntro, initProfile }
  },
  components: { CorpIntro0, CorpIntro1, CorpIntro2, CorpIntro3, Login, Profile0, Profile1, Profile2, Profile3, Profile4, Profile5, Share },
  computed: {
    isPlay: function () {
      if (this.play === 'corp-intro') {
        return true
      } else {
        return false
      }
    }
  },
  ready: function () {
    // 初始化swiper
    // if (this.type === '1') {
    //   this.initProfile()
    // } else if (this.type === '2') {
    //   this.initCorpIntro('2')
    // } else {
    //   this.initCorpIntro()
    // }
    if (this.type === '2') {
      this.initCorpIntro('2')
    } else {
      this.initCorpIntro()
    }
  }
}
</script>
