<template lang="jade">
//- loading
loading(v-if="loading || loadingAnimateing || !corpInfoLoaded")

//- 普通版
type0(v-if="!loading && !loadingAnimateing && type === '0'")
type0(v-if="!loading && !loadingAnimateing && type === '2'")

//- 分享版
type1(v-if="!loading && !loadingAnimateing && type === '1' && profileId")

post-locker(v-show="posting")
</template>

<script>
import store from './vuex/store'
import { getCorpInfo, initType } from './vuex/action'

import Loading from './components/loading'
import Type0 from './components/type0'
import Type1 from './components/type1'
import PostLocker from './components/post-locker'

export default {
  name: 'app',
  store,
  vuex: {
    getters: {
      loading: state => state.loading,
      posting: state => state.posting,
      loadingAnimateing: state => state.loadingAnimateing,
      corpInfoLoaded: state => state.corpInfoLoaded,
      isLogin: state => state.isLogin,
      type: state => state.type,
      profile: state => state.profile,
      profileId: state => state.profileId
    },
    actions: { getCorpInfo, initType }
  },
  components: { Loading, Type0, Type1, PostLocker },
  ready: function () {
    // 读取公司数据
    this.getCorpInfo(this)
    // 初始化类型
    this.initType()
  }
}
</script>

<style lang="less">
@import './less/base.less';
</style>
