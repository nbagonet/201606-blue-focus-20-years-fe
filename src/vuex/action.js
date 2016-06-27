import { APIError, handleResponse } from '../api'
import Swiper from 'swiper'
// import CountUp from 'vue-countup'
const $ = window.$

/**
 * 加载素材
 * @param  {[type]} {     dispatch      [description]
 * @param  {[type]} state }             [description]
 * @return {[type]}       [description]
 */
export const loadImages = ({ dispatch, state }) => {
  // 初始化圆环progress begin
  $('#loading-progress-bar').circleProgress({
    value: 0,
    size: 512,
    startAngle: 0,
    reverse: true,
    thickness: 'auto',
    lineCap: 'butt',
    fill: { gradient: ['#1a79c2', '#3392ce', '#1a79c2'] },
    emptyFill: 'rgba(255,255,255,1)',
    animation: { duration: 2500, easing: 'linear' },
    animationStartValue: 0.0
  })
  // 初始化圆环progress end

  // 开始加载图片素材 begin
  const _baseUrl = '/static/img/1/'
  // const _suffix = '.png?_v=' + new Date().getTime()
  const _suffix = '.png'
  const _picNumber = 75
  const _loader = new window.PxLoader()

  for (let i = 0; i <= _picNumber; i++) {
    const _pxImage = new window.PxLoaderImage(_baseUrl + i + _suffix)
    _pxImage.imageNumber = i + 1
    _loader.add(_pxImage)
  }

  _loader.addProgressListener((e) => {
    const _progress = e.completedCount / e.totalCount

    dispatch('SET_LOADING', true)
    $('#loading-progress-bar').circleProgress('value', _progress)
    console.log('加载素材：' + e.completedCount + '/' + e.totalCount)

    if (_progress >= 1) {
      dispatch('SET_LOADING', false)
    }
  })

  _loader.start()
  // 开始加载图片素材 end

  // 副标题动画 begin
  const _subTitle = $('.loading .subtitle > li')
  _subTitle.each(function (idx, el) {
    const _this = $(this)
    const _animateClass = 'fadeInUp'
    if (idx === 0) {
      setTimeout(() => {
        _this.removeClass('none').addClass(_animateClass)
      }, 500)
    } else {
      _subTitle.eq(idx - 1)
      .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
        _this.removeClass('none').addClass(_animateClass)

        if (idx === 3) {
          setTimeout(() => {
            dispatch('SET_LOADING_ANIMATING', false)
          }, 1000)
        }
      })
    }
  })
  // 副标题动画 end
}

/**
 * 获取公司信息
 * @param  {[type]} {         dispatch      [description]
 * @param  {[type]} state     }             [description]
 * @param  {[type]} component [description]
 * @return {[type]}           [description]
 */
export const getCorpInfo = ({ dispatch, state }, component) => {
  const _port = '/api/corp'
  const _params = {}

  component.$http.get(_port, _params)
  .then(function (response) {
    handleResponse(
      response,
      function (result) {
        console.log(result, JSON.stringify(result))
        dispatch('UPDATE_CORP_INFO', result)
        dispatch('CORP_INFO_LOADED', true)
      },
      function (status) {
        // 输出错误
        window.alert(status.message)
        APIError(_port, status.code, status.message)
      }
    )
  },
  function (response) {
    // 弹出提示
    window.alert('数据读取错误，请刷新页面重试')
  })
}

/**
 * 获取url参数值
 * @param  {string} name 参数名
 * @return {string}      参数值
 */
export const getQueryString = (name) => {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  var result = window.location.search.substr(1).match(reg)
  return result ? decodeURIComponent(result[2]) : null
}

/**
 * 初始化类型
 * @param  {[type]} {     dispatch      [description]
 * @param  {[type]} state }             [description]
 * @return {[type]}       [description]
 */
export const initType = ({ dispatch, state }) => {
  const _type = getQueryString('type') || '0'
  const _profileId = getQueryString('profileId') || ''

  console.log('类型：' + _type + '，资料id：' + _profileId)

  dispatch('SET_TYPE', _type)
  dispatch('SET_PROFILE_ID', _profileId)
}

/**
 * 设置动画播放标识
 * @param  {[type]} {       dispatch      [description]
 * @param  {[type]} state   }             [description]
 * @param  {[type]} playTag [description]
 * @return {[type]}         [description]
 */
export const setPlayTag = ({ dispatch, state }, playTag) => {
  dispatch('SET_PLAY_TAG', playTag)
}

