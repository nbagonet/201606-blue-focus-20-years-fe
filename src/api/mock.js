import Mock from 'mockjs'

// 初始化Mock
export const initMock = function () {
  const _host = window.location.hostname
  if (_host.indexOf('localhost') !== -1 || _host.indexOf('192.168.') !== -1 || window.location.href.indexOf('debug') !== -1 || window.location.href.indexOf('github') !== -1) {
    // 配置Mock
    Mock.setup({
      timeout: '200-600'
    })

    // 模拟数据
    // ========

    // 登录接口
    Mock.mock(/\/api\/login/, 'post', {
      'status': {
        'code': 1000,
        'message': '成功'
      },
      'result': {
        // 姓名
        'name': () => {
          return Mock.Random.cname()
        },
        // 性别
        // 0：男
        // 1：女
        'gender': () => {
          return Mock.Random.string('01', 1)
          // return '1'
        },
        // 入职时间
        'entry': () => {
          return Mock.Random.date()
        },
        // 离职时间
        'leave': () => {
          return ''
          // return Mock.Random.date()
        },
        // 在职时长
        // 单位：天
        'serving|100-7300': 0,
        // 生日
        'birthday': () => {
          return Mock.Random.date()
        },
        // 生日相同的人数
        'sameBirthday|0-999': 0,
        // 星座
        'constellation': '金牛',
        // 星座相同的人数
        'sameConstellation|1-999': 0,
        // 家乡
        'hometown': '北京',
        // 同乡人数
        'fellow|1-999': 0,
        // 工卡消费次数
        'consumption|0-999': 0,
        // 消费最多日期
        'popConsumption': () => {
          return Mock.Random.date()
        },
        // 消费最多金额
        'popConsumptionMoney|1000-9999': 0,
        // 加班最晚日期
        'overDate': () => {
          // return ''
          return Mock.Random.date()
        },
        // 加班最晚时间
        'overTime': () => {
          // return ''
          return Mock.Random.time()
        },
        // 正常打卡记录天数
        'punchDays': 0,
        // 到访最多的地点
        'visitPlace': '渔阳饭店',
        // 到访最多的地点的次数
        'visitNumber': '123'
      }
    })
    // Mock.mock(/\/api\/login/, 'post', {
    //   'status': {
    //     'code': 1000,
    //     'message': 'success'
    //   },
    //   'result': {
    //     'name': '薛菲',
    //     'gender': '1',
    //     'entry': '2013-04-09',
    //     'leave': '',
    //     'serving': '1162',
    //     'birthday': '1980-01-16',
    //     'sameBirthday': '2',
    //     'constellation': '魔羯座',
    //     'sameConstellation': '625',
    //     'hometown': '山东',
    //     'fellow': '379',
    //     'consumption': '155',
    //     'popConsumption': '2016-01-19',
    //     'popConsumptionMoney': 132,
    //     'overDate': '',
    //     'overTime': '',
    //     'punchDays': '214',
    //     'visitPlace': '',
    //     'visitNumber': '0'
    //   }
    // })

    // 公司数据资料接口
    Mock.mock(/\/api\/corp(.*)/, 'get', {
      'status': {
        'code': 1000,
        'message': '成功'
      },
      'result': {
        // 最受欢迎的餐厅
        'popRestaurant': '麦当劳',
        // 餐厅光顾次数
        'popRestaurantVisit|1000-9999': 0,
        // 最受欢迎的食物
        'popFood': '卤肉饭',
        // 食物售出数量
        'popFoodSell|1000-9999': 0,
        // 90后人数
        'youngNum|1000-9999': 0,
        // 飞行次数
        'fly|1000-9999': 0,
        // 绕地球圈数
        'flyRound|10-99': 0,
        // 快递数
        'delivery|10000-99999': 0,
        // 车牌尾号
        'license|0-9': 0,
        // 地标
        'landmark': '大山子桥',
        // 邮件数量
        'email|1000000-9999999': 0,
        // 员工最多省市
        'provinces': ['北京', '上海', '广州'],
        // 员工最多大学
        'university': ['中国传媒大学', '北京大学', '北京联合大学'],
        // 打卡时间
        'punchTime': '9:46'
      }
    })

    // 个人数据资料接口
    Mock.mock(/\/api\/profile(.*)/, 'get', {
      'status': {
        'code': 1000,
        'message': '成功'
      },
      'result': {
        // 姓名
        'name': () => {
          // return ''
          return Mock.Random.cname()
        },
        // 性别
        // 0：男
        // 1：女
        'gender': () => {
          return Mock.Random.string('01', 1)
        },
        // 入职时间
        'entry': () => {
          return Mock.Random.date()
        },
        // 离职时间
        'leave': () => {
          // return ''
          return Mock.Random.date()
        },
        // 在职时长
        // 单位：天
        'serving|1-7300': 0,
        // 生日
        'birthday': () => {
          return Mock.Random.date()
        },
        // 生日相同的人数
        'sameBirthday|0-999': 0,
        // 星座
        'constellation': '金牛',
        // 'constellation': '',
        // 星座相同的人数
        'sameConstellation|1-999': 0,
        // 家乡
        'hometown': '北京',
        // 同乡人数
        'fellow|1-999': 0,
        // 工卡消费次数
        'consumption|0-999': 0,
        // 消费最多日期
        'popConsumption': () => {
          return Mock.Random.date()
        },
        // 消费最多金额
        'popConsumptionMoney|1000-9999': 0,
        // 加班最晚日期
        'overDate': () => {
          return Mock.Random.date()
        },
        // 加班最晚时间
        'overTime': () => {
          return Mock.Random.time()
        },
        // 正常打卡记录天数
        'punchDays': 365,
        // 到访最多的地点
        'visitPlace': '喇叭沟门满族乡',
        // 到访最多的地点的次数
        'visitNumber|10-999': 0
      }
    })

    // ========
  }
}
