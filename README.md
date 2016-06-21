# 带你重返20岁 - 蓝标20周年

> 这是一个商业项目，不提供任何License。

## 页面url参数
| 参数名    | 值             | 说明                                                                         |
| --------- | -------------- | ---------------------------------------------------------------------------- |
| debug     | true           | debug模式，ajax请求将被拦截到Mock接口。                                      |
|           | 非true或不存在 | 正常模式，ajax正常请求。                                                     |
| type      | 1              | 访问模式，文案为第三人称，无需登录。                                         |
|           | 0或不存在      | 正常模式，文案为第一人称，需要登录。                                         |
| profileId | 非空           | 访问模式使用，当type=1时，profileId必须同时存在，将通过此id请求个人信息数据。|
|           | 空或不存在     | 正常模式使用。                                                               |

> **例如：**

> 正常模式：http://xxx/201606bp20/dist/

> 正常模式debug：http://xxx/201606bp20/dist/?debug=1

> 访问模式：http://xxx/201606bp20/dist/?type=1&profileId=123

> 访问模式debug：http://xxx/201606bp20/dist/?debug=1&type=1&profileId=123

## 接口

### 登录
- **地址:** /api/login
- **请求方式:** POST
- **参数:**

| 参数名   | 类型   | 说明     |
| -------- | ------ | -------- |
| id       | String | 员工编号 |
| password | String | OA密码   |

- **返回值:**

  ```
  {
    'status': {
      'code': 1000,
      'message': '成功'
    },
    'result': {
      // 姓名
      'name': '小明',
      // 性别
      // 0：男
      // 1：女
      'gender': '0',
      // 入职时间
      'entry': '2006-03-16',
      // 离职时间
      'leave': '2006-04-16',
      // 在职时长
      // 单位：天
      'serving': 31,
      // 生日
      'birthday': '1983-01-01',
      // 生日相同的人数
      'sameBirthday': 11,
      // 星座
      'constellation': '金牛',
      // 星座相同的人数
      'sameConstellation': 10,
      // 家乡
      'hometown': '北京',
      // 同乡人数
      'fellow': 10,
      // 工卡消费次数
      'consumption': 12,
      // 消费最多日期
      'popConsumption': '2006-04-01',
      // 消费最多金额
      'popConsumptionMoney': 123,
      // 加班最晚日期
      // 无加班留空
      'overDate': '2006-03-03',
      // 加班最晚时间
      // 无加班留空
      'overTime': '02:33',
      // 正常打卡记录天数
      'punchDays': 123,
      // 到访最多的地点
      'visitPlace': '北京西站南广场东',
      // 到访最多的地点的次数
      'visitNumber': 20
    }
  }
  ```

### 个人信息数据

- **地址:** /api/profile

- **请求方式:** GET

- **参数:**

| 参数名   | 类型   | 说明     |
| -------- | ------ |--------- |
| id       | String | 员工编号 |

- **返回值:** 与登录后返回的信息相同

### 公司数据

- **地址:** /api/corp

- **请求方式:** GET

- **参数:** 无

- **返回值:**

  ```
  {
    'status': {
      'code': 1000,
      'message': '成功'
    },
    'result': {
      // 最受欢迎的餐厅
      'popRestaurant': '麦当劳',
      // 餐厅光顾次数
      'popRestaurantVisit': 0,
      // 最受欢迎的食物
      'popFood': '卤肉饭',
      // 食物售出数量
      'popFoodSell': 0,
      // 90后人数
      'youngNum': 0,
      // 飞行次数
      'fly': 0,
      // 绕地球圈数
      'flyRound': 0,
      // 快递数
      'delivery': 0,
      // 车牌尾号
      'license': 0,
      // 地标
      'landmark': '大山子桥',
      // 邮件数量
      'email': 0,
      // 员工最多省市
      'provinces': ['北京', '上海', '广州'],
      // 员工最多大学
      'university': ['中国传媒大学', '北京大学', '北京联合大学'],
      // 打卡时间
      'punchTime': '9:46'
    }
  }
  ```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
