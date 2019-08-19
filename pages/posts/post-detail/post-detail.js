// pages/posts/post-detail/post-detail.js
var postsData=require('../../../data/posts-data.js');
// var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    collected:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postId = options.id;

    var postData = postsData.postsData[postId];
    this.setData(postData);
    this.data.postId = postId;
    // console.log(this.data);
    // wx.setStorageSync("post", 'test');
    this.setData({ collected: !!wx.getStorageSync('postsCollection')[postId] });


  },

  onCollectionTap: function() {
    
      //var text = this.data.collected?'收藏成功':'取消成功';
      // wx.showToast({
      //   title: text,
      //   duration: 3000,
      // })    
    var title = this.data.collected ? '是否取消收藏' : '是否收藏';
      wx.showModal({
        title: title,
        cancelText: '否',
        confirmText: '是',
        success: res => {
          if(res.confirm){
            var postsCollection = wx.getStorageSync("postsCollection") || {};
            var postId = this.data.postId;
            this.setData({ collected: !this.data.collected });
            postsCollection[postId] = this.data.collected;
            wx.setStorageSync("postsCollection", postsCollection); 
          }
        }
      })
  },

  onShareTap() {
    wx.showActionSheet({
      "itemList": ['分享给微信好友','分享到朋友圈','分享到QQ','分享到微博'],
      "itemColor": "#666"
    })
  },
  
})