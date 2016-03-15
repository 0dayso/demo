/*
	默认参数：{
		'width' : 200,							单列宽度 
		'space' : 10,							间距	
		'requestNums' : 5 						最大请求次数	
		'url' : 'http://www.wookmark.com/api/json/popular?callback=?'  数据地址
	};
*/
;(function($) {
	$.fn.waterfallFlow = function(options) {
		var _this = this;
		var defaults = {
			'width' : 200,
			'space' : 10,
			'requestNums' : 5,
			'url' : 'http://www.wookmark.com/api/json/popular?callback=?'
		};
		var settings = $.extend({}, defaults, options);
		var iCells = 0;
		var iWidth = settings.width;
		var iSpace = settings.space;
		var iOuterWidth = iWidth + iSpace;
		var url = settings.url;
		var arrL = [];
		var arrT = [];
		var iPage = 0;
		var iBtn = true;				
		var setCell = function() {
			iCells = Math.floor($(window).innerWidth() / iOuterWidth);
			iCells = iCells > 6 ? 6 : iCells < 3 ? 3 : iCells;
			_this.css('width', iOuterWidth*iCells-iSpace);
		};				
		//初始布局
		function createBox() {
			_this.attr('style','position: relative; margin: 50px auto 0;');
			_this.after('<div id="loading" style="width: 100%; height: 100px; background: url(loading.gif) no-repeat center #FFF; position: fixed; bottom: 0; left: 0;"></div>');
		}
		createBox();
		setCell();

		//图片初始left和top
		for (var i = 0; i < iCells; i++) {
			arrT.push(0);
			arrL.push(iOuterWidth * i);
		}

		getData();
		//请求数据并渲染
		function getData() {
			if (!iBtn) return;
			iBtn = false;
			iPage ++;
			if (iPage > settings.requestNums) return;
			$('#loading').show();
			$.getJSON(url, {page : iPage}, function(data) {		
				$.each(data, function(index,obj) {
					var oImg = $('<img />');
					var iHeight = obj.height * iWidth / obj.width;
					oImg.css({'width':iWidth, 'height':iHeight, 'position':'absolute'});
					var _index = min();
					oImg.css({'top':arrT[_index], 'left':arrL[_index]});
					arrT[_index] += iHeight + iSpace;
					var image = new Image();
					image.onload = function() {
						oImg.attr('src', this.src)
					}
					image.src = obj.preview;
					_this.append(oImg);
					setTimeout(function() {
						$('#loading').hide();
					}, 1000)
					iBtn = true;
				})
			})
		}
		//返回高度最小的列
		function min() {	
			var min = arrT[0];
			var _index = 0;
			for (var i = 0; i < arrT.length; i++) {
				if (arrT[i] < min) {
					min = arrT[i];
					_index = i;
				}
			};
			return _index;
		}
		//滚动加载
		$(window).on('scroll', function() {
			var _index = min();
			var wHeight = $(window).innerHeight() + $(window).scrollTop();
			if (arrT[_index] + 50 < wHeight) {
				getData();
			}
		})
		//改变窗口大小
		$(window).on('resize', function() {	
			var iLen = iCells;	
			setCell();	
			if (iLen == iCells) return;
			arrL = [];
			arrT = [];
			for (var i = 0; i < iCells; i++) {
				arrT.push(0);
				arrL.push(iOuterWidth * i);
			}
			_this.find('img').each(function() {			
				var _index = min();
				$(this).animate({left:arrL[_index], top:arrT[_index]}, 1000);
				arrT[_index] += $(this).height() + iSpace;				
			});
		})
	}
})(jQuery);