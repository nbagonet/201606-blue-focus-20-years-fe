<template lang="jade">
.type-1
  //- 封面
  cover(v-if="step === 'cover'" transition="fade")

  //- 公司介绍
  corp-intro(v-if="step === 'corp-intro'" transition="fade")

  //- 信息
  //- profile(v-if="step === 'profile'" transition="fade")
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import { setStep } from '../../vuex/action'

import Cover from '../cover'
import CorpIntro from '../corp-intro'
import Profile from '../profile'

module.exports = {
  name: 'type1',
  vuex: {
    getters: {
      step: state => state.step
    },
    actions: { setStep }
  },
  components: { Cover, CorpIntro, Profile },
  created: function () {
    this.setStep('cover')
  }
}
</script>
