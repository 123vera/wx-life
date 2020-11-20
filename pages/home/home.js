

Page({
  data: {
    dateString: "",
    spot: [], // 标记日期 eg：'2020/11/6'
    

    birthday: new Date('2000/1/1 00:00:00').getTime()/1000,  // 起始时间 秒数
    deathday: new Date('2021/1/1 00:00:00').getTime()/1000 // 结束时间
  },

  dateChange(e) {
    console.log("选中日期变了,现在日期是", e.detail.dateString)
    this.setData({
      dateString: e.detail.dateString
    })
  },

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
