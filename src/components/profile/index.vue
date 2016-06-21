<template lang="jade">
.profile
  .swiper-container.profile-container
    .swiper-wrapper.profile-wrapper
      profile-0
      profile-1(v-if="!leave")
      profile-2(v-if="!leave")
      profile-3(v-if="!leave")
      profile-4(v-if="!leave")
      profile-5(v-if="!leave")
      share
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import Profile0 from '../profile-0'
import Profile1 from '../profile-1'
import Profile2 from '../profile-2'
import Profile3 from '../profile-3'
import Profile4 from '../profile-4'
import Profile5 from '../profile-5'
import Share from '../share'

import { initProfile } from '../../vuex/action'

module.exports = {
  name: 'profile',
  vuex: {
    getters: {
      profile: state => state.profile,
      leave: state => state.profile.leave
    },
    actions: { initProfile }
  },
  components: { Profile0, Profile1, Profile2, Profile3, Profile4, Profile5, Share },
  ready: function () {
    const _this = this
    setTimeout(function () {
      _this.initProfile()
    }, 500)
  }
}
</script>