/**
 * 设置步骤
 * @param  {[type]} {     dispatch      [description]
 * @param  {[type]} state }             [description]
 * @param  {[type]} step  [description]
 * @return {[type]}       [description]
 */
export const setStep = ({ dispatch, state }, step) => {
  dispatch('SET_STEP', step)
}

/**
 * 初始化公司信息
 * @param  {[type]} {     dispatch      [description]
 * @param  {[type]} state }             [description]
 * @return {[type]}       [description]
 */
export const initCorpIntro = ({ dispatch, state }, type) => {
  let _initialSlide = 0
  if (Number(type) === 2) {
    console.log('直接跳转到login')
    _initialSlide = 4
  }
  const mySwiper = new Swiper('.corp-intro-container', {
    direction: 'vertical',
    loop: false,
    effect: 'slide',
    initialSlide: _initialSlide,
    keyboardControl: true,
    onInit: (swiper) => {
      console.log('初始化公司信息')
      $('.corp-intro-container').find('.swiper-slide').removeClass('play')
      $('.corp-intro-container').find('.swiper-slide').eq(swiper.activeIndex).addClass('play')
      // setPlayTag({ dispatch, state }, 'corp-intro-' + swiper.activeIndex)
    },
    onTransitionEnd: (swiper) => {
      $('.corp-intro-container').find('.swiper-slide').removeClass('play')
      $('.corp-intro-container').find('.swiper-slide').eq(swiper.activeIndex).addClass('play')
      // setPlayTag({ dispatch, state }, 'corp-intro-' + swiper.activeIndex)
    }
  })
  console.log('初始化公司介绍slider', mySwiper)
}

/**
 * 计数器
 * @param  {[type]} {     dispatch      [description]
 * @param  {[type]} state }             [description]
 * @param  {[type]} id    [description]
 * @param  {[type]} end   [description]
 * @return {[type]}       [description]
 */
export const runCountUp = ({ dispatch, state }, obj) => {
  const _conf = {
    useEasing: true,
    useGrouping: true,
    separator: '',
    decimal: '.',
    prefix: '',
    suffix: ''
  }
  for (let i = 0; i < obj.length; i++) {
    if (document.getElementById(obj[i].id)) {
      let _countUp = new window.CountUp(obj[i].id, 0, obj[i].end, 0, 2.5, _conf)
      _countUp.start()
    }
  }
}

/**
 * 登录
 * @param  {[type]} {         dispatch      [description]
 * @param  {[type]} state     }             [description]
 * @param  {[type]} component [description]
 * @return {[type]}           [description]
 */
export const login = ({ dispatch, state }, component) => {
  const _port = '/api/login'
  const _params = {
    id: state.profileId,
    password: state.password
  }

  dispatch('SET_POSTING', true)

  component.$http.post(_port, _params)
  .then(function (response) {
    handleResponse(
      response,
      function (result) {
        console.log(result, JSON.stringify(result))
        dispatch('UPDATE_PROFILE', result)
        dispatch('SET_POSTING', false)
        dispatch('SET_LOGIN', true)
        setStep({ dispatch, state }, 'profile')
      },
      function (status) {
        // 输出错误
        window.alert(status.message)
        APIError(_port, status.code, status.message)
        dispatch('SET_POSTING', false)
        dispatch('SET_LOGIN', false)
      }
    )
  },
  function (response) {
    // 弹出提示
    window.alert('登录失败，请刷新页面重试')
    dispatch('SET_POSTING', false)
    dispatch('SET_LOGIN', false)
  })
}

/**
 * 初始化个人信息slider
 * @param  {[type]} {     dispatch      [description]
 * @param  {[type]} state }             [description]
 * @return {[type]}       [description]
 */
export const initProfile = ({ dispatch, state }) => {
  const mySwiper = new Swiper('.profile-container', {
    direction: 'vertical',
    loop: false,
    effect: 'slide',
    initialSlide: 0,
    keyboardControl: true,
    onInit: (swiper) => {
      console.log(swiper.slides)
      // setPlayTag({ dispatch, state }, 'profile-' + swiper.activeIndex)
      $('.profile-container').find('.swiper-slide').removeClass('play')
      $('.profile-container').find('.swiper-slide').eq(swiper.activeIndex).addClass('play')
    },
    onTransitionEnd: (swiper) => {
      // setPlayTag({ dispatch, state }, 'profile-' + swiper.activeIndex)
      $('.profile-container').find('.swiper-slide').removeClass('play')
      $('.profile-container').find('.swiper-slide').eq(swiper.activeIndex).addClass('play')
      console.log('进度：' + swiper.progress)
    }
  })
  console.log('初始化个人信息slider', mySwiper)
}

