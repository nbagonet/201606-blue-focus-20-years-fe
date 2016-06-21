<template lang="jade">
//- .swiper-slide.share(v-if="showThis" v-bind:class="{ 'play': isPlay }")
.swiper-slide.share(v-if="showThis")
  .share-inner.font-yahei.font-bold
    .text
      p 每个人的青春都有故事
      p 每个故事都是青春洋溢
      p 蓝标20岁&nbsp;&nbsp;不止于蓝
    .logo-b
    .button
      a.btn-0(v-on:click="share('1')" v-if="type === '0' || type === '2'") 分享你的蓝标历程
      //- a.btn-0(v-on:click="share('1')" v-if="type === '1'")
      //-   |分享
      //-   span(v-if="profile.gender === '0'") TA
      //-   span(v-if="profile.gender === '1'") TA
      //-   |的蓝标历程
      a.btn-0(v-if="type === '1'" href="?type=2") 开启我的蓝色之旅
      a.btn-1(v-on:click="share('2')") 分享蓝色通道

  .announce.font-yahei 数据量截至2016年5月，数据解释权归蓝标集团

  .share-pop-1(v-show="pop === '1'" v-on:click="hidePop")
    .tips
      |展示你
      //- span(v-if="type === '0'") 你
      //- span(v-if="type === '1'")
      //-   span(v-if="profile.gender === '0'") TA
      //-   span(v-if="profile.gender === '1'") TA
      |的蓝标20年成长历程
  .share-pop-2(v-show="pop === '2'" v-on:click="hidePop")
    .tips 邀请小伙伴一起玩
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import { setWXShare } from '../../vuex/action'

module.exports = {
  name: 'share',
  vuex: {
    getters: {
      profile: state => state.profile,
      play: state => state.play,
      type: state => state.type,
      profileId: state => state.profileId
    },
    actions: { setWXShare }
  },
  data: function () {
    return {
      pop: '',
      sharePic: 'http://201606bp20.alltosun.net/static/img/share-icon.png',
      baseUrl: window.location.href.split('?')[0]
    }
  },
  methods: {
    showPop: function (id) {
      this.$set('pop', id)
    },
    hidePop: function () {
      this.$set('pop', '')
    },
    share: function (type) {
      let _desc = ''

      if (type === '1') {
        // 分享历程
        this.showPop('1')
        if (this.profile.leave === '') {
          _desc = '时光飞逝，我已经加入蓝色大家庭' + this.profile.serving + '天，一起与蓝标共同成长'
        } else {
          _desc = '已离职（临时文案，等待提供新的）'
        }
        this.setWXShare({
          title: '蓝标带你重返20岁',
          desc: _desc,
          link: this.baseUrl + '?type=1&profileId=' + this.profileId,
          imgUrl: this.sharePic
        })
      } else if (type === '2') {
        // 分享通道
        this.showPop('2')
        this.setWXShare({
          title: '蓝标带你重返20岁',
          desc: '蓝标20年，不止于蓝，快来开启你的蓝色旅程',
          link: this.baseUrl + '?type=0',
          imgUrl: this.sharePic
        })
      }
    }
  },
  computed: {
    showThis: function () {
      if (this.type === '0') {
        return true
      } else {
        return true
      }
    },
    isPlay: function () {
      let _flagIdx1 = 6
      let _flagIdx2 = 10
      if (!this.profile.hometown && !this.profile.constellation) {
        _flagIdx1 = _flagIdx1 - 2
        _flagIdx2 = _flagIdx2 - 2
      } else {
        if ((this.profile.hometown && !this.profile.constellation) || (this.profile.constellation && !this.profile.hometown)) {
          _flagIdx1 = _flagIdx1 - 1
          _flagIdx2 = _flagIdx2 - 1
        }
      }
      if (this.play === 'profile-' + _flagIdx1 || this.play === 'corp-intro-' + _flagIdx2) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
