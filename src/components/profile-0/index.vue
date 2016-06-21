<template lang="jade">
//- .swiper-slide.profile-0(v-bind:class="{ 'play': isPlay }")
//- .swiper-slide.profile-0

//- 男，在职
profile-0-male-on(v-if="profile.gender === '0' && !profile.leave")

//- 男，离职
profile-0-male-leave(v-if="profile.gender === '0' && profile.leave")

//- 女，在职
profile-0-female-on(v-if="profile.gender === '1' && !profile.leave")

//- 女，离职
profile-0-female-leave(v-if="profile.gender === '1' && profile.leave")
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import Profile0MaleOn from '../profile-0-male-on'
import Profile0FemaleOn from '../profile-0-female-on'
import Profile0MaleLeave from '../profile-0-male-leave'
import Profile0FemaleLeave from '../profile-0-female-leave'

module.exports = {
  name: 'profile-0',
  vuex: {
    getters: {
      profile: state => state.profile,
      play: state => state.play
    },
    actions: {}
  },
  computed: {
    isPlay: function () {
      if (this.play === 'profile-0' || this.play === 'corp-intro-4') {
        return true
      } else {
        return false
      }
    }
  },
  components: { Profile0MaleOn, Profile0FemaleOn, Profile0MaleLeave, Profile0FemaleLeave },
  ready: function () {}
}
</script>
