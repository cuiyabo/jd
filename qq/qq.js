$ (function(){


// 回到顶部动画
  var topImg=$(".topImg");
  for(var g=0;g<topImg.length;g++){
    hover(topImg[g],function(){
      var width=this.offsetWidth;
      this.style.background="#B1191A";
      this.style.overflow="inherit";
      var ul=$(".tab-text",this)[0];
      animate(ul,{width:80},300);
    },function(){
      var that=this;
      that.style.background="#7A6E6E";
      that.style.overflow="hidden";
      var ul=$(".tab-text",this)[0];
      animate(ul,{width:0},100);
    })
  }
})