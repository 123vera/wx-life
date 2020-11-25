import { MAX_AGE } from '../../utils/constant'
import dayjs from 'dayjs'

let app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    hasDate: false,
    ageArr: [],

    birthday: app.globalData.birthday || 0,  // 起始时间 秒数
    deathday: app.globalData.deathday || 0 // 结束时间
    // birthday: new Date('2000/1/1 00:00:00').getTime()/1000,  // 起始时间 秒数
    // deathday: new Date('2021/1/1 00:00:00').getTime()/1000 // 结束时间
  },

  bindPickerChange:function(event){
    const { birthday, ageArr } = this.data
    const date = dayjs(birthday).add(ageArr[event.detail.value], 'year' ).format("YYYY-MM-DD")

    wx.setStorageSync('deathday', date)
    this.setData({
      hasDate: true,
      deathday: date
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initPickerArr()
    console.log(this.data.hasDate)
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

    for (var i = currAge; i <= MAX_AGE - currAge; i++) {
      arr = [...arr, i]
    }

    this.setData({
      ageArr: arr
    })
  }
})