Page({
  onTap: function(){
    wx.navigateTo({
      url: '/pages/posts/posts',
    })
<<<<<<< HEAD
    // wx.redirectTo({
    //   url: '/pages/posts/posts',
    // })
    // wx.switchTab({
    //   url: '/pages/posts/posts',
    // })
=======
    wx.redirectTo({
      url: '/pages/posts/posts',
    })
    wx.switchTab({
      url: '/pages/posts/posts',
    })
>>>>>>> mm
  },

  onHide: function(){
    console.log('welcome onHide')
  },

  onUnload: function () {
    console.log('welcome onUnload')
  }
})
