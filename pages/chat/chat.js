// pages/chat/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal:null
  },

  bindTextAreaBlur: function(e) {
    this.setData({
      inputVal:e.detail.value
    }) 
  },

  submitForm: function (e) {
    
    //一般前置检查代码
    
    const that = this
    wx.request({
        url: 'https://api.fcxl9876.xin/miniapp/chatGPT',
        method: 'post',
        header: {"content-type": "application/x-www-form-urlencoded"},
        data: "{\"askStr\":"+that.data.inputVal+"\"}",
        success(rsp) {
            console.log("ask result-----",rsp.data)
            that.setData({
                result: rsp.data.replyStr,
                disabled: false,
                loading: false,
            })
        },
        complete(d) {
            console.log(d)
        }
    })
    console.info("form.submited")

    //其他相关代码
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
  
})