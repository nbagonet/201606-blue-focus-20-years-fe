import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  loading: true,
  loadingAnimateing: true,
  isLogin: false,
  posting: false,
  playAudio: true,

  // 类别：
  // 0：自己看
  // 1：他人看
  type: '0',

  // 动画播放标识，className
  play: '',

  // 步骤
  step: '',

  // 公司资料
  corpInfoLoaded: false,
  corpInfo: {
    // 最受欢迎的餐厅
    popRestaurant: '',
    // 餐厅光顾次数
    popRestaurantVisit: '',
    // 最受欢迎的食物
    popFood: '',
    // 食物售出数量
    popFoodSell: '',
    // 90后人数
    youngNum: '',
    // 飞行次数
    fly: '',
    // 绕地球圈数
    flyRound: '',
    // 快递数
    delivery: '',
    // 车牌尾号
    license: '',
    // 地标
    landmark: '',
    // 邮件数量
    email: '',
    // 员工最多省市
    provinces: [],
    // 员工最多大学
    university: [],
    // 打卡时间
    punchTime: ''
  },

  // 个人资料
  profileId: '',
  password: '',
  profile: {
    // 姓名
    name: '',
    // 性别
    // 0：男
    // 1：女
    gender: '',
    // 入职时间
    entry: '',
    // 离职时间
    leave: '',
    // 在职时长
    // 单位：天
    serving: '',
    // 生日
    birthday: '',
    // 生日相同的人数
    sameBirthday: '',
    // 星座
    constellation: '',
    // 星座相同的人数
    sameConstellation: '',
    // 家乡
    hometown: '',
    // 同乡人数
    fellow: '',
    // 工卡消费次数
    consumption: '',
    // 消费最多日期
    popConsumption: '',
    // 消费最多金额
    popConsumptionMoney: '',
    // 加班最晚日期
    overDate: '',
    // 加班最晚时间
    overTime: '',
    // 正常打卡记录天数
    punchDays: '',
    // 到访最多的地点
    visitPlace: '',
    // 到访最多的地点的次数
    visitNumber: ''
  }
}

const mutations = {
  SET_LOADING (state, loading) {
    state.loading = loading
    // state.loading = true
  },

  SET_LOADING_ANIMATING (state, status) {
    state.loadingAnimateing = status
  },

  UPDATE_PROGRESS (state, progress) {
    state.progress = progress
  },

  SET_TYPE (state, type) {
    state.type = type
  },

  SET_LOGIN (state, isLogin) {
    state.isLogin = isLogin
  },

  UPDATE_CORP_INFO (state, info) {
    for (let key in info) {
      state.corpInfo[key] = info[key]
    }
  },

  CORP_INFO_LOADED (state, loaded) {
    state.corpInfoLoaded = loaded
  },

  UPDATE_PROFILE (state, profile) {
    for (let key in profile) {
      state.profile[key] = profile[key]
    }
  },

  SET_PROFILE_ID (state, id) {
    state.profileId = id
  },

  SET_PLAY_TAG (state, tag) {
    state.play = tag
  },

  SET_STEP (stat, step) {
    state.step = step
  },

  SET_POSTING (state, posting) {
    state.posting = posting
  },

  PLAY_AUDIO (state, play) {
    state.playAudio = play
  }
}

export default new Vuex.Store({
  modules: {},
  state,
  mutations
})
