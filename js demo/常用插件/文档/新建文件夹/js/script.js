$(function() {
	var b_v = navigator.appVersion;
	var IE6 = b_v.search(/MSIE 6/i) != -1;
	var IE7 = b_v.search(/MSIE 7/i) != -1;
	if (IE6) {
		window.location.href = 'http://cdn.dmeng.net/upgrade-your-browser.html?referrer=' + location.href;
	} else if (IE7) {
		window.location.href = 'http://cdn.dmeng.net/upgrade-your-browser.html?referrer=' + location.href;
	};
});

	//分页功能====================== 分页功能 ======================分页功能====================== ====================== ====================== ====================== ======================
	function setPage(container, count, pageindex) {
		var container = container;
		var count = count;
		var pageindex = pageindex;
		var a = [];
		//总页数少于10 全部显示,大于10 显示前3 后3 中间3 其余....
		if (pageindex == 1) {
			a[a.length] = "<a href=\"#\" class=\"prev unclick\">上一页</a>";
		} else {
			a[a.length] = "<a href=\"#\" class=\"prev\">上一页</a>";
		}

		function setPageList() {
				if (pageindex == i) {
					a[a.length] = "<a href=\"#\" class=\"on\">" + i + "</a>";
				} else {
					a[a.length] = "<a href=\"#\">" + i + "</a>";
				}
			}
			//总页数小于10
		if (count <= 10) {
			for (var i = 1; i <= count; i++) {
				setPageList();
			}
		}
		//总页数大于10页
		else {
			if (pageindex <= 4) {
				for (var i = 1; i <= 5; i++) {
					setPageList();
				}
				a[a.length] = "<span>...</span><a href=\"#\">" + count + "</a>";
			} else if (pageindex >= count - 3) {
				a[a.length] = "<a href=\"#\">1</a><span>...</span>";
				for (var i = count - 4; i <= count; i++) {
					setPageList();
				}
			} else { //当前页在中间部分
				a[a.length] = "<a href=\"#\">1</a><span>...</span>";
				for (var i = pageindex - 2; i <= pageindex + 2; i++) {
					setPageList();
				}
				a[a.length] = "<span>...</span><a href=\"#\">" + count + "</a>";
			}
		}
		if (pageindex == count) {
			a[a.length] = "<a href=\"#\" class=\"next unclick\">下一页</a>";
		} else {
			a[a.length] = "<a href=\"#\" class=\"next\">下一页</a>";
		}
		container.innerHTML = a.join("");
		//事件点击
		var pageClick = function() {
			var oAlink = container.getElementsByTagName("a");
			var inx = pageindex; //初始的页码
			oAlink[0].onclick = function() { //点击上一页
				if (inx == 1) {
					return false;
				}
				inx--;
				setPage(container, count, inx);
				return false;
			}
			for (var i = 1; i < oAlink.length - 1; i++) { //点击页码
				oAlink[i].onclick = function() {
					inx = parseInt(this.innerHTML);
					setPage(container, count, inx);
					return false;
				}
			}
			oAlink[oAlink.length - 1].onclick = function() { //点击下一页
				if (inx == count) {
					return false;
				}
				inx++;
				setPage(container, count, inx);
				return false;
			}
		}()
	};
