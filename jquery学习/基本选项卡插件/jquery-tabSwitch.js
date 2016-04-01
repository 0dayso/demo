;(function($,window,document,undifined) {
	$(function() {
		$.fn.myTab = function(options) {
			//设置默认参数
			var defaults = {
				menu : ['1','2'],
				con : ['我是选项一','我是选项二']
			}

			//参数合并 保护默认参数
			var settings = $.extend({},defaults,options);
			// debugger;

			//创建选项卡
			var as = '', divs = '';
			for (var i = 0; i < settings.menu.length; i++) {
				as += '<a href="javascript:;">'+settings.menu[i]+'</a>';
				divs += '<div>'+settings.con[i]+'</div>';
			};
			var _this = this;
			_this.html(as+divs);
			_this.children('a').first().addClass('active').end().end()
			.children('div').first().show();

			//切换
			_this.children('a').each(function() {
				$(this).on('click',function() {
					var i = $(this).index();
					$(this).addClass('active').siblings('a').removeClass('active');
					_this.children('div').eq(i).show().siblings('div').hide();
				})
			})

			return this;
		}
	})
})(jQuery,window,document)