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