/**
 * 获取用户信息
 * @param  {[type]} {         dispatch      [description]
 * @param  {[type]} state     }             [description]
 * @param  {[type]} component [description]
 * @return {[type]}           [description]
 */
export const getProfile = ({ dispatch, state }, component) => {
  const _port = '/api/profile'
  const _params = {
    id: state.profileId
  }
  console.log(state.profileId)

  dispatch('SET_LOADING', true)

  component.$http.get(_port, _params)
  .then(function (response) {
    handleResponse(
      response,
      function (result) {
        console.log(result, JSON.stringify(result))
        dispatch('UPDATE_PROFILE', result)
        dispatch('SET_LOADING', false)
        setStep({ dispatch, state }, 'profile')
      },
      function (status) {
        // 输出错误
        window.alert(status.message)
        APIError(_port, status.code, status.message)
        dispatch('SET_LOADING', false)
      }
    )
  },
  function (response) {
    // 弹出提示
    window.alert('获取数据失败，请刷新页面重试')
    dispatch('SET_POSTING', false)
  })
}

/**
 * 获取微信jssdk需要的一些内容
 * @param  {[type]} {         dispatch      [description]
 * @param  {[type]} state     }             [description]
 * @param  {[type]} component [description]
 * @return {[type]}           [description]
 */
export const getWXInfo = ({ dispatch, state }, component) => {
  const _port = 'http://happymove.ovpp.cn/weixin/api/getticketjson?jsoncallback='
  const _params = {
    url: window.location.href
  }

  component.$http.jsonp(_port, _params, { jsonp: 'jsoncallback' })
  .then(function (response) {
    configWX({ dispatch, state }, response.data)
  })
}

/**
 * 配置微信jssdk
 * @param  {[type]} {     dispatch      [description]
 * @param  {[type]} state }             [description]
 * @param  {[type]} data  [description]
 * @return {[type]}       [description]
 */
const configWX = ({ dispatch, state }, data) => {
  const _appId = data.appId
  const _timestamp = data.timestamp
  const _nonceStr = data.nonceStr
  const _signature = data.signature

  window.wx.config({
    debug: false,
    appId: _appId,
    timestamp: _timestamp,
    nonceStr: _nonceStr,
    signature: _signature,
    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
  })
}

/**
 * 配置微信分享内容
 * @param  {[type]} {     dispatch      [description]
 * @param  {[type]} state }             [description]
 * @param  {[type]} conf  [description]
 * @return {[type]}       [description]
 */
export const setWXShare = ({ dispatch, state }, conf) => {
  window.wx.onMenuShareTimeline({
    title: conf.title,
    desc: conf.desc,
    link: conf.link,
    imgUrl: conf.imgUrl,
    success: function () {},
    cancel: function () {}
  })

  window.wx.onMenuShareAppMessage({
    title: conf.title,
    desc: conf.desc,
    link: conf.link,
    imgUrl: conf.imgUrl,
    type: 'link',
    dataUrl: '',
    success: function () {},
    cancel: function () {}
  })
}

/**
 * 判断是否显示slide
 * @param  {[type]} {         dispatch      [description]
 * @param  {[type]} state     }             [description]
 * @param  {[type]} fields    [description]
 * @param  {[type]} component [description]
 * @return {[type]}           [description]
 */
export const showSlide = ({ dispatch, state }, fields, component) => {
  // console.log(component)
  for (let i = 0; i < fields.length; i++) {
    if (fields[i]) {
      component.$set('show', true)
      console.log('可以显示')
    } else {
      component.$set('show', false)
      console.log('不能显示', fields[i], component)
      return
    }
  }
}

export const bgAudio = ({dispatch, state}, play) => {
  dispatch('PLAY_AUDIO', play)
  if (!play) {
    console.log('停止播放背景音乐')
    $('#bgaudio')[0].pause()
  } else {
    console.log('开始播放背景音乐')
    $('#bgaudio')[0].play()
  }
}

export const bgAudioAutoPlay = () => {
  $('#bgaudio')[0].play()
  document.addEventListener('WeixinJSBridgeReady', function () {
    window.WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
      $('#bgaudio')[0].play()
    })
  }, false)
  // $(document).on('touchstart', function () {
  $('#bgaudio')[0].play()
  // })
}
