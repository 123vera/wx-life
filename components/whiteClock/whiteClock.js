
// 对应api：https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html
/**
 * 需要注意的点
 * @ 时针 是跟着分针和秒针一直缓缓走的，不是定在一个数字上，比如1：15 到2:15，时针的位置不是直接从1到2 
 * @ 秒针的旋转角度 在走完一圈从360 到0 的过程，要特殊处理，否则，会反向回到起点（0）。eg：360deg-0， 0-360deg 2个方向
 * @ 时间时24小时制的，(黑盘)在换算成表盘角度时要 除以24个小单位 ，
 * */
const dayjs = require("./dayjs");

let curr_h = dayjs().get('hour') + dayjs().get('minute') / 60
let curr_m = dayjs().get('minute') + dayjs().get('second') / 60
let curr_s = dayjs().get('second')

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    currentDate: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    cHours: (curr_h / 12 - parseInt(curr_h / 12)) * 360,
    cMinutes: curr_m / 60 * 360,
    cSeconds: curr_s / 60 * 360,
  },

  ready: function () {
    this.setData({
      cHours: this.data.currentDate ? '0' : (curr_h / 12 - parseInt(curr_h / 12)) * 360,
      cMinutes: this.data.currentDate ? '0' : curr_m / 60 * 360,
      cSeconds: this.data.currentDate ? '0' : curr_s / 60 * 360,
    })
  },
  // 生命周期函数
  lifetimes: {
    // 组件被创建
    attached: function () {
      let _this = this
      this.timer = setInterval(() => {
        _this.initWhite()
      }, 1000)
    },

    // 组件被销毁
    detached: function () {
      clearInterval(this.timer)
    },
  },


  /**
   * 组件的方法列表
   */
  methods: {
    initWhite: function () {
      let _this = this
      let dateString = _this.data.currentDate ? dayjs(_this.data.currentDate) : dayjs()
      let curr_h = dateString.get('hour') + dateString.get('minute') / 60
      let curr_m = dateString.get('minute') + dateString.get('second') / 60
      let curr_s = dateString.get('second')
      // let curr_h = dayjs().get('hour') + dayjs().get('minute') / 60
      // let curr_m = dayjs().get('minute') + dayjs().get('second') / 60
      // let curr_s = dayjs().get('second')

      // 为了让时针随着分针和秒针（其余相同），需要将当前分钟和秒也转换成时，从而转换成对应的角度
      let cHours = (curr_h / 12 - parseInt(curr_h / 12)) * 360  // 当前时间 时针对应角度
      let cMinutes = curr_m / 60 * 360
      let cSeconds = curr_s / 60 * 360

      this.setData({
        ...this.data,
        cHours,
        cMinutes,
        cSeconds,
      })
    }
  },

})
