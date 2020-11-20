// components/blackClock/blackClock.js

// 对应api：https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html
/**
 * 需要注意的点
 * @ 时针 是跟着分针和秒针一直缓缓走的，不是定在一个数字上，比如1：15 到2:15，时针的位置不是直接从1到2 
 * @ 秒针的旋转角度 在走完一圈从360 到0 的过程，要特殊处理，否则，会反向回到起点（0）。eg：360deg-0， 0-360deg 2个方向
 * @ 时间时24小时制的，(黑盘)在换算成表盘角度时要 除以24个小单位 ，
 * */

const currentday = new Date().getTime()/1000

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    birthday: Number,
    deathday: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    deathNumber: 0, // 寿命值

    hAngles: 0,
    mAngles: 0,
    sAngles: 0,
  },

  lifetimes:{
    attached:function(){
      let _this = this
    this.timer = setInterval(() => {
      _this.initBlack()
    }, 1000)
    },
    detached:function(){
      clearInterval(this.timer)
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    initBlack:function(){
      const {birthday, deathday} = this.data
      const dayRate = (currentday - birthday)/(deathday-birthday) // 年龄百分比
      const allDayNumber = dayRate * 24 // 转换为24小时制 对应的时间
  
      const iHours = allDayNumber // 整数位 - 小时
      const iMinutes = (allDayNumber - parseInt(allDayNumber)) * 60 // (小数位 * 60 ) - 分钟
      const iSeconds = (iMinutes - parseInt(iMinutes)) * 60 // (小数位 * 60) - 秒
     
      const hAngles = iHours / 24 * 360
      const mAngles = iMinutes / 60 * 360
      const sAngles = iSeconds / 60 * 360
  
      const deathNumber = new Date(deathday*1000).getFullYear() - new Date(birthday*1000).getFullYear() 
      this.setData({
        ...this.data,
  
        hours:iHours,
        minute: parseInt(iMinutes),
        seconds: iSeconds,
  
        hAngles, 
        mAngles,
        sAngles,
  
        deathNumber
      })
    },
  }
})
