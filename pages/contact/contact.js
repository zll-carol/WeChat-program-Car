// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nodes:[{
      name:"hr",
      attrs:{
        class:"hr"
      }
    }],
    markers: [{
      iconPath: "../../static/images/map.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        latitude: 23.099994,
        longitude: 113.324520,
      }, {
          latitude: 23.099994,
          longitude: 113.324520,
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '../../static/images/map.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
  //拨打电话
  makePhoneCall:function(){
    wx.makePhoneCall({
      phoneNumber: '15137409826',
      success:(res)=>{
        console.log("该手机号码已拨出");
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({    //先查看是否授权
      success: function (res) {
        console.log("res::", res);
        if (res.authSetting["scope.userLocation"] === false) {  //如果用户没有授权则res.authSetting["scope.userLocation"]会显示false，如果显示false,即弹出设置权限的提示框，直到用户授权为止。
          wx.openSetting({
            success: function (res) {
              console.log(res);
            }
          })
        } else if (!res.authSetting["scope.userLocation"]) { //当用户第一次进入该页面时，res.authSetting["scope.userLocation"]是空的，所以调用 wx.authorize进行授权，该授权只出现一次
          wx.authorize({
            scope: "scope.userLocation",
            success:function(res){
              console.log("userLocation::",res);
            }
          })
        }
      }
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
    wx.getLocation({
      type: "wgs84",
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        console.log(res);
      },
      compolete: function (res) {
        console.log("location::", res);
      }
    })

    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
      }
    })
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