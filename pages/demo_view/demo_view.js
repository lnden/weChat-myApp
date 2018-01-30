// pages/demo_view.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: 'hello newPages ',
    array: [1, 2, 3, 4, 5],
    view:'WEBVIEW',
    staffA: { firstName: 'Hulk', lastName: 'Hu' },
    staffB: { firstName: 'Shang', lastName: 'You' },
    staffC: { firstName: 'Gideon', lastName: 'Lin' },
    count:1,
    isShow:true,
    a:1,
    b:2,
    c:3,
    length:4,
    object:{
      key:'hello'
    },
    zero:0,
    text:'这里面是引用模板····'
  },
  add:function(){
    this.setData({
      count:this.data.count+1
    })
  },
  rest:function(){
    this.setData({
      count:0
    })
  },
  jumpData:function(){
    wx.navigateTo({
      url: './data/data',
    })
  },
  jumpList: function () {
    wx.navigateTo({
      url: './list/list',
    })
  },
  jumpCondition: function(){
    wx.navigateTo({
      url: './condition/condition',
    })
  },
  jumpTemplate: function(){
    wx.navigateTo({
      url: './template/template',
    })
  },
  jumpEvent: function(){
    wx.navigateTo({
      url: './event/event',
    })
  },
  jumpQuote(){
    wx.navigateTo({
      url: './quote/quote',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  }
})