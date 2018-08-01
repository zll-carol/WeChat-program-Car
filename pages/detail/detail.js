// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
        "code": "",
        "src": "",
        "gongLv":"",
        "accelerate":"",
        "mostRate":"",
        "oil":"",
        "outdoor":"",
        "price":""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {  
    console.log("options", options);
    this.setData({
      code:options.code,
      src:options.src ,
      gongLv:options.gongLv,
      accelerate:options.accelerate,
      mostRate:options.mostRate,
      oil:options.oil,
      outdoor:options.outdoor,
      price:options.price 
    })
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
  onPullDownRefresh: function (event) {
     
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },
  //页面滚动
  onPageScroll:function(event){

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return{
      title:"车型详情",
      path:"/page/detail"
    }
  }
})