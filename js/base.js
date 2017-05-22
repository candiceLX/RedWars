// JavaScript Document

//rem
(function (doc, win) {
	 var docEl = doc.documentElement,
	 resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	 recalc = function () {
	 	var clientWidth = docEl.clientWidth;
	 	if (!clientWidth) return;
		if(clientWidth>=750){
			 docEl.style.fontSize = '100px';
		 }else{
			 docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
		 }
	 };

	if (!doc.addEventListener) return;
 	win.addEventListener(resizeEvt, recalc, false);
 	doc.addEventListener('DOMContentLoaded', recalc, false);
 })(document, window);
 
 
 //图片高宽自判
	window.onload=function(){
		$('.js_img img').each(function(index){
			var twid=$(this).width()
			var thei=$(this).height()
			if(twid>thei){
				//alert(index+1+"高")
				$(this).css('height','100%')
			}else{
				//alert(index+1+"宽")
				$(this).css('width','100%')
			}
		})

	}
	
	
	












