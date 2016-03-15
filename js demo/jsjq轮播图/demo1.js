/*总结：1.已下标为切入点，通过下表确认主要参数；2.主要确定参数：起点位置 终点位置 速度 方向；
		3.工具函数、主要功能函数、具体执行代码
*/

//工具函数
function getStyle(obj, attr) {
	if (obj.currentStyle)
		return obj.currentStyle[attr];
	else 
		return getComputedStyle(obj,false)[attr];
}

function getByClass(par, cName) {
	var tag = par.getElementsByTagName('*');
	var arr = [];
	for (var i = 0; i < tag.length; i++) {
		if (tag[i].className == cName) {
			arr.push(tag[i]);
		}
	};
	return arr;
}

//滚动函数
function startMove(obj, dir, distance) {//对象 方向 终点
	//防止定时器出错
	clearInterval(obj.timer);
	var oLeft = 0;
	obj.timer = setInterval(function() {
		//左边距
		oLeft = parseInt(getStyle(obj, dir));
		//单位时间滚动距离（速度）起点oLeft不断变化 直至等于终点distance  speed因此不断变小直至为0
		var speed = (distance - oLeft)/10;
		//保证speed最终为0
	   	speed = speed>0?Math.ceil(speed):Math.floor(speed);
	   	if (oLeft == distance) {
	   		clearInterval(obj.timer)
	   	} else {
	   		obj.style[dir] = speed + oLeft +　'px';
	   	}
	}, 30)
}

//
window.onload = function() {
	var oDiv = document.getElementById('banner');
	  // var oPre = getByClass(oDiv,'pre')[0];
	  // var oNext = getByClass(oDiv,'next')[0];
	  var oUlBig = getByClass(oDiv,'box')[0];
	  var aBigLi = oUlBig.getElementsByTagName('li');
	  var oDivSmall = getByClass(oDiv,'mbox')[0]
	  var aLiSmall = oDivSmall.getElementsByTagName('li');
	  
	  function tab()
	  {
	     for(var i=0; i<aLiSmall.length; i++)
	     {
		    aLiSmall[i].className = '';
	     }
	     aLiSmall[now].className = 'active'
	     startMove(oUlBig,'left',-(now*aBigLi[0].offsetWidth))//now*aBigLi[0].offsetWidth 终点  oLeft起点
	  }
	  var now = 0;
	  for(var i=0; i<aLiSmall.length; i++)
	  {
		  aLiSmall[i].index = i;
		  aLiSmall[i].onclick = function()
		  {
			  now = this.index;
			  tab();
		  }
	 }
	  // oPre.onclick = function()
	  // {
		 //  now--
		 //  if(now ==-1)
		 //  {
			//   now = aBigLi.length;
		 //  }
		 //   tab();
	  // }
	  //  oNext.onclick = function()
	  // {
		 //   now++
		 //  if(now ==aBigLi.length)
		 //  {
			//   now = 0;
		 //  }
		 //  tab();
	  // }
	  var sport = function() {
	  	now ++;
	  	if (now == aBigLi.length) {
	  		now = 0;
	  	}
	  	tab();
	  };
	  var timer = setInterval(sport,3000) //滚动间隔时间设置
	  oDiv.onmouseover = function()
	  {
		  clearInterval(timer)
	  }
	   oDiv.onmouseout = function()
	  {
		  timer = setInterval(sport,3000) //滚动间隔时间设置
	  }
}



// window.onload = function() {
// 	//元素获取
// 	var ban = document.getElementById('banner');
// 	var oM = document.getElementById('menu');
// 	var box = document.getElementById('box');
// 	var bLi = box.getElementsByTagName('li');
// 	var liW = bLi[0].offsetWidth;
// 	var menuLi = oM.getElementsByTagName('li');
// 	var oLeft = 0;

// 	//按钮定位
// 	var ww;	//可视区宽度
// 	if (window.innerWidth)
// 		ww = window.innerWidth;
// 	else if (document.body && document.body.offsetWidth)
// 		ww = document.body.offsetWidth;
// 	else if (document.documentElement && document.documentElement.offsetWidth)
// 		ww = document.documentElement.offsetWidth;
// 	oM.style.left = (ww - oM.offsetWidth)/2 + 'px';


// 	//自动切换
// 	box.innerHTML += box.innerHTML;
// 	var lisWidth = liW * bLi.length;
// 	var tt, ttt;

// 	function startMove() {

// 	}

// 	function sport() {
// 		console.log(box.offsetLeft);
// 		if (box.offsetLeft <= (-lisWidth/2)) {
// 			box.style.left = 0;
// 		}			
// 		oLeft = box.offsetLeft;

// 		function nei() {
// 			if (box.offsetLeft - oLeft > -liW) {
// 				box.style.left = box.offsetLeft -liW/10 + 'px';
// 				tt = setTimeout(arguments.callee, 10);
// 			}
// 		}
// 		nei();
// 	}

// 	ban.onmouseover = function() {
		
// 	}
// 	ban.onmouseout = function() {
	    
// 	}

// 	for (var i = 0; ml = menuLi.length, i < ml; i++) {
// 		//点击按钮滚动
// 		menuLi[i].onclick = (function(j){
// 			return function() {
// 				//当前按钮为白色 其他按钮为灰白色
// 				for (var i = 0; i < menuLi.length; i++) {
// 					menuLi[i].className = '';
// 				};
// 				this.className = 'active';

// 				//图片滚动
// 				if(box.offsetLeft > (-(liW * j))) {
// 					//滚动图片张数
// 					var dd = (box.offsetLeft - (-(liW * j)))/liW;
// 					var t = setInterval(function () {
// 						if (box.offsetLeft > (-(liW * j))) {
// 							box.style.left = box.offsetLeft - liW/10*dd + 'px';
// 						} else {
// 							clearInterval(t);
// 						}
// 					}, 10)
// 				}	
// 				if(box.offsetLeft < (-(liW * j))) {
// 					var dd = ((-(liW * j)) - box.offsetLeft)/liW;
// 					var t = setInterval(function () {
// 						if (box.offsetLeft < (-(liW * j))) {
// 							box.style.left = box.offsetLeft + liW/10*dd + 'px';
// 						} else {
// 							clearInterval(t);
// 						}
// 					}, 10)
// 				}	
// 			}
// 		}(i))
// 	};
// }