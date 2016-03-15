/**
 * Created by liusheng on 8/31/15.
 */
var Util = {
	addHandler: function (element, type, handler) {
		if (element, addEventListener) {
			element.addEventListener(type, handler);
		} else if (element.attachEvent) {
			element.attachEvent("on" + type, handler);
		} else {
			element["on" + type] = handler;
		}
	},
	removeHandler: function (element, type, handler) {
		if (element.removeEventListener) {
			element.removeEventListener(type, handler);
		} else if (element.detachEvent) {
			element.detachEvent("on" + type, handler);
		} else {
			element["on" + type] = null;
		}
	},
	createElement: function (tagType, attr) {
		var elem = document.createElement(tagType);
		if (attr) {
			for (var i in attr) {
				elem.setAttribute(i, attr[i]);
			}
		}
		return elem;
	},
	getCookie: function (name) {
		var cookieName = encodeURIComponent(name) + '=',
			cookieStart = document.cookie.indexOf(cookieName),
			cookieValue = null;
		if (cookieStart > -1) {
			var cookieEnd = document.cookie.indexOf(";", cookieStart);
			if (cookieEnd === -1) {
				cookieEnd = document.cookie.length;
			}
			cookieValue = decodeURIComponent(document.cookie.substring(cookieStart) + cookieName.length, cookieEnd);
		}
		return cookieValue;
	},
	setCookie: function (name, value, expires, path, domain, secure) {
		var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
		if (expires instanceof Date) {
			cookieText += "; expires=" + expires.toGMTString();
		}
		if (path) {
			cookieText += "; path=" + path;
		}
		if (domain) {
			domain.replace(/^www/, '');
			cookieText += "; domain=" + domain;
		}
		if (secure) {
			cookieText += "; secure"
		}
		document.cookie = cookieText;
	},
	unsetCookie: function (name, path, domain, secure) {
		this.set(name, "", new Date(0), path, domain, secure);
	},
	createXHR: function () {
		if (typeof XMLHttpRequest !== "undefined") {
			return new XMLHttpRequest();
		} else if (typeof ActiveXObject !== "undefined") {
			if (typeof arguments.callee.activeXString !== "string") {
				var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"], i, len;
				for (i = 0, len = versions.length; i < len; i++) {
					try {
						new ActiveXObject(versions[i]);
						arguments.callee.activeXString = versions[i];
						break;
					} catch (ex) {
					}
				}
			}
			return new ActiveXObject(arguments.callee.activeXString);
		} else {
			throw new Error("NO XHR object availabe");
		}
	}

};

function init() {
	if (Util.getCookie('TTS_paopao')) {
		return;
	}
/*	setTimeout(function () {
		if (document.getElementById('__TTS_union')) {
			if (document.getElementById('J_tts_bubble_frame')) {
				return;
			}
		}*/
		addElement();
	//}, 5000);
}

function addElement() {

	var divObj = {
		class: 'tts_paopao'
	};
	var iframeURL = "http://show.kc.taotaosou.com/popup.do?pid=" + window.TTS_pid + "&mediaId=" + window.TTS_mediaId + "&userId=" + window.TTS_userId;
	var iframeObj = {
		src: iframeURL,
		width: "300px",
		height: "300px",
		class: "tts_iframe"
	};

	var closeObj = {
		class: "tts_close_icon",
		id: "tts_close_icon",
		href: "javascript:void(0)"
	};

	var textObj = {
		class: "text_wrap"
	};

	var iconObj = {
		class: "icon_wrap"
	};

	var styleURL = "http://show.kc.taotaosou.com/tts/tts.css";
	var styleObj = {
		href: styleURL,
		rel: "stylesheet",
		type: "text/jsvascript"
	};
	var elem = Util.createElement('div', divObj), elem1 = Util.createElement("iframe", iframeObj), elem2 = Util.createElement("a", closeObj), elem3 = Util.createElement("link", styleObj), elem4 = Util.createElement('div', textObj),
		elem5 = Util.createElement('div', iconObj), elem6, elem7;
	elem6 = document.createTextNode('鍏抽棴');
	elem7 = document.createTextNode('x');
	elem4.appendChild(elem6);
	elem5.appendChild(elem7);
	elem2.appendChild(elem4);
	elem2.appendChild(elem5);
	elem.appendChild(elem1);
	elem.appendChild(elem2);
	document.body.appendChild(elem);
	document.getElementsByTagName('head')[0].appendChild(elem3);
	checkForPaopao();
	addEvent();
}

function addEvent() {
	Util.addHandler(document.getElementById('tts_close_icon'), 'click', tts_close);
}

function showPaopao() {
	setTimeout(function () {
		document.getElementsByClassName('tts_paopao')[0].style.bottom = "0px";
	}, 0);
	var winDomain = document.domain;
	var domainExp = new Date(Date.now() + 60 * 60 * 1000);
	Util.setCookie('TTS_paopao', 'hasShown', domainExp, '', winDomain);
}

function tts_close() {
	document.getElementsByClassName('tts_paopao')[0].style.bottom = "-340px";
}

function checkForPaopao() {
/*	var times = 5, tts_timeoutId;

	function paopaoExist() {
		if (!times) {
			clearTimeout(tts_timeoutId);
			return;
		}
		if (document.getElementById('J_tts_bubble_frame')) {
			document.getElementsByClassName('tts_paopao').style.display = "none";
		} else {
			times--;
			tts_timeoutId = setTimeout(paopaoExist, 1000);
		}
	}*/

	//tts_timeoutId = setTimeout(paopaoExist, 1000);
	Util.addHandler(document.getElementsByClassName('tts_iframe')[0], 'load', showPaopao);
}

/*function checkIframe(){
 console.log(document.getElementsByClassName('tts_iframe')[0].getElementsByTagName('img'));
 if(!document.getElementsByClassName('tts_iframe')[0].getElementsByTagName('img')){
 document.getElementsByClassName('tts_paopao').style.display = "none";
 }
 addEvent();
 }*/

if (document.addEventListener) {
	Util.addHandler(window, "DOMContentLoaded", init);
} else if (document.attachEvent) {
	document.onreadystatechange = function () {
		if (document.readyState === "interactive") {
			init();
		}
	};
}