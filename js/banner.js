 $(function(){

 	var aa=jQuery.noConflict();
    // aa(function() {
    aa("img").lazyload({
        event : "sporty"
    });


	aa(window).bind("load", function() {
    var timeout = setTimeout(function() { aa("img").trigger("sporty") }, 5000);
	});      


    
	var imgs=getClass('pica');
	var list=getClass('circle-liq');
	var box=document.getElementById('banner');
	var width=parseInt(getStyle(banner,"width"));
	var Lefta=getClass('bannerleft-a')[0];
	var righta=getClass('bannerright-a')[0];
	// console.log(imgs.length,list.length,left.length,right.length);
	var now=0;//当前第一张
	var next=0;//第二张
	var flag=true;
	var c=setInterval(func,2000);//时间函数
	function func(){
		if(!flag){
			return;
		}
		flag=false;
		next=now+1;//下一张=当前第一张+1
		if(next>=imgs.length){//当大于图片的长度时，再返回第一张；
			next=0;
		}
		imgs[next].style.left=width+'px';//让下一张在当前的图片后等待
		
		animate(imgs[now],{left:-width},600);//让当前图片向左移出当前位置
		animate(imgs[next],{left:0},600,function(){
			flag=true;
		});//让下一张图片移到当前位置
		list[now].style.background='#ccc';//让当前图片所对应的小点变回默认色
		list[next].style.background='red';//下一张就是默认的小点的颜色
		now=next;
	}

	banner.onmouseover=function(){
		clearInterval(c);
	}
	banner.onmouseout=function(){
		c=setInterval(func,2000)
	}
	righta.onclick=function(){
		func();
	}
	Lefta.onclick=function(){
		if(!flag){
			return
		}
		flag=false;
		next=now-1;
		// console.log(next);
		if(next<0){
			next=imgs.length-1;
		}
		imgs[next].style.left=-width+'px';
		animate(imgs[now],{left:width},600);
		animate(imgs[next],{left:0},600,function(){
			flag=true;
		});
		list[now].style.background='#ccc';
		list[next].style.background='red';
		now=next;
	}
	for(i=0;i<list.length;i++){
		list[i].index=i;
		list[i].onclick=function(){
			if(!flag){
				return
			}
			flag=false;
			if(this.index>now){
				imgs[this.index].style.left=width+'px';
				animate(imgs[now],{left:-width},600);
			}else if(this.index<now){
				imgs[this.index].style.left=-width+'px';
				animate(imgs[now],{left:width},600);
			}
			animate(imgs[this.index],{left:0},600,function(){
				flag=true
			});
			list[now].style.background='#ccc';
			list[this.index].style.background='red';
			now=this.index;
		}
	}
	var top_hidden=$('#top-hidden');
    var floor_nav=$('.floor-nav')[0];
    var floor_lis=$('.floor-lis')
    var floor=$('.floor');
    var now;
    var cHeight=document.documentElement.clientHeight; 

    // console.log(top_hidden,floor_nav,floor_lis,floor,cHeight,nHeight)

 
    
    for(var i=0;i<floor.length;i++){
    	floor[i].h=floor[i].offsetTop;
        // console.log(floor[i].h)楼层的高度存起来
    }
    window.onscroll=function(){
    	var obj=document.body.scrollTop?document.body:document.documentElement;
    	var top=obj.scrollTop;
    	if(top>=floor[0].h-300){
    		floor_nav.style.display='block';

            var nHeight=floor_nav.offsetHeight;
            // 获取本身的高度
            floor_nav.style.top=(cHeight-nHeight)/2+"px";
            // 垂直居中

    		// console.log(top)滚动出值
            // 出效果：左框出来
    	}
        if(top<floor[0].h-200){
            floor_nav.style.display='none'
        }
    	for(var i=0;i<floor.length;i++){
    		if(top>=floor[i].h-600){
    			for(var j=0;j<floor_lis.length;j++){
    				floor_lis[j].style.background='#fff';
    			}
    			floor_lis[i].style.background='red';
                now=i;
    		}    
    	}
    }          //整个楼层出效果
    	for(var i=0;i<floor.length;i++){
    		floor_lis[i].index=i;
    		floor_lis[i].onclick=function(){
    			animate(document.body,{scrollTop:floor[this.index].h})
                now=this.index;
    			animate(document.documentElement,{scrollTop:floor[this.index].h})
    		
    	}
    floor_lis[i].onmouseover=function(){
        this.style.background='red';
    }
    floor_lis[i].onmouseout=function(){
        if(this.index==now){
            return;
        }
        this.style.background='#fff';
    }



    }


// 顶部1
var boxa=$(".dingbu-c-aa")[0]
	
		boxa.onmouseover=function(){

			this.style.background="#fff"
			var ewma=$(".dingbu-c-a")[0]
			// console.dir(ewma)
			ewma.style.display="block"
		}
		boxa.onmouseout=function(){
			this.style.background="#F1F1F1"
			var ewma=$(".dingbu-c-a")[0]
			ewma.style.display="none"
		}

// 顶部2
var boxa=$(".dingbu-c-bb")[0]
	
		boxa.onmouseover=function(){

			this.style.background="#fff"
			var ewma=$(".dingbu-c-d")[0]
			// console.dir(ewma)
			ewma.style.display="block"
		}
		boxa.onmouseout=function(){
			this.style.background="#F1F1F1"
			var ewma=$(".dingbu-c-d")[0]
			ewma.style.display="none"
		}


var boxa=$(".dingbu-c-cc")[0]
	
		boxa.onmouseover=function(){

			this.style.background="#fff"
			var ewma=$(".dingbu-c-e")[0]
			// console.dir(ewma)
			ewma.style.display="block"
		}
		boxa.onmouseout=function(){
			this.style.background="#F1F1F1"
			var ewma=$(".dingbu-c-e")[0]
			ewma.style.display="none"
		}

var boxa=$(".dingbu-c-dd")[0]
	
		boxa.onmouseover=function(){

			this.style.background="#fff"
			var ewma=$(".dingbu-c-f")[0]
			// console.dir(ewma)
			ewma.style.display="block"
		}
		boxa.onmouseout=function(){
			this.style.background="#F1F1F1"
			var ewma=$(".dingbu-c-f")[0]
			ewma.style.display="none"
		}
var boxa=$(".shop-a")
	for(var i=0;i<boxa.length;i++){
		boxa[i].onmouseover=function(){

			// this.style.background="#fff"
			var ewmaa=$(".shop-a-a",this)[0]
			// console.dir(ewma)
			ewmaa.style.display="block"
		}
		boxa[i].onmouseout=function(){
			// this.style.background="#C81623"
			var ewmaa=$(".shop-a-a",this)[0]
			ewmaa.style.display="none"
		}

	}
		



var boxa=$(".shop-b")[0]
	
		boxa.onmouseover=function(){

			this.style.background="#fff"
			var ewma=$(".shop-b-a")[0]
			// console.dir(ewma)
			ewma.style.display="block"
		}
		boxa.onmouseout=function(){
			this.style.background="#C81623"
			var ewma=$(".shop-b-a")[0]
			ewma.style.display="none"
		}
var boxa=$(".shop-c")[0]
	
		boxa.onmouseover=function(){

			this.style.background="#fff"
			var ewma=$(".shop-c-a")[0]
			// console.dir(ewma)
			ewma.style.display="block"
		}
		boxa.onmouseout=function(){
			this.style.background="#C81623"
			var ewma=$(".shop-c-a")[0]
			ewma.style.display="none"
		}

var boxa=$(".shop-d")[0]
	
		boxa.onmouseover=function(){

			this.style.background="#fff"
			var ewma=$(".shop-d-a")[0]
			// console.dir(ewma)
			ewma.style.display="block"
		}
		boxa.onmouseout=function(){
			this.style.background="#C81623"
			var ewma=$(".shop-d-a")[0]
			ewma.style.display="none"
		}

var boxa=$(".shop-e")[0]
	
		boxa.onmouseover=function(){

			this.style.background="#fff"
			var ewma=$(".shop-e-a")[0]
			// console.dir(ewma)
			ewma.style.display="block"
		}
		boxa.onmouseout=function(){
			this.style.background="#C81623"
			var ewma=$(".shop-e-a")[0]
			ewma.style.display="none"
		}

var boxa=$(".shop-f")[0]
	
		boxa.onmouseover=function(){

			this.style.background="#fff"
			var ewma=$(".shop-f-a")[0]
			// console.dir(ewma)
			ewma.style.display="block"
		}
		boxa.onmouseout=function(){
			this.style.background="#C81623"
			var ewma=$(".shop-f-a")[0]
			ewma.style.display="none"
		}


var boxa=$(".songzhi")[0]
	
		boxa.onmouseover=function(){

			this.style.background="#fff"
			var ewma=$(".songzhi-a")[0]
			// console.dir(ewma)
			ewma.style.display="block"
		}
		boxa.onmouseout=function(){
			this.style.background="#F1F1F1"
			var ewma=$(".songzhi-a")[0]
			ewma.style.display="none"
		}
var boxa=$(".dingbu-cc-a")[0]
	
		boxa.onmouseover=function(){

			this.style.background="#fff"
			var ewma=$(".dingbu-cc-aa")[0]
			// console.dir(ewma)
			ewma.style.display="block"
		}
		boxa.onmouseout=function(){
			this.style.background="#F1F1F1"
			var ewma=$(".dingbu-cc-aa")[0]
			ewma.style.display="none"
		}

var boxa=$(".dingbu-c-cc")[0]
	
		boxa.onmouseover=function(){

			this.style.background="#fff"
			var ewma=$(".dingbu-c-ccc")[0]
			// console.dir(ewma)
			ewma.style.display="block"
		}
		boxa.onmouseout=function(){
			this.style.background="#F1F1F1"
			var ewma=$(".dingbu-c-ccc")[0]
			ewma.style.display="none"
		}

// 回到顶部动画
   var topImg=$(".topImg");
  for(var i=0;i<topImg.length;i++){
    hover(topImg[i],function(){
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




function son(obj){
		var nz=$(".NZ",obj);
		var blank=$('.blank',obj);
		// console.log(blank)
		var clothesBox=$(".Clothes-right-box",obj);
		for(var I=0;I<nz.length;I++){
			nz[I].index=I;
			nz[I].onmouseover=function(){
				for(var J=0;J<nz.length;J++){
					clothesBox[J].style.display="none";
					blank[J].style.display='none';
				}
				clothesBox[this.index].style.display="block";
				blank[this.index].style.display='block';
			}
		}
	}
	son($(".Clothes")[0]);
	son($(".flo beauty")[0]);
	son($(".flo beauty")[1]);
	son($(".flo beauty")[2]);
	son($(".flo beauty")[3]);
	// son($(".flo car")[1]);
	// son($(".flo car")[2]);
	son($(".flo car carb")[0]);
	son($(".flo car cara")[0]);
	son($(".flo car carc")[0]);
	son($(".flo car care")[0]);
	son($(".flo car carf")[0]);

	son($(".flo car card")[0]);

	// son($(".flo car")[4]);
	// son($(".flo car")[3]);






// 1楼
var imgs1=$('.yilou');
	var list1=$('.circle-li');
	var Box1=$('.Clothes-right-top andCenter')[0];
	var width1=parseInt(getStyle(Box1,"width"));
	var yilouleft=$('.yilouleft')[0];
	var yilouright=$('.yilouright')[0];
	// console.log(width);
	var now1=0;
	var next1=0;
	var flag1=true;
	var TIME=setInterval(fun,3000);
	function fun(){
		next1=now1+1;
		if(next1>=imgs1.length){
			next1=0;
		}
		imgs1[next1].style.left=width1+'px';
		
		animate(imgs1[now1],{left:-width1},600);
		animate(imgs1[next1],{left:0},600);
		list1[now1].style.background='#3E3E3E';
		list1[next1].style.background='#B61B1F';
		now1=next1;
	}

	Box1.onmouseover=function(){
		clearInterval(TIME);
	}
	Box1.onmouseout=function(){
		TIME=setInterval(fun,3000)
	}
	yilouright.onclick=function(){
		fun();
	}
	yilouleft.onclick=function(){
		next1=now1-1;
		// console.log(next);
		if(next1<0){
			next1=imgs1.length-1;
		}
		imgs[next1].style.left=-width1+'px';
		animate(imgs1[now1],{left:width1},600);
		animate(imgs1[next1],{left:0},600);
		list1[now1].style.background='#3E3E3E';
		list1[next1].style.background='#B61B1F';
		now1=next1;
	}
	for(i=0;i<list1.length;i++){
		list1[i].index=i;
		list1[i].onclick=function(){
			if(this.index>now){
				imgs1[this.index].style.left=width1+'px';
				animate(imgs1[now1],{left:-width1},600);
			}else if(this.index<now1){
				imgs1[this.index].style.left=-width1+'px';
				animate(imgs1[now1],{left:width1},600);
			}
			animate(imgs1[this.index],{left:0},600);
			list1[now1].style.background='#3E3E3E';
			list1[this.index].style.background='#B61B1F';
			now1=this.index;
		}
	}








// 上轮播
var xiaolunbo=function(obj){
	var fashion=obj;
	var firstbox=$('.firstbox',fashion);
	var Circle_li=$('.circle-li',fashion);
	var box=$('.food-right-two')[0];
	var width=parseInt(getStyle(box,"width"));
	var foodleft=$('.foodleft',fashion)[0];
	var foodright=$('.foodright',fashion)[0];
	// console.log(firstbox.length)
	var now=0;
	var next=0;
	var flag=true;
	var T=setInterval(fun,2000);
	function fun(){
		next=now+1;
		if(next>=firstbox.length){
			next=0;
		}
		firstbox[next].style.left=width+'px';
		
		animate(firstbox[now],{left:-width},600);
		animate(firstbox[next],{left:0},600);
		Circle_li[now].style.background='#3E3E3E';
		Circle_li[next].style.background='#B61B1F';
		now=next;
	}

	firstbox.onmouseover=function(){
		clearInterval(T);
	}
	firstbox.onmouseout=function(){
		T=setInterval(fun,2000)
	}
	foodright.onclick=function(){
		fun();
	}
	foodleft.onclick=function(){
		if(!flag){
			return;
		}
		flag=false;
		next=now-1;
		if(next<0){
			next=firstbox.length-1;
		}
		firstbox[next].style.left=-width+'px';
		animate(firstbox[now],{left:width},600);
		animate(firstbox[next],{left:0},600,function(){
			flag=true
		});
		Circle_li[now].style.background='#3E3E3E';
		Circle_li[next].style.background='#B61B1F';
		now=next;
	}
	for(i=0;i<Circle_li.length;i++){
		Circle_li[i].index=i;
		Circle_li[i].onclick=function(){
			if(this.index>now){
				firstbox[this.index].style.left=width+'px';
				animate(firstbox[now],{left:-width},600);
			}else if(this.index<now){
				firstbox[this.index].style.left=-width+'px';
				animate(firstbox[now],{left:width},600);
			}
			animate(firstbox[this.index],{left:0},600);
			Circle_li[now].style.background='#3E3E3E';
			Circle_li[this.index].style.background='#B61B1F';
			now=this.index;
			next=this.index;
		}
	}
}
xiaolunbo($('.food-right-two')[0]);
xiaolunbo($('.sport-box')[0]);
xiaolunbo($('.sport-box')[1]);
xiaolunbo($('.sport-box')[2]);
xiaolunbo($('.life-right-two')[0]);
xiaolunbo($('.maternal-right-two')[0]);	
xiaolunbo($('.foods-right-two')[0]);







// 下轮播
function xiaolunbo2(obj){
		var banner=obj;
		var width3=parseInt(getStyle(banner,'width'));
		var img3=$('.threehouse',obj);
		var lis3=$('.Circle-li',obj);
		var sanlouleft=$('.sanlouleft',obj)[0];
		var sanlouright=$('.sanlouright',obj)[0];
		var n=0;
		var next=0;
		var flag=true;
		var t=setInterval(move,2000);
		function move(type){
			var type=type||'right';
			if(!flag){
				return;
			}
			flag=false;
			if(type=='right'){
				next=n+1;
				if(next>=img3.length){
					next=0;
				}
				img3[next].style.left=width3+'px';
				animate(img3[n],{left:-width3},600,Tween.Quad.easeInOut);
			}else if(type=='left'){
				next=n-1;
				if(next<0){
					next=img3.length-1;
				}
				img3[next].style.left=-width3+'px';
				animate(img3[n],{left:width3},600,Tween.Quad.easeInOut);
			}
			animate(img3[next],{left:0},600,Tween.Quad.easeInOut,function(){flag=true});
			lis3[n].style.background="#3E3E3E";
			lis3[next].style.background='#B61B1F';
			n=next;
		}
		banner.onmouseover=function(){
			clearInterval(t)
		}
		banner.onmouseout=function(){
			t=setInterval(move,2000);
		}
		sanlouleft.onclick=function(){
			move('left')
		}
		sanlouright.onclick=function(){
			move('right');
		}
		for(var i=0;i<lis3.length;i++){
			lis3[i].index=i;
			lis3[i].onclick=function(){
				if(this.index<n){
					if(!flag){
						return;
					}
					flag=false;
					img3[this.index].style.left=-width3+'px';
					animate(img3[n],{left:width3},600,Tween.Quad.easeInOut);
					
				}else if(this.index>n){
					if(!flag){
						return;
					}
					flag=false;
					img3[this.index].style.left=width3+'px';
					animate(img3[n],{left:-width3},600,Tween.Quad.easeInOut);
				}
				animate(img3[this.index],{left:0},600,Tween.Quad.easeInOut,function(){flag=true});
				lis3[n].style.background="#3E3E3E";
				lis3[this.index].style.background='#B61B1F';
				n=this.index;
				next=this.index;
			}
			
		}
	}
	xiaolunbo2($('.silid-top')[0]);
	xiaolunbo2($('.silid-top')[1]);
	xiaolunbo2($('.silid-top')[2]);
	xiaolunbo2($('.silid-top')[3]);
	xiaolunbo2($('.silid-top')[4]);
	xiaolunbo2($('.silid-top')[5]);
	xiaolunbo2($('.silid-top')[6]);
	
	
	var aa=jQuery.noConflict();
	aa(function() {
    aa("img").lazyload();
});


 })