//	setPage(document.getElementsByClassName("nav_btns")[0],15,1);
//	setPage(document.getElementsByClassName("btn_navs")[0],15,1);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
//var webtuling = {
//	// 登录注册居中
//	center: function( dom ){
//		w = $(dom).width();
//		h = $(dom).height();
//		$(dom).css({
//			'marginLeft':-w/2,
//			'marginTop':-h/2
//		});
//		return this;
//	},
//	back_posw: function() {
//		var i = 0;
//		$('.back_posd1 button').on('click', function() {
//			i++;
//			$('.back_posd .email dl').eq(i).addClass('active');
//			$('.back_posd .text').eq(i).addClass('active').siblings().removeClass('active');
//		});
//		return this;
//	},
//	// header 滑过
//	header: function() {
//		$('.header .header_nav li:not(.login,.zhuce,.gerenzhongxin)').on('mouseover', function() {
//			$(this).addClass('on');
//			$(this).children('.uls').show();
//		});
//		$('.header .header_nav li:not(.login,.zhuce,.gerenzhongxin)').on('mouseout', function() {
//			$(this).removeClass('on');
//			$(this).children('.uls').hide();
//		});
//		return this;
//	},
//	indexbanner: function() {
//		// index icon居中  banner按钮居中
//		function width2(dom) {
//			var width = dom.width();
//			var height = dom.height();
//			dom.children('img').css({
//				'margin-left': -width / 2,
//				'margin-top': -height / 2
//			});
//		};
//		boxs_uls_lilen = $('#icon_13 div:not(".bg")').length;
//		for (i = 0; i < boxs_uls_lilen; i++) {
//			width2($('.boxs_uls_li-' + i + ''));
//		};
//		// index 第二个banner
//		var lis_len = $('.footer_box .on').find('li').length;
//		if (lis_len == 1) {
//			$('.wrap_footer .footer_left').children('img').attr({
//				'src': 'img/home/left_1.png'
//			})
//			$('.wrap_footer .footer_right').children('img').attr({
//				'src': 'img/home/right_1.png'
//			});
//		} else if (lis_len > 1) {
//			$('.wrap_footer .footer_left').children('img').attr({
//				'src': 'img/home/left.png'
//			})
//			$('.wrap_footer .footer_right').children('img').attr({
//				'src': 'img/home/right.png'
//			});
//		};
//		var content = 0;
//		var $box = $('.wrap_footer .footer_content');
//		$('.wrap_header li').on('click', function() {
//			index = $(this).index();
//			imgs = $(this).index() + 1;
//			len = $('.wrap_header li').length;
//			for (var j = 0, i = 0; i < len; i++) {
//				j++;
//				$('.wrap_header li').eq(i).find('img').attr({
//					'src': 'img/home/icon' + j + '.png'
//				});
//			};
//			$(this).find('img').attr({
//				'src': 'img/home/icon_b' + imgs + '.png'
//			});
//			$(this).addClass('on').siblings().removeClass('on');
//			$box.eq(index).addClass('on').siblings().removeClass('on');
//			$box.eq(index).children().css({
//				marginLeft: 0
//			});
//			lis_len = $('.footer_box .on').find('li').length;
//			if (lis_len == 1) {
//				$('.wrap_footer .footer_left').children('img').attr({
//					'src': 'img/home/left_1.png'
//				})
//				$('.wrap_footer .footer_right').children('img').attr({
//					'src': 'img/home/right_1.png'
//				});
//			} else if (lis_len > 1) {
//				$('.wrap_footer .footer_left').children('img').attr({
//					'src': 'img/home/left_1.png'
//				})
//				$('.wrap_footer .footer_right').children('img').attr({
//					'src': 'img/home/right.png'
//				});
//			};
//			content = 0;
//		});
//		$('.wrap_footer .footer_left').on('click', function() {
//			len = $('.footer_box .on').find('li').length;
//			if (content <= 0) {
//				content = 0;
//				return false;
//			};
//			content--;
//			if (content == 0) {
//				$(this).children('img').attr({
//					'src': 'img/home/left_1.png'
//				});
//			};
//			if (content >= 0) {
//				$('.wrap_footer .footer_right').children('img').attr({
//					'src': 'img/home/right.png'
//				});
//			};
//			$('.footer_box .on').children('ul').stop().animate({
//				marginLeft: -content * 1040
//			});
//		});
//		$('.wrap_footer .footer_right').on('click', function() {
//			len = $('.footer_box .on').find('li').length - 1;
//			if (content >= len) {
//				content = len;
//				return false;
//			};
//			content++;
//			if (content > 0) {
//				$('.wrap_footer .footer_left').children('img').attr({
//					'src': 'img/home/left.png'
//				});
//			};
//			if (content == len) {
//				$(this).children('img').attr({
//					'src': 'img/home/right_1.png'
//				});
//			}
//			$('.footer_box .on').children('ul').stop().animate({
//				marginLeft: -content * 1040
//			});
//		});
//		// index banner
//		var $uls = $('.nav_box .nav_uls');
//		var $lis = $('.nav_box .nav_lis');
//		var length = $uls.children('li').length;
//		var ulsW = $uls.children('li').width();
//		$lis.css({
//			marginLeft: -$lis.width() / 2
//		});
//		obj = {
//			centent: function(dom) {
//				w = dom.width(), h = dom.height();
//				dom.css({
//					marginTop: -h / 2,
//					marginLeft: -w / 2
//				});
//			},
//			banner: function(left, right, lis) {
//				var i = 0,
//					index, timer,
//					uls = $('.nav_banner .nav_uls li'),
//					parent = $('.nav_banner .nav_box'),
//					len = uls.length;
//
//				if (left == null) {
//					left.click(function() {
//						i = i <= 0 ? len : i;
//						i--;
//						show(i);
//					})
//				};
//				if (right == null) {
//					right.click(function() {
//						i++;
//						i = i == len ? 0 : i;
//						show(i);
//					})
//				};
//				lis.click(function() {
//					i = $(this).index();
//					show(i);
//				});
//
//				function data() {
//					timer = setInterval(function() {
//						i++;
//						i = i == len ? 0 : i;
//						show(i);
//					}, 2500);
//				};
//				data();
//				parent.mouseover(function() {
//					clearInterval(timer);
//				});
//				parent.mouseout(function() {
//					data();
//				});
//				var show = function(i) {
//					lis.eq(i).addClass('on').siblings().removeClass('on');
//					uls.eq(i).css({
//						'float': 'left',
//						'position': 'relative',
//						'opacity': 1,
//						'z-index': 2,
//						'-webkit-transition': 'opacity 500ms ease-in-out',
//						'transition': 'opacity 500ms ease-in-out',
//						'display': 'block'
//					}).addClass('on').siblings().css({
//						'float': 'left',
//						'position': 'absolute',
//						'opacity': 0,
//						'z-index': 1,
//						'-webkit-transition': 'opacity 500ms ease-in-out',
//						'transition': 'opacity 500ms ease-in-out',
//						'display': 'block'
//					}).removeClass('on');
//				}
//			}
//		};
//		obj.centent($('.nav_banner .nav_lis'));
//		obj.banner('', '', $('.nav_banner .nav_lis li'));
//		return this;
//
//	},
//	// 注册 登录 获取可是窗口高度
//	newHeight: function() {
//		var newheight = 0;
//		var d = document.documentElement,
//			b = document.body;
//		var vp = d && d.clientWidth && d.clientWidth != 0 ? {
//			width: d.clientWidth,
//			height: d.clientHeight
//		} : {
//			width: b.clientWidth,
//			height: b.clientHeight
//		};
//
//		if (newheight < vp.height) {
//			newheight = vp.height - 1;
//		}
//		$('html,body').height(newheight);
//		$('.bins .bg').height(newheight);
//		return this;
//	},
//	//文档导航
//	file: function() {
//		$('.file_box_left li').click(function() {
//			$(this).addClass('on').siblings().removeClass('on');
//			$(this).children('h2').parent().removeClass('on');
//		});
//		return this;
//	},
//	// 知识库左边菜单的高度
//	personalh: function() {
//		var html_h = $('html').height() - 85;
//		var h = $('.wrap').height();
//		if (h < html_h) {
//			$('.personal_left,.sidebar_nav,.personal_right_nav').height(html_h);
//		} else if (h > html_h) {
//			$('.personal_left,.sidebar_nav,.personal_right_nav').height(h);
//		};
//		return this;
//	},
//	// 缩小放大窗口会刷新
//	resize_x: function() {
//		var t = this;
//		$(window).bind("resize.xxx", function() {
//			t.newHeight();
//		});
//		return this;
//	},
//	// 弹出层
//	bins: function() {
//		// bins 弹出框
//		var i = 1;
//		var j = 0;
//		var binslen = $('.bins_btn').length;
//		// len = $('.bins_btn')    dom =  $('.bins_btn N ')   back = btn-default
//		for (i; i <= binslen; i++) {
//			$('.bins_btn' + i).attr('index', i);
//			$('.bins_btn' + i).click(function() {
//				j = $(this).attr('index');
//				$('.bins').show();
//				$('.bins_content' + j).show().siblings().hide();
//				$('.bins .bg').show();
//			});
//			$('.bins .btn-default').on('click', function() {
//				$('.bins').hide();
//				$('.bins_content' + j).show().siblings().hide();
//				$('.bins .bg').hide();
//			});
//		};
//		// bins 居中
//		var m = 0;
//		var n = 0;
//		var objw = [];
//		var	objh = [];
//		for( n; n < binslen; n++ ){
//			m++;
//			objw[n] = $('.bins_content' + m).width();
//			objh[n] = $('.bins_content' + m).height();
//			$('.bins_content' + m).css({
//				'marginLeft':-objw[n]/2,
//				'marginTop':-objh[n]/2
//			});
//		};
//		
//		// 自定义用户中心快捷入口
//		var clone = null;
//		function right_back( dom , img ,adddom ){
//			dom.on('click', function(){
//				clone = $(this).parent().clone( true );
//				text = $(this).parent().children('.text').html();
//				$(this).parent().remove();
//				$(clone).children('.right_back').children('img').attr('src',img);
//				adddom.append( clone );
//			});
//		};
//		right_back( $('#gaojituozhan1 li .right_back'),'../img/icon_add.png ', $('#gaojituozhan2') );
//		right_back( $('#gaojituozhan2 li .right_back'),'../img/icon_back.png ', $('#gaojituozhan1') );
//		
//		// 编辑 下的连接
//		dom = $('.bianji_box .lianjie .lianjie_l');
//		dom.children('div').on('click', function(){
//			index = $(this).index();
//			$(this).removeClass('active').siblings().addClass('active');
//		});
//		
//		return this;
//	},
//	// personal_left 内容
//	sidebar: function() {
//		var i = 0;
//		var w = null;
//		var textname = $('.sidebar_nav .text_name');
//		var len = textname.length;
//		$('.sidebar .sidebar_header').on('click', function() {
//			$('.personal_left').toggleClass('mini');
//			$('.personal_right').toggleClass('mini');
//			w = $('.personal_left').width();
//		});
//		//获取 top的值
//		for (var i = 0; i < len; i++) {
//			textname.eq(i).attr({
//				'y': (i + 1) * 40
//			});
//		};
//		$('.sidebar_nav .uls_header .right').on('click', function() {
//			return false;
//		});
//		$('.personal_right_nav .uls_header').on('click', function() {
//			$(this).toggleClass('active');
//			$(this).next().stop().slideToggle();
//		});
//		// 重新获取top的值
//		$('.sidebar_nav .uls_header').on('click', function() {
//			$(this).toggleClass('active');
//			$(this).next().stop().slideToggle();
//			$(this).next().find('a').toggleClass('text_name');
//			var text_name = $('.sidebar_nav .text_name');
//			var lens = text_name.length;
//			for (var i = 0; i < lens; i++) {
//				text_name.eq(i).attr({
//					y: (i + 1) * 40
//				});
//			};
//		});
//		textname.on('mouseover', function() {
//			if (w == 55) {
//				var name = $(this).attr('text_name');
//				var y = $(this).attr('y');
//				$('.move_text .text').html(name);
//				$('.move_text').css({
//					'right': '-125px',
//					'top': y + 'px',
//					display: 'block'
//				});
//			} else {
//				return false;
//			};
//		});
//		textname.on('mouseout', function() {
//			if (w == 55) {
//				$('.move_text').hide();
//				$('.move_text .text').html(' ');
//			} else {
//				return false;
//			};
//		});
//		
//		return this;
//	},
//	// 三级导航
//	personal_rightnav: function() {
//		$('.personal_right_nav li a').on('mouseover', function() {
//			$(this).css({
//				'background': '#f8f8f8'
//			});
//		});
//		$('.personal_right_nav li a').on('mouseout', function() {
//			$(this).css({
//				'background': 'none'
//			});
//		});
//		$('.personal_right .personal_click').on('click', function() {
//			$(this).toggleClass('mini');
//			$('.personal_right_nav').toggleClass('mini');
//			$('.personal_right_box').toggleClass('mini');
//		});
//		return this;
//	},
//	//switch按钮
//	switch: function() {
//		$('#switch').on('click', function(){
//			if(	$(this).children().attr('class') == 'switch-on switch-animate' ){
//				$(this).children().attr('class', 'switch-off switch-animate')
//				$('.switch').children().attr('class', 'switch-off switch-animate')
//			} else {
//				$(this).children().attr('class', 'switch-on switch-animate')
//				$('.switch').children().attr('class', 'switch-on switch-animate');
//			};
//		});
//		$('.personal_right .switch:not("#switch")').on('click', function() {
//			$(this).children().attr('class') == 'switch-on switch-animate' ? $(this).children().attr('class', 'switch-off switch-animate') : $(this).children().attr('class', 'switch-on switch-animate');
//		});
//		return this;
//	},
//	// 社区
//	tieba: function() {
//		//	贴吧
//		$('.shequ .tieba').find('.pinglun_btns,.new_huifu').on('click', function() {
//			$(this).parents('.tieba').find('.neirong').stop().slideToggle();
//		});
//		
//		demo_nav2len = $('#demo_nav2').children().length - 1;
//		nav_index = 0;
//
//		// 社区公告
//		function demo_nav2() {
//			timers = setInterval(function() {
//				if (nav_index == demo_nav2len) {
//					nav_index = 0;
//				} else {
//					nav_index++;
//				};
//				$('#demo_nav2').children().eq(nav_index).css({
//					'float': 'left',
//					'position': 'relative',
//					'opacity': 1,
//					'z-index': 2,
//					'-webkit-transition': 'opacity 500ms ease-in-out',
//					'transition': 'opacity 500ms ease-in-out',
//					'display': 'block'
//				}).addClass('on').siblings().css({
//					'float': 'left',
//					'position': 'absolute',
//					'opacity': 0,
//					'z-index': 1,
//					'-webkit-transition': 'opacity 500ms ease-in-out',
//					'transition': 'opacity 500ms ease-in-out',
//					'display': 'block'
//				}).removeClass('on');
//			}, 3000);
//		};
//		$('#demo_nav2').on('mouseover', function() {
//			clearInterval(timers);
//		});
//		$('#demo_nav2').on('mouseout', function() {
//			demo_nav2();
//		});
//		demo_nav2();
//		return this;
//	},
//	//  机器人设定
//	service: function(){
//		// 声音 童男女声音
//		$('.personal_right .shengyin span').on('click', function() {
//			$(this).addClass('active').siblings().removeClass('active');
//		});
//		
//		// 添加删除关键词
//		$('.guolv .add_guanjianci').on('click', function(){
//			clone = '<div class="guanjianci"><div class="box"><input type="text"><span><img src="../img/icon84.png"></span></div></div>';
//			$('.guolv li ').eq(1).append( clone,$('.add_guanjianci'));
//		});
//		$('.guolv .guanjianci .box span').on('click', function(){
//			// 删除
//		});
//		// 新增关键词回复
//		var i = 0;
//		$('.guolv .input input').keydown(function(event){
//			e = window.event || event;
//			inputs = '<input type="text" placeholder="请再此输入关键词回复">';
//			i++;
//			if( i >= 3 ){
//				console.log(i)
//				return false;
//			};
//			if( e.keyCode == 13 ){
//				$('.guolv .input').append( inputs );
//			};
//		});
//		return this;
//	}
//};