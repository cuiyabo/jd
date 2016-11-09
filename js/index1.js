window.onload=function(){
	var imgs=getClass('pic');
	var list=getClass('circle-li');
	var box=document.getElementById('banner');
	var width=parseInt(getStyle(banner,"width"));
	var Left=getClass('bannerleft')[0];
	var right=getClass('bannerright')[0];
	var now=0;
	var next=0;
	var flag=true;
	var t=setInterval(fun,1000);
	function fun(){
		next=now+1;
		if(next>=imgs.length){
			next=0;
		}
		imgs[next].style.left=width+'px';
		
		animate(imgs[now],{left:-width},600);
		animate(imgs[next],{left:0},600);
		list[now].style.background='#D3D2D0';
		list[next].style.background='#D8218B';
		now=next;
	}
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(fun,1000)
	}
	right.onclick=function(){
		fun();
	}
	Left.onclick=function(){
		next=now-1;
		// console.log(next);
		if(next<0){
			next=imgs.length-1;
		}
		imgs[next].style.left=-width+'px';
		animate(imgs[now],{left:width},600);
		animate(imgs[next],{left:0},600);
		list[now].style.background='#D3D2D0';
		list[next].style.background='#D8218B';
		now=next;
	}
	for(i=0;i<list.length;i++){
		list[i].index=i;
		list[i].onclick=function(){
			if(this.index>now){
				imgs[this.index].style.left=width+'px';
				animate(imgs[now],{left:-width},600);
			}else if(this.index<now){
				imgs[this.index].style.left=-width+'px';
				animate(imgs[now],{left:width},600);
			}
			animate(imgs[this.index],{left:0},600);
			list[now].style.background='#D3D2D0';
			list[this.index].style.background='#D8218B';
			now=this.index;
		}
	}
}