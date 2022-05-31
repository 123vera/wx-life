import { MAX_AGE } from '../../utils/constant'
import { calculateLove, calculateHoliday } from '../../utils/util'
import dayjs from 'dayjs'

let app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    hours: '--',
    minutes: '--',
    seconds: '--',

    hasDate: app.globalData.deathday ? true : false,
    ageArr: [],

    food: '0',
    love: '0',
    weekends: '0',
    holiday: '0',

    birthday: 0,  // 起始时间 秒数
    deathday: 0 // 结束时间
  },

  bindPickerChange: function (event) {
    const { ageArr } = this.data
    const birthday = app.globalData.birthday
    const date = dayjs(birthday).add(Number(ageArr[event.detail.value]), 'year').format("YYYY-MM-DD HH:mm:ss")


    app.globalData.deathday = date
    wx.setStorageSync('deathday', date)

    this.setData({
      hasDate: true,
      deathday: date
    })
  },

  getAge: function (value) {
    this.setData({
      birthday: app.globalData.birthday,  // 起始时间 秒数
      hours: (value && value.detail && String(value.detail.hours).split('.')[0]) || '--',
      minutes: (value && value.detail && value.detail.minutes) || '--',
      seconds:( value && value.detail && value.detail.seconds) || '--',
    })

    this.calculateObjectNumber()
  },

  // 计算次数
  calculateObjectNumber: function () {
    const { birthday, deathday } = app.globalData

    if(!!!deathday)return 
    const currday = dayjs().format('YYYY-MM-DD')
   
    const remainingDay = dayjs(deathday).diff(currday, 'day')
    const remainingMonth = dayjs(deathday).diff(currday, 'month')
    const remainingWeek = dayjs(deathday).diff(currday, 'week')
    const remainingYear = dayjs(deathday).diff(currday, 'year')

    const age = dayjs().diff(birthday, 'year', true)
    const endAge = dayjs(deathday).diff(birthday, 'year', true)

console.log('death', age, endAge)

    const _food = remainingDay * 3 // 一天3顿
    const _love = calculateLove(age, endAge) 
    const _weekends = remainingWeek  // n次周末
    const _holiday = calculateHoliday(remainingYear)// 一年2次长假

    this.setData({
      food: _food || 0,
      love: _love || 0,
      weekends: _weekends || 0,
      holiday: _holiday || 0,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   * 小程序的生命周期函数的调用顺序为：onLoad > onReady > onShow
   */
  onLoad: function (options) {
    this.initPickerArr()
    this.getAge()
  },

  onLaunch: function () {
    this.initPickerArr()
    this.getAge()
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  },

  initPickerArr: function () {
    const date2 = dayjs(app.globalData.birthday)
    const currAge = dayjs().diff(date2, 'year')
    let arr = []

    for (var i = currAge+1; i <= MAX_AGE; i++) {
      arr = [...arr, i]
    }

    this.setData({
      // ageArr: [122]
      ageArr: arr
    })
  }
})