$(function (){
	//搜索框切换
	;(function (){
		var aLi = $('#menu li'),
				txt = $('#search').find('.form .txt');
		var arrText = [
			'例如：荷棠鱼坊烧鱼 或 樱花日本料理',
			'例如：昌平区育新站龙旗广场2号楼609室',
			'例如：万达影院双人情侣券',
			'例如：东莞出事了，大老虎是谁？',
			'例如：北京初春降雪，天气变幻莫测'
		];
		var iNow = 0;
		txt.val( arrText[iNow] );

		aLi.each(function (i){
			$(aLi[i]).click(function(){
				iNow = i;
				$(aLi[iNow]).addClass('active')
				.siblings().removeClass('active');
				txt.val( arrText[iNow] );
			})
		})
		txt.focus(function (){
			if( $(this).val() == arrText[iNow] ) {
				$(this).val('');
			}
		});
		txt.blur(function (){
			if( $(this).val() == '' ) {
				$(this).val(arrText[iNow]);
			}
		});

	})()

	//update文字弹性滑动
	;(function (){
		var arrData = [
			{ 'name':'萱萱', 'time':4, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/' },
			{ 'name':'畅畅', 'time':5, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.miaov.com/2013/#curriculum' },
			{ 'name':'萱萱', 'time':6, 'title':'国台办回应王郁琦', 'url':'http://www.miaov.com/2013/#about' },
			{ 'name':'畅畅', 'time':7, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/#message' },
			{ 'name':'萱萱', 'time':8, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/' },
			{ 'name':'畅畅', 'time':9, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.miaov.com/2013/#curriculum' },
			{ 'name':'萱萱', 'time':10, 'title':'国台办回应王郁琦', 'url':'http://www.miaov.com/2013/#about' },
			{ 'name':'畅畅', 'time':11, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/#message' }
		];
		var wrap = $('#search .wrap');
		var oUl = wrap.find('ul');
		var iH = 0;
		var str = '';
		var up = $('#updateUpBtn');
		var down = $('#updateDownBtn');
		var iNow = 0;
		var timer = null;

		for (var i = 0; i < arrData.length; i++) {
			str += '<li><a href="'+arrData[i]["name"]+'">\
										<strong>'+arrData[i]["name"]+'</strong>\
										<span>'+arrData[i]["time"]+'分钟前</span>\
										写了一篇新文章：'+arrData[i]["title"]+'...\
							</a></li>'			
		};
		oUl.html( str );
		iH = oUl.find('li').height();
		up.click(function (){
			doMove(-1)
		})
		down.click(function (){
			doMove(1)
		})
		wrap.hover(function (){
			clearInterval(timer);
		},autoPlay);
		function autoPlay(){
			timer = setInterval(function (){
				doMove(-1)
			},3500)
		}
		autoPlay();
		function doMove(num){
			iNow += num;
			if ( Math.abs(iNow) > arrData.length - 1 ){
				iNow = 0;
			}
			if ( iNow > 0 ){
				iNow = -( arrData.length - 1 );
			}
			oUl.stop().animate({'top':iH*iNow}, 2200, 'elasticOut')
		}
	})()

	//shop切换
	;(function (){
		var menu = $('.tabNav1 li');
		var con = $('.tabCon1');
		menu.each(function (i){
			$(this).click(function (){
				$(this).removeClass('gradient').addClass('active')
				.find('a').attr('class','triangle_down_red').end()
				.siblings('li').removeClass('active').addClass('gradient')
				.find('a').attr('class','triangle_down_gray');
				con.eq(i).show().siblings('.tabCon1').hide();
			})
		})
	})()
	

})


