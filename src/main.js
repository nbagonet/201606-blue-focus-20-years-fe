import Vue from 'vue'
import App from './App'

/**
 * 配置Vue
 */
// 开启debug模式
Vue.config.debug = true
if (!Vue.config.debug) {
  console.log = () => {}
}

/**
 * 配置Mock
 */
import { initMock } from './api/mock'
initMock()

/**
 * 配置Vuex
 */
import Vuex from 'vuex'
Vue.use(Vuex)

/**
 * 配置vue-resource
 */
import Resource from 'vue-resource'
Vue.use(Resource)
// Vue.http.options.emulateJSON = true

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
