// pages/cars/cars.js
const parseObjToQuery=require("../../utils/parseObjToQuery.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [
      {
        "code":"718",
        "src":"/static/images/00.jpg",
        "gongLv": "331kW(450 hp)/ 6,500rpm",
        "accelerate": "3.7s",
        "mostRate": "310km/h",
        "oil": "8.3",
        "outdoor": "7.0",
        "price": "1,610,000元,含增值税*"
      },
      {
        "code":"911",
        "src":"/static/images/1.jpg",
        "gongLv": "331kW(450 hp)/ 5,500rpm",
        "accelerate": "3.7s",
        "mostRate": "310km/h",
        "oil": "8.3",
        "outdoor": "7.0",
        "price": "1,610,000元,含增值税*"
      },
      {
        "code":"Panamera",
        "src":"/static/images/2.jpg",
        "gongLv": "331kW(450 hp)/ 6,500rpm",
        "accelerate": "3.7s",
        "mostRate": "310km/h",
        "oil": "8.3",
        "outdoor": "7.0",
        "price": "1,610,000元,含增值税*"
      },
      {
        "code":"Macan",
        "src":"/static/images/3.jpg",
        "gongLv": "331kW(450 hp)/ 6,500rpm",
        "accelerate": "3.7s",
        "mostRate": "310km/h",
        "oil": "8.3",
        "outdoor": "7.0",
        "price": "1,610,000元,含增值税*"
      },
      {
        "code":"Cayenne",
        "src":"/static/images/4.jpg",
        "gongLv": "331kW(450 hp)/ 6,500rpm",
        "accelerate": "3.7s",
        "mostRate": "310km/h",
        "oil": "8.3",
        "outdoor": "7.0",
        "price": "1,610,000元,含增值税*"
      }
    ],
    products:[],
  },
  //进入detail页面，使用data中定义的arra假数据
  navigateToDetail:function(event){
   console.log(event);
   const Array =this.data.array;
   const code=event.target.dataset.code;
   console.log(code);
   for(var key in Array){
     console.log(key);
     if(code===Array[key].code){
        const obj = Array[key];
        console.log("obj::"+obj);
        const query=parseObjToQuery(obj);
        console.log(query);
        wx.navigateTo({
          //  url: '../detail/detail?'+"code="+code,
          url: '../detail/detail?' + query,   //跳转到detail页面后，detail.js中的生命周期函数onLoad就会接受到该url并且转化为options对象,那么就可以用this.setData({})将相对应的值显示在页面上了。
        })
        return;
     }
   }
  },

  //进入product页面，从后台获取数据
  navigateToProduct:function(event){
    const id =event.target.dataset.id;
    console.log(id);
      wx.navigateTo({
        url: '/pages/products/product?id='+id,
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log("hi");
      wx.request({
        url:"http://192.168.1.210:3000/manage/product",
        success:(res)=>{
          console.log("res::",res);
          if(res.data.OK){
            this.setData({
              products:res.data.docs
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