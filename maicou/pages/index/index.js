//index.js
//获取应用实例
const app = getApp()
const url = 'http://sdvwrn.natappfree.cc/img/'
Page({
  data: {
    mobile: ''
  },
  onLoad: function () {
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })
  },
  anues:function(e){
    var mobile = e.detail.value.username;
    console.log(mobile)
    var regMobile = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!regMobile.test(mobile)) {
      wx.showToast({
        title: '手机号有误！'
      })
      return false;
    }else{
      wx.navigateTo({
        url: '../logs/logs'
      })
    }
  }

})
