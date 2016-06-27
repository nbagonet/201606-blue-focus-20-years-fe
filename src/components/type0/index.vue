<template lang="jade">
.type-0
  //- 封面
  cover(v-if="step === 'cover'" transition="fade")

  //- 公司介绍
  corp-intro(v-if="step === 'corp-intro'" transition="fade")

  //- 信息
  profile(v-if="step === 'profile'" transition="fade")

  //- 背景音乐
  .bgaudio.play(v-show="playAudio" v-on:click="bgAudio(false)")
    audio#bgaudio.none(src="../../../static/media/0.mp3" loop)
    //- <audio id="bgaudio" src="../../../static/media/0.mp3" loop autoplay class="none"></audio>
  .bgaudio.stop(v-show="!playAudio" v-on:click="bgAudio(true)")
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import { setStep, bgAudio, bgAudioAutoPlay } from '../../vuex/action'

import Cover from '../cover'
import CorpIntro from '../corp-intro'
import Profile from '../profile'

module.exports = {
  name: 'type0',
  vuex: {
    getters: {
      step: state => state.step,
      playAudio: state => state.playAudio
    },
    actions: { setStep, bgAudio, bgAudioAutoPlay }
  },
  components: { Cover, CorpIntro, Profile },
  ready: function () {
    this.setStep('cover')
    this.bgAudioAutoPlay()
  }
}
</script>
