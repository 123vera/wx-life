const dayjs = require("dayjs")

let app = getApp()

Page({
  data: {
    dateString:  "",
    spot: [], // 标记日期 eg：'2020/11/6'
    showCalendar: false,
  },

  dateChange(e) {
    this.setData({
      dateString: e.detail.dateString
    })
  },

  isShowCalendar(status) {
    this.setData({showCalendar: status.detail || !this.data.showCalendar})
  },

  onReady:function(){
    if(!!app.globalData.birthday){
      wx.navigateTo({
        url: '../birth/birth',
      })
    }
  }
})








  // onLoad: function () {
  //   // 页面创建时执行
  // },
  // onShow: function(){
  //   // 页面出现在前台时执行
  // },
  // onReady: function(){
  //   // 页面首次渲染完毕后执行
  // },
  // onHide:function(){
  //   // 页面从前台变为后台时执行
  // },
  // onUnload:function(){
  //   // 页面销毁时执行
  // },
  // onPullDownRefresh:function(){
  //   // 触发下拉刷新时执行
  // },
  // onReachBottom:function(){
  //   // 页面触底时执行
  // },
  // onShareAppMessage: function(){
  //   // 页面被用户分享时执行, 需要 return 用于自定义转发内容
  // },
  // onAddToFavorites:function(){
  //   // 页面被用户收藏时执行，需要return自定义收藏内容
  // },
  // onShareTimeline:function(){
  //   // 监听右上角菜单“分享到朋友圈”按钮的行为，并自定义分享内容。
  // },
  // onPageScroll:function(){
  //   // 页面滚动时执行
  // },
  // onResize:function(){
  //   // 页面尺寸变化时执行
  // },
  // onTabItemTap:function(item){
  //   //tab 点击执行
  //   console.log(item.index)
  //   console.log(item.pagePath)
  //   console.log(item.text)
  // },

  // // 事件响应函数
  // viewTap: function () {
  //   this.setData({
  //     text: '创建一些数据'
  //   }, function () {
  //     // callback
  //   })
  // },

  // // 自由数据
  // customData:{
  //   hi: 'MINA'
  // }
