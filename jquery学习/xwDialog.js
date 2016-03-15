!(function($){
	$.xwDialog=function(){
		var dialog_id="#xwDialog";
		var mask_id="#xwMask";
		var cssText=
			'<style id="xwDialog_style">'+
			'#xwMask{background-color:#000;width:100%;height:100%;opacity:0.5;filter:alpha(opacity=50);position:absolute;top:0;left:0;z-index:999;}'+
			'#xwDialog{position:absolute;z-index:1000;min-width:220px;}'+
			'#xwDialog .inner{border:1px #0056ac solid;background-color:#fff;overflow:hidden;}'+
			'#xwDialog .inner .close{position:absolute;right:0;top:0;font-size:16px; padding:4px 12px;color:#fff}'+
			'#xwDialog h2{color:#fff;text-align:center;padding:4px;font-size:16px;background-color:#1174d7;text-shadow:1px 1px 0px #00356a;}'+
			'#xwDialog .content{margin:10px}'+
			'#xwDialog .btns{text-align:center;}'+
			'#xwDialog .btns span{display:inline-block;background-color:#1174d7;border:1px #0056ac solid;border-radius:3px;color:#fff;cursor:pointer;margin:6px;line-height:24px;padding:0 16px}'+
			'#xwDialog.skin01 .inner{border-color:#666}'+
			'#xwDialog.skin01 h2{background-color:#666;}'+
			'#xwDialog.skin01 .btns span{background-color:#666}'+
			'#xwDialog.skin02 .inner{border-color:#c06a0c}'+
			'#xwDialog.skin02 h2{background-color:#db790d;}'+
			'#xwDialog.skin02 .btns span{background-color:#db790d}</style>';
		function popup(){
			console.log(this);
		    if($(mask_id).length==0){
				$("head").append(cssText);
			    $(document.body).append('<div id="xwMask"></div><div id="xwDialog"><div class="inner"><span class="close">X</span><h2></h2><div class="content"></div><div class="btns"></div></div></div>')
			}
	        $(mask_id).height($(document).height());	
			$(dialog_id).css({ 
				  top:function(){ return ($(window).height() - $(this).height())/2},
				  left:function(){ return ($(window).width() - $(this).width())/2}
			});
		     $(dialog_id).find(".close").click(this.hide);
			 return this;
		}

		function hide(){
		      $(mask_id).remove(); $(dialog_id).remove();$("#xwDialog_style").remove();
		}
		function insertTitle(str){
		    $(dialog_id).find("h2").eq(0).text(str);
			return this;
		}
		function insertContent(str){
		    $(dialog_id).find(".content").eq(0).html(str);
			 var y= ($(window).height() - $(dialog_id).height())/2;
			 var x=($(window).width() - $(dialog_id).width())/2;
			 $(dialog_id).animate({top:y,left:x},"fast");
			 return this;
		}
		function insertBtn(btnText,fn){
            $("<span></span>")
				 .text(btnText)
				 .appendTo(     $(dialog_id).find(".btns").eq(0)      )
				 .bind("click",fn);
			return this;
		}
		function setSkin(skinName){
		    $(dialog_id).addClass(skinName);return this;
		}
	  return {
		  "popup":popup,
		  "hide":hide,
		  "insertTitle":insertTitle,
		  "insertContent":insertContent,
		  "insertBtn":insertBtn,
		  "setSkin":setSkin
	  }
	}
})(jQuery)
