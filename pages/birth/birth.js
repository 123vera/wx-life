import dayjs from 'dayjs'
import { formatDecimal } from '../../utils/util'

let app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    age: '0',
    year: '0',
    month: '0',
    week: '0',
    day: '0',
    hour: '0',
    minute: '0',

    showCalendar: false,
    dateString:"",
    defaultTime: ""
  },

  dateChange(e) {
    this.setData({
      dateString: e.detail.dateString
    })
  },


  isShowCalendar(status) {
    this.setData({showCalendar: status.detail || !this.data.showCalendar})
  },
  
  initTab: function () {
    const date2 = dayjs(app.globalData.birthday)

    const _year = dayjs().diff(date2, 'year')
    const _month = dayjs().diff(date2, 'month')
    const _week = dayjs().diff(date2, 'week')
    const _day = dayjs().diff(date2, 'day')
    const _hour = dayjs().diff(date2, 'hour')
    const _minute = dayjs().diff(date2, 'minute')


    this.setData({
      ...this.data,
      age: formatDecimal(dayjs().diff(date2, 'year', true), 8) || '--',
      year: _year,
      month: _month,
      week: _week,
      day: _day,
      hour: _hour,
      minute: _minute,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const date2 = dayjs(app.globalData.birthday)
    clearInterval(this.timer)
    
    this.timer = setInterval(() => {
      this.initTab()
      this.setData({
       ...this.data,
        age: formatDecimal(dayjs().diff(date2, 'year', true), 8),
      })
    }, 1000)
  },

  stopPrevent:function(){

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: async function () {
    await this.setData({
      ...this.data,
      defaultTime: dayjs(app.globalData.birthday).format('YYYY/MM/DD'),
    })

    this.initTab()
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
    clearInterval(this.timer)
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

  }
})