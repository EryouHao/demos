
function showDivs () {
  // 可视区域
  var clients = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  var scrollTop = document.body.scrollTop;
  var intro = document.getElementById('contact');

  // getBoundingClientRect() 直接返回div到浏览器顶部的距离
  // 返回4个值 top bottom left right
  var divTop = intro.getBoundingClientRect().top;
  if (divTop <= clients) {
    // 图片延迟加载也是从属性中读取src，比如一开始可以放到img标签的 data-src 属性中
    // intro.classList.add('fadeInLeft');
    // intro.style.marginTop = '-200px';
    // window.scrollTop = 0;
  }
  console.log(divTop);
  console.log(clients);
  // 向上滑时缓慢变化距离归零====
  // if (clients- divTop < 200) {
  //   intro.style.marginTop = (clients - divTop) + 'px';
  // }
}

window.onscroll = showDivs;
// window.onload = function test() {
//   // 向下箭头按钮
//   var downBtn = document.getElementById('down-btn');
//   downBtn.onclick = function () {
//     console.log('点击了');
//     var clients = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
//     document.body.scrollTop = clients;
//     // 加上逐渐向上滚动效果====
//
//   };


};
