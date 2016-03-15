;!function($) {
	$(function() {
		$.fn.myDialog = function() {
			var cssText = '<style>\
											*{ margin: 0; padding: 0;}\
											#fullbg{ width: 100%; height: 100%; background: #000; opacity: 0.5; -moz-opacity:0.5; filter:alpha(opacity=50);\
											 position: absolute; left: 0; top:0; z-index: 10000; display: none;}\
											#myDialog{ width: 300px; height: 300px; background: #999; position: absolute; z-index: 10001; display: none;}\
											#myDialog p{ height: 30px; line-height: 30px; background: #ccc;}\
											#myDialog p a{ position: absolute; right: 0;}\
											#btn{ position: absolute; top: 1000px;}\
										</style>';
			var html = '<div id="fullbg"></div>\
									<div id="myDialog">\
										<p><a id="dialogClose" href="javascript:;">关闭</a></p>\
									</div>';
			$('body').append(cssText).append(html);
			$('#fullbg').show();
			$('#myDialog').show();
			autoPos();			
			$('#dialogClose').click(function() {
				$('#fullbg').hide();
				$('#myDialog').hide();
			})
			$(document).click(function() {
				$('#fullbg').hide();
				$('#myDialog').hide();
			})
			$('#myDialog').click(function(ev) {
				ev.stopPropagation();
			})
			$(window).scroll(function() {
				autoPos();
			})
			$(window).resize(function() {
				autoPos();
			})
			function autoPos() {
				var dialogW = $('#myDialog').width(),
						dialogH = $('#myDialog').height(),
						sTop = $(window).scrollTop();
				$('#myDialog').offset({
					top : ($(window).height()-dialogH)/2 + sTop,
					left : ($(window).width()-dialogW)/2 + $(window).scrollLeft()
				});
				$('#fullbg').offset({top:sTop});
			}					
		}


		// $.fn.extend({"drag":function(){
	 // 			    this.each(function(){
		//  			  var _this = this;
		// 			 	  $(_this).bind("mousedown",function(event){ 
		// 			 	  	  _scrollTop = $(document).scrollTop();
		// 						  var eLeft = event.pageX;
		// 						  var eTop = event.pageY;
		// 						  var pLeft = $(this).offset().left;
		// 						  var pTop = $(this).offset().top;
		// 						  var mLeft = eLeft - pLeft;
		// 						  var mTop = eTop - pTop;
		// 						  $(document).bind("mousemove",function(ev){
		// 						  	 var pageLeft  = ev.pageX -mLeft ;
		// 						  	 var pageTop = ev.pageY - mTop;
		// 						   	if ( pageLeft < 0 ) {
		// 						   		pageLeft = 0
		// 						   	} else if ( pageLeft > $(window).width()-$(_this).width() ) {
		// 						   		pageLeft = $(window).width()-$(_this).width()
		// 						   	}
		// 						   	if ( pageTop < 0 ) {
		// 						   		pageTop = 0
		// 						   	} else if ( pageTop > $(window).height()-$(_this).height() ) {
		// 						   		pageTop = $(window).height()-$(_this).height()
		// 						   	}

		// 						  	$(_this).css({"top":pageTop,"left":pageLeft})
		// 						  	  if(this.setCapture){
		// 						  	  	   this.setCapture();
		// 						  	  	}else if(window.captureEvents){
		// 						  	  		 window.captureEvents(Event.mouseMove);
		// 						  	  	}
		// 						  	});
		// 					  	$(document).bind("mouseup",function(){
		// 						  		 if(this.releaseCapture){
		// 						  	       this.releaseCapture();
		// 						  	  	}else if(window.releaseEvents){
		// 						  	  		 window.releaseEvents(Event.mouseMove);
		// 						  	  		}
		// 					  		  $(document).unbind("mousemove").unbind("mouseup");
		// 				  		});
		// 			  		 if(this.setCapture){
		// 			  	  	   this.setCapture();
		// 			  	  	}else if(window.captureEvents){
		// 			  	  		 window.captureEvents(Event.mouseDown);
		// 			  	  	}
		// 			  		event.stopPropagation();
		// 			  		event.preventDefault()
		// 				  });
		// 	})
		// }});
	})
}(jQuery)