// Author: Ray-Eldath
// 适用于mobile端简单页面的轻量级插件
//  - https://github.com/theme-next/hexo-theme-next/blob/master/source/js/src/utils.js

class utils {
  static getContentVisibilityHeight() {
    var docHeight = $('.visible').height(),
      winHeight = $(window).height(),
      contentVisibilityHeight = (docHeight > winHeight) ? (docHeight - winHeight) : ($(document).height() - winHeight);
    return contentVisibilityHeight;
  }

  static isMobile() {
    return window.screen.width < 767;
  }
}
