//淘宝代码 防止多个window.onload冲突
前端工程师学习历程

第一阶段：
html       
css

第二阶段：
《JavaScript》
《jQuery》
《心理学》
《论持久战》

第三阶段：
《颈椎病康复指南》
《腰椎间盘突出日常护理》
《心脏病的预防与防治》
《高血压降压宝典》
《强迫症的自我恢复》
《精神病症状学》《胃永强》《结石治疗》

第四阶段：
《活着》

domReady = (function(ready) {
    var fns = []
    var fn
    var f = false
    var doc = document
    var testEl = doc.documentElement
    var hack = testEl.doScroll
    var domContentLoaded = 'DOMContentLoaded'
    var addEventListener = 'addEventListener'
    var onreadystatechange = 'onreadystatechange'
    var readyState = 'readyState'
    var loadedRgx = hack ? /^loaded|^c/ : /^loaded|c/
    var loaded = loadedRgx.test(doc[readyState])

    function flush(f) {
        loaded = 1
        while (f = fns.shift()) f()
    }

    if (doc[addEventListener]) {
        fn = function() {
            doc.removeEventListener(domContentLoaded, fn, f)
            flush()
        }
        doc[addEventListener](domContentLoaded, fn, f)
    }

    if (hack) {
        fn = function() {
            if (/^c/.test(doc[readyState])) {
                doc.detachEvent(onreadystatechange, fn)
                flush()
            }
        }
        doc.attachEvent(onreadystatechange, fn)
    }

    if (!hack) {
        return function(fn) {
            if (loaded) {
                fn()
            } else {
                fns.push(fn)
            }
        }
    } else {
        ready = function(fn) {
            if (this != top) {
                if (loaded) {
                    fn()
                } else {
                    fns.push(fn)
                }
            } else {
                try {
                    testEl.doScroll('left')
                } catch (e) {
                    return setTimeout(function() {
                        ready(fn)
                    }, 50)
                }
                fn()
            }
        }
        return ready;
    }
})();


/*绑定事件监听函数*/
function addHandler(element, type, fn) {
    if (element.addEventListener) {
        element.addEventListener(type, fn, false);
    } else if(element.attachEvent) {
        element.attachEvent("on" + type, function() {
            fn.call(element)
        });
    } else {
        element['on'+type] = fn;
    }
}
/*取消事件绑定*/
function removeHandler(element, type, fn) {
    if (element.removeEventListener) {
        element.removeEventListener(type, fn, false)
    } else if (element.detachEvent) {
        element.detachEvent("on"+type, fn)
    } else {
        element['on'+type] = null;
    }
}
 
// 比如绑定window.onload事件
addListener(window, "load", 
    function() {
        alert('window.onload is execute');
    }
);


/*HTML检测ie版本代码*/
<!--[if !IE]><!--> 除IE外都可识别 <!--<![endif]-->
<!--[if IE]> 所有的IE可识别 <![endif]-->
<!--[if IE 6]> 仅IE6可识别 <![endif]-->
<!--[if lt IE 6]> IE6以及IE6以下版本可识别 <![endif]-->
<!--[if gte IE 6]> IE6以及IE6以上版本可识别 <![endif]-->
<!--[if IE 7]> 仅IE7可识别 <![endif]-->
<!--[if lt IE 7]> IE7以及IE7以下版本可识别 <![endif]-->
<!--[if gte IE 7]> IE7以及IE7以上版本可识别 <![endif]-->
<!--[if IE 8]> 仅IE8可识别 <![endif]-->
<!--[if IE 9]> 仅IE9可识别 <![endif]-->
ie9以下
var isIE = function(ver){
    var b = document.createElement('b')
    b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->'
    return b.getElementsByTagName('i').length === 1
}


/*滚动条滚动高度*/
var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

/*iframe相关*/
//子页面获取父页面iframe 不同域名下获取不到
window.parent.document.getElementById('myFrame');
window.name //获取父页面iframe的name 同域名下数据获取

/*js执行顺序*/
1. 读入第一个代码块。
2. 做语法分析，有错则报语法错误（比如括号不匹配等），并跳转到 5。
3. 对var变量和function定义做“预编译处理”（永远不会报错的，因为只解析正确的声明）。
4. 执行代码段，有错则报错（比如变量未定义）。
5. 如果还有下一个代码段，则读入下一个代码段，重复 2。
6. 结束。


/*insertAfter函数封装 目标节点之后插入节点*/
function insertAfter(target, bullet) {
   target.nextSibling ? target.parentNode.insertBefore(bullet, target.nextSibling) : target.parentNode.appendChild(bullet);
}


/*原生js获取样式属性（obj.style 只能获取行间样式 样式表里的样式获取不到）*/
function css(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else if (window.getComputedStyle) {
        return document.defaultView.getComputedStyle(obj, null)[attr];
    }
}
function css(obj, attr, value) {
    switch (arguments.length) {
        case 2:
            if (typeof arguments[1] == "object") { //二个参数, 如果第二个参数是对象, 批量设置属性
                for (var i in attr) obj.style[i] = attr[i]
            } else { //二个参数, 如果第二个参数是字符串, 读取属性值
                return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, null)[attr]
            }
            break;
        case 3:
            //三个参数, 单一设置属性
            obj.style[attr] = value;
            break;
        default:
            alert("参数错误！")
    }
}

/*日期字符串转时间戳 '2015-04-07'*/
//1.精确到时分秒 2015-04-07 14-22-33
function covertime(date) {
    var date = date.split('-');
    var d = new Date();
    d.setFullYear(date[0]);
    d.setMonth(date[1]);
    d.setDate(date[2]);
    return Date.parse(d);   //Date.parse("2015-06-26 13:48:30"); 1435297710000  日期格式转时间戳
}
alert(covertime('2015-04-07'));//1430980899000(精确到时分秒)
//2.精确到天 2015-04-07 00-00-00
var date = '2015-04-07';
date = new Date(Date.parse(date.replace(/-/g, "/")));
date = date.getTime();
alert(date);

//获取当前时间的时间戳
(+new Date);
new Date().getTime();


//取min到max之间的值
function range(num, max, min){
    return Math.min(max, Math.Max(num, min));
}

//区别火狐
try {
    document.createEvent('MouseScrollEvents');
    alert('firefox')
} catch(e){
    alert('other')
}


//匿名函数自执行 简化写法
!function add(a,b){
  console.log(a+b)
}(1,2),                 //3
function sum(a,b){
  console.log(a-b)
}(1,2);                 //-1


//行间js函数 参数转义 注意单双引号隔开使用
imgBox.innerHTML = '<a href="'+ads[i]['tourl']+'" target="_blank" onclick="clickImg(\'e\', \''+ads[i]['curl']+'\');"><img src="'+ads[i]['picurl']+'" width="270" height="250" /></a>';

//window.onload 页面加载完成函数封装
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}
//domReady函数
function IEContentLoaded (w, fn) {
    var d = w.document, done = false,
    // 只执行一次用户的回调函数init()
    init = function () {
        if (!done) {
            done = true;
            fn();
        }
    };
    (function () {
        try {
            // DOM树未创建完之前调用doScroll会抛出错误
            d.documentElement.doScroll('left');
        } catch (e) {
            //延迟再试一次~
            setTimeout(arguments.callee, 50);
            return;
        }
        // 没有错误就表示DOM树创建完毕，然后立马执行用户回调
        init();
    })();
    //监听document的加载状态
    d.onreadystatechange = function() {
        // 如果用户是在domReady之后绑定的函数，就立马执行
        if (d.readyState == 'complete') {
            d.onreadystatechange = null;
            init();
        }
    };
}


//replace()
var str = "BDSVRTM H_PS_PSSID NBID BD_TMP_CK H_PS_LC";
str.replace(/\w+/g, function(a,b,c){ console.log(a) })
//第一个参数是模式匹配结果 
BDSVRTM 
H_PS_PSSID 
NBID 
BD_TMP_CK 
H_PS_LC 、
//第二个参数是每个匹配项的起始位置
0 
8 
19 
24 
34 
//第三个参数是str自身
BDSVRTM H_PS_PSSID NBID BD_TMP_CK H_PS_LC (*5)


function stopPropagation(e) { 
//如果提供了事件对象，则这是一个非IE浏览器 
if ( e && e.stopPropagation ) 
    //因此它支持W3C的stopPropagation()方法 
    e.stopPropagation(); 
else
    //否则，我们需要使用IE的方式来取消事件冒泡 
    window.event.cancelBubble = true; 
}

function preventDefault( e ) { 
    //阻止默认浏览器动作(W3C) 
    if ( e && e.preventDefault ) 
        e.preventDefault(); 
    //IE中阻止函数器默认动作的方式 
    else
        window.event.returnValue = false; 
    return false; 
}


//添加收藏  ie下有效 
function bookMark(url, title) {
    var d = url || window.location.href, e = title || document.title;
    try {
      window.external.AddFavorite(d, e)
    } catch (a) {
      try {
        window.sidebar.addPanel(e, d, '')
      } catch (a) {
           window.alert('请您尝试同时按下Ctrl和D键收藏本页')
      }
    }
}

//字符串和json对象转换
var str = '{"name":"fengge","age":"26"}';
var json = {name:'fengge',age:'26'};
console.log(str);
//JSON.parse(str) 从字符串解析出对象
console.log(JSON.parse(str));
//stringify() 从对象解析出字符串
console.log(json);
console.log(JSON.stringify(json));


//连续三目运算
a = 1 > 2 ? 3 : 1 > 3 ? 4 : 5;
console.log(a); //5


//jq $().each和$.each()用法 $().each操作DOM  $.each操作数组或对象
var arr = ['a','b','c'];
$.each(arr,function(i,val){
    console.log('下标'+i+'值为：'+val);
})
var obj = { one:1, two:2, three:3, four:4};
$.each(obj, function(key, val) {
    console.log(val);
});

//indexOf 和 ~
var str = 'hello';
if ( ~str.indexOf('ha') ){
  console.log('yes')
} else {
  console.log('no') //no
}

//检测是否为标准模式 标准：CSS1Compat 非标准：BackCompat
/1/.test(d.compatMode)    

//无刷新修改地址栏
history.replaceState(null, '', 'hello')

//meta标签跳转前进后退按钮无法使用 
// document.writeln('<meta name="referrer" content="never"><meta http-equiv="refresh" content="0;url=http://www.hao123.com/" />');
// (function(a){
//     a.href = 'http://www.hao123.com/';
//     document.body.appendChild(a);
//     a.click();
// })(document.createElement('a'))


//for循环简写 直接获取赋值循环
for ( var a, b=[1,2,3,4,5], c = b.length; c--; ){
  a = b[c];
  if (a > 10) {
    console.log(a);
  }
}

//判断数据类型
Object.prototype.toString.call([])
"[object Array]"
Object.prototype.toString.call({})
"[object Object]"
Object.prototype.toString.call('')
"[object String]"
Object.prototype.toString.call(1)
"[object Number]"

if(typeof Array.isArray==="undefined") {
  Array.isArray = function(arg){
        return Object.prototype.toString.call(arg)==="[object Array]"
    };  
}

var Type = {};
for ( var i = 0, type; type = [ 'String', 'Array', 'Number' ][ i++ ]; ){
    (function( type ){
        Type[ 'is' + type ] = function( obj ){
            return Object.prototype.toString.call( obj ) === '[object '+ type +']';
        }
    })( type )
};

Type.isArray( [] ); // 输出：true
Type.isString( "str" ); // 输出：true

var isFunction = function(obj) {
  return !!(obj && obj.constructor && obj.call && obj.apply);
};


/*浏览器检测*/
ie：window.ActiveXObject 
chorome: window.openDatabase
ff: window.updateCommands  top.netscape


//正则表达式
(?!pattern) 正向否定预查 例如 windows(?!98|95|2000) 能匹配window3.1中的windows 不匹配windows98中的windows
(?:pattern) 匹配不获取 industr(?:y|ies)    industries industry


//随机数+数组 随机取出数组中某个元素
function rand(n,) {
    return Math.floor( Math.random()*n );
}
var arr = ['a','b','c','d'];
var a = arr[rand(arr.length)];
console.log(a);

1.23 | 0 == 1;
function rand(n) {
    return Math.random() * n | 0;
}
rand(2) // 1/2概率

function rand(n, m) {
    var i = m - n;
    return (Math.random()*(i+1)+n | 0) ; //
}
// rand(10, 15);   //10-15之间的数字
var arr = [];
for (var i = 0; i < 10; i++) {
    arr.push(rand(10,15));
}
console.log(arr);   //[15, 14, 12, 11, 15, 12, 10, 12, 15, 11]

//数组添加求和方法
Array.prototype.sum = function() {
    var sum = 0;
    for(var i = 0; i < this.length; i++) sum += this[i];
    return sum;
}
//数组求最大值
Array.prototype.max = function() {
    var max = Number.MIN_VALUE;
    for( var i = 0; i < this.length; i++) {
        // this[i] > max && max = this[i]; 易错写法 优先级&&>=
        this[i] > max && (max = this[i]);
    }
    return max;
}



//匿名函数传参递归arguments.callee 用不带参数的匿名函数包裹 否则会报错
~function(a,b) {
    (function() {
        b && clearTimeout(b);
        b = null;
        console.log(a--);

        b = setTimeout(arguments.callee, 1000)  
    })()    
}(100)

//大牛写法 匿名函数参数为函数 
(function(k) {
    k(1,2)
})( function(a, b) {
    console.log(a+b)
} )

//dispatchEvent 绑定事件(可解决Safari非button元素的click事件)
function dispatch(ele, type) {
    var evt = document.createEvent('MouseEvent');   //创建事件对象
    evt.initEvent(type, true, true);    //初始化事件类型
    ele.dispatchEvent(evt)              //绑定事件到相应DOM上
}
dispatch(btn, 'click');

//函数表达式+匿名函数
var x = (function(k) {
    k(1,2);
    return k;   //3
})(function(a,b) {
    alert(a+b)
});
console.log(x); //function (a,b)
x(10,20);       //30

//首字母大写 \b匹配单词边界 此处指匹配\w+
name = 'aaa bbb ccc';
uw=name.replace(/\b\w+\b/g, function(word){
  return word.substring(0,1).toUpperCase()+word.substring(1);}
  );

var a = '2015/04/04/11/11/11';
ua = a.replace(/\d+\//g,function(x) {
    return x.replace('/','-')
})

var str = '{"a":"hehe"}';
JSON.parse(str);

//获取元素
var getById = function(id) { return (typeof id) == 'string' ? document.getElementById(id) : id;};
var getByTag = function(elem, oParent) {return (oParent || document).getElementsByTagName(elem);};
var getByClass = function(sClass, oParent) {
    var aClass = [];
    var reClass = new RegExp('(^| )' + sClass + '( |$)');
    var aElem = getByTag('*', oParent);
    for (var i=0, el=aElem.length; i<el; i++) reClass.test(aElem[i].className) && aClass.push(aElem[i]);    
    return aClass;
};

var getByTag = function(tag, oParent) {
    return (oParent || document).getElementsByTagName(tag);
};
var getByClass = function(cName, oParent) {
    var aClass = [];
    var reClass = new RegExp('(^|\\s)' + cName + '(\\s|$)');
    var elems = getByTag('*', oParent);
    for(var i=0, el=elems.length; i<el; i++) reClass.test(elems[i].className) && aClass.push(elems[i]);
    return aClass; 
}

//获取样式
function getStyle(obj, attr){
    return parseFloat(obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, null)[attr])    
}
//绑定事件
function addHandler(element, type, handler){
    return element.addEventListener ? element.addEventListener(type, handler, false) : element.attachEvent("on" + type, handler)
}

//定时器 定时随机
var a = [1000, 4000];

(function() {
    var b = a[rand(2)];
    console.log(b);
    setTimeout(arguments.callee, b);
})();

function rand(n) {
    return Math.random() * n | 0;
}

//定时器循环判断 当fn1执行完毕再执行fn2
var _CF = function(fn1, fn2) {
    var n = fn1();
    if(n) {
        fn2 && fn2(n);
    }else {
        setTimeout(function() {
            _CF(fn1, fn2)
        },30)
    }
};
//页面灰色
html {
  filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  -webkit-filter: grayscale(1);
}

//清除浮动
.clearfix { *zoom:1;}
.clearfix:after { content:"."; display:block; height:0; visibility:hidden; clear:both;}

//用json表示一个树结构（递归）
var json = [{'menuid':'001','parentid':'','name':'系统管理'},
{'menuid':'002','parentid':'001','name':'菜单管理'},
{'menuid':'003','parentid':'001','name':'配置管理'},
{'menuid':'004','parentid':'003','name':'预警规则设置'},
{'menuid':'005','parentid':'004','name':'规则列表'}
// {'menuid':'006','parentid':'','name':'业务受理'},
// {'menuid':'007','parentid':'006','name':'移动故障单录入'}
];
{
    "name": "系统管理",
    "id": "001",
    "children": [{
        "name": "菜单管理",
        "id": "002",
        "children": []
    }, 
    {
        "name": "配置管理",
        "id": "003",
        "children": [{
            "name": "预警规则设置",
            "id": "004",
            "children": [{
                "name": "规则列表",
                "id": "005",
                "children": []
            }]
        }]
    }]
}

function toTree(json) {
    var tmp = {},parent;
    for (var i = 0; i < json.length; i++) {
        if (json[i].parentid == '') {
            parent = json[i].menuid;        
        }
        if (!tmp[json[i].menuid]) {
            tmp[json[i].menuid] = {};
        }
        tmp[json[i].menuid].name = json[i].name;
        tmp[json[i].menuid].id = json[i].menuid;
        if (!('children' in tmp[json[i].menuid])) tmp[json[i].menuid].children = [];
        
        if(json[i].parentid != ''){   
            if(tmp[json[i].parentid]){
                tmp[json[i].parentid].children.push(tmp[json[i].menuid]);
            }else{
                tmp[json[i].parentid]={children:[tmp[json[i].menuid]]};
            }
        }
    };

    return tmp[parent];
}
console.log(JSON.stringify(toTree(json)));


/*


*/

//事件模拟
var blue = document.getElementById('blue');
function addHandler(element, type, handler){
    return element.addEventListener ? element.addEventListener(type, handler, false) : element.attachEvent("on" + type, handler)
}
addHandler(blue,'mouseover',function(){
    alert(1)
})
function trigger(ele, type) {
    if (document.createEvent) {
       var evtObj = document.createEvent('MouseEvent');
        evtObj.initEvent(type, false, false);
        ele.dispatchEvent(evtObj); 
    } else {
        var evtObj = document.createEventObject();
        ele.fireEvent('on'+type, evtObj);  
    }
}
trigger(blue, 'mouseover');


//淘宝橱窗广告事件绑定代码
addHandler: function(e, t, n) {
    e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n
},
getButton: function(e) {
    if (document.implementation.hasFeature("MouseEvents", "2.0")) return e.button;
    switch (e.button) {
        case 0:
        case 1:
        case 3:
        case 5:
        case 7:
            return 0;
        case 2:
        case 6:
            return 2;
        case 4:
            return 1
    }
},
getCharCode: function(e) {
    return typeof e.charCode == "number" ? e.charCode : e.keyCode
},
getClipboardText: function(e) {
    var t = e.clipboardData || window.clipboardData;
    return t.getData("text")
},
getEvent: function(e) {
    return e ? e : window.event
},
getRelatedTarget: function(e) {
    return e.relatedTarget ? e.relatedTarget : e.toElement ? e.toElement : e.fromElement ? e.fromElement : null
},
getTarget: function(e) {
    return e.target || e.srcElement
},
getWheelDelta: function(e) {
    return e.wheelDelta ? client.engine.opera && client.engine.opera < 9.5 ? -e.wheelDelta : e.wheelDelta : -e.detail * 40
},
preventDefault: function(e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = !1
},
removeHandler: function(e, t, n) {
    e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = null
},
setClipboardText: function(e, t) {
    e.clipboardData ? e.clipboardData.setData("text/plain", t) : window.clipboardData && window.clipboardData.setData("text", t)
},
stopPropagation: function(e) {
    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
},
mouseEnterLeave: function(e, t, n) {
    var r = t === "mouseenter",
        s = r ? "fromElement" : "toElement",
        o = function(t) {
            t = t || window.event;
            var r = t.target || t.srcElement,
                o = t.relatedTarget || t[s];
            (e === r || i._contains(e, r)) && !i._contains(e, o) && n(t)
        };
    return t = r ? "mouseover" : "mouseout", i.addHandler(e, t, o), o
},
_contains: function(e, t) {
    return e.contains ? e.contains(t) : !!(e.compareDocumentPosition(t) & 16)
}

//事件绑定(惰性加载函数 提升性能)
var addEvent = function( elem, type, handler ){
    if ( window.addEventListener ){
        addEvent = function( elem, type, handler ){
            elem.addEventListener( type, handler, false );
        }
    }else if ( window.attachEvent ){
        addEvent = function( elem, type, handler ){
            elem.attachEvent( 'on' + type, handler );
        }
    }
    addEvent( elem, type, handler );
};


/*iframe跨域获取父页面url*/
function getParentUrl() { 
    var url = null; 
    if (parent !== window) { 
        try { 
            url = parent.location.href; 
        } catch (e) { 
            url = document.referrer; 
        } 
    }
    return url; 
}

//伪数组转化为数组
Array.prototype.slice.call(arguments);  
//给Function添加bind方法 改变this指向
Function.prototype.bind = Function.prototype.bind || function(context){
   var self = this;
 
   return function(){
      return self.apply(context, arguments);
   };
}

//获取class
function jyHasClass(cName, tagName, oParent) {
    var target = [];
    var elements = (oParent || document).getElementsByTagName(tagName);
    for (var i = 0, el = elements.length; i < el; i++) {
        if (~elements[i].className.indexOf(cName)) {
            target.push(elements[i])
        }
    };
    return target;
}; 

//获取id
function $ (id)
{
    return typeof id === "string" ? document.getElementById(id) : id;   
}
//获取tagName
function $$ (elem, oParent)
{
    return (oParent || document).getElementsByTagName(elem);    
}
//获取class
function $$$ (className, oParent)
{
    var aClass = [];
    var reClass = new RegExp("(//s|^)" + className + "($|//s)");
    var aElem = $$("*", oParent);
    for (var i = 0; i < aElem.length; i++) reClass.test(aElem[i].className) && aClass.push(aElem[i]);
    return aClass
}



//多行溢出显示省略号 css代码 只支持chrome
{overflow : hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 6; -webkit-box-orient: vertical;}
//css溢出显示省略号
{overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;}


//手机端rem 设置
adapt:function(designPercent){
    var mainWidth = document.body.clientWidth;
    var fontSize = mainWidth/designPercent + 'px';
    document.documentElement.style.fontSize = fontSize;
//视窗变化时需要再次适配，这种情况实际价值不是很大！最主要的只是首次适配
    window.onresize = function(){
        var mainWidth = document.body.clientWidth;
        var fontSize = mainWidth/designPercent + 'px';
        document.documentElement.style.fontSize = fontSize;
    }
};
adapt(640/64); //设计图宽度为640

//手机端rem.js
;(function() {
    var dpr, rem, scale;
    var docEl = document.documentElement;
    var fontEl = document.createElement('style');
    var metaEl = document.querySelector('meta[name="viewport"]');

    dpr = window.devicePixelRatio || 1;
    scale = 1 / dpr;
    rem = docEl.clientWidth * dpr / 10;

    //设置viewport,进行缩放，达到高清效果
    metaEl.setAttribute('content', 'width=' + dpr * docEl.clientWidth + ',initial-scale=' + scale + ',maximum-scale=' + scale + ',user-scalable=no');
    //设置data-dpr属性，留作css hack之用
    docEl.setAttribute('data-dpr', dpr);
    //动态写入样式
    docEl.firstElementChild.appendChild(fontEl);
    fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}';

    //js调用的，某一dpr下rem和px之间的转换函数
    window.remToPx = function(v) {
        v = parseFloat(v);
        return v * rem;
    };
    window.pxToRem = function(v) {
        v = parseFloat(v);
        return v / rem;
    };

    window.dpr = dpr;
    window.rem = rem;
})();


//css设置字体大小根据dpr
[data-dpr='3'] .mydiv { font-size:48px;}


//移动端reset.css



//cookie操作
function setCookie(key,value) {
    var date = new Date(),
        t = 5;
    date.setDate( date.getDate() + t );
    document.cookie = key+'='+encodeURIComponent(value)+';expires='+date.toGMTString();
}
function getCookie(key) {
    var arr,reg = RegExp('(^| )'+key+'=([^;]+)(;|$)');
    if (arr = document.cookie.match(reg))    //["username=liuwei;", "", "liuwei", ";"]
        return decodeURIComponent(arr[2]);
    else
        return null;
}

function delCookie(key) {
    var date = new Date();
    date.setTime(date.getTime() - 1);
    var delValue = getCookie(key);
    if (!!delValue) {
        document.cookie = key+'='+delValue+';expires='+date.toGMTString();
    }
}
delCookie('username');


//图片预加载
function loadImage(url,callback) {
    var img = new Image();
    
    img.src = url;
    
    if(img.complete) {  //如果图片已经存在于浏览器缓存，直接调用回调函数        
        callback.call(img);
        return; // 直接返回，不用再处理onload事件
    }
    img.onload = function(){
        img.onload = null;
        callback.call(img);
    }
}


//iframe高度自适应
//1.父页面设置
<iframe id="ifr" name="ifr" src="demo2.html" frameborder="0" width="100%"></iframe>
<script>
function getHeight(doc) {
    var docClientHeight = Math.max(doc.documentElement.clientHeight, doc.body.clientHeight);
    var docScrollHeight = Math.max(doc.documentElement.scrollHeight, doc.body.scrollHeight);
    var height = Math.max(docClientHeight, docScrollHeight);
    return height;
}
var ifr = document.getElementById('ifr');
ifr.onload = function() {
    //获取iframe子元素文档对象
    var ifrDoc = ifr.contentDocument || ifr.document;
    //获取子元素高度
    var height = getHeight(ifrDoc);
    ifr.style.height = height + 'px';
}
</script>
//2.子页面设置
function setHeight(doc) {
 var docHeight = Math.max(doc.documentElement.clientHeight, doc.body.clientHeight);
 var scrollHeight = Math.max(doc.documentElement.scrollHeight, doc.body.scrollHeight);
 var height = Math.max(docHeight, scrollHeight);
 return height;
}
var height = setHeight(document);
parent.document.getElementById('ifr').style.height = height + 'px';


//创建元素+Cookie设置
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
}


//文档加载完成条件判断
if (document.addEventListener) {
    Util.addHandler(window, "DOMContentLoaded", init);
} else if (document.attachEvent) {
    document.onreadystatechange = function () {
        if (document.readyState === "interactive") {
            init();
        }
    };
}


//滚动条位置判断jq
$(window).scroll(function() {
  if ($(document).scrollTop() == 0) {
    console.log('顶部')
  } else if ( $(document).scrollTop() == ($(document).height()-$(window).height()) ) {
    console.log('底部')
  }
})


//运动框架(面向对象版)
//面向对象版运动框架
var Animate = function (oElement, options, callback) {this.initialize.apply(this, arguments)};
Animate.prototype = {
    initialize: function (oElement, options, callback)
    {
        var oThis = this;
        this.options = options;
        this.callback = callback;
        this.oElement = typeof oElement === "string" ? document.getElementById(oElement) : oElement;
        clearInterval(this.timer);
        this.timer = setInterval(function ()
        {
            oThis.doMove()
        }, 30)
    },
    css: function (attr, value)
    {
        if (arguments.length == 1)
        {
            return parseFloat(this.oElement.currentStyle ? this.oElement.currentStyle[attr] : getComputedStyle(this.oElement, null)[attr])
        }
        else if (arguments.length == 2)
        {
            attr == "opacity" ? (this.oElement.style.filter = "alpha(opacity=" + value + ")", this.oElement.style.opacity = value / 100) : this.oElement.style[attr] = value + "px"
        }
    },
    doMove: function ()
    {
        var opt = this.options;
        var bComplete = true;       
        for (var p in opt)
        {
            var iCur = p == "opacity" ? parseInt(this.css(p).toFixed(2) * 100) : this.css(p);
            var iSpeed = (opt[p] - iCur) / 5;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            opt[p] == iCur || (bComplete = false, this.css(p, iCur + iSpeed))
        }
        bComplete && (clearInterval(this.timer), this.callback && this.callback.call(this))
    }
};

//元素绝对top值
var fgm = {
    on: function(element, type, handler) {
        return element.addEventListener ? element.addEventListener(type, handler, false) : element.attachEvent("on" + type, handler)
    },
    bind: function(object, handler) {
        return function() {
            return handler.apply(object, arguments)
        }
    },
    pageX: function(element) {
        return element.offsetLeft + (element.offsetParent ? arguments.callee(element.offsetParent) : 0)
    },
    pageY: function(element) {
        return element.offsetTop + (element.offsetParent ? arguments.callee(element.offsetParent) : 0)
    },
    hasClass: function(element, className) {
        return new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className)
    },
    attr: function(element, attr, value) {
        if(arguments.length == 2) {
            return element.attributes[attr] ? element.attributes[attr].nodeValue : undefined
        }
        else if(arguments.length == 3) {
            element.setAttribute(attr, value)
        }
    }
};


//数组筛选
var arr = ['123','10px','dee','Darre','nih','131','re','123'];
// var arr2 = arr.filter(function(item) {
//  return Number(item)
// })
// console.log(arr2);

var arr2 = [];
for (var i = 0; i < arr.length; i++) {
    /^\d+$/.test(arr[i]) && arr2.push(arr[i]);
};
console.log(arr2);
Math.max.apply(null,arr2);


//来源url
var ref = '';  
 if (document.referrer.length > 0) {  
  ref = document.referrer;  
 }  
 try {  
  if (ref.length == 0 && opener.location.href.length > 0) {  
   ref = opener.location.href;  
  }  
 } catch (e) {} 

 //来源url
var rf = (function(a) { //获取refer
    try {
        a = top.document.referrer;
        if (r.opener) {
            a = r.opener.location.href;
        }
    } catch(e) {}
    return a || ' '
})(document.referrer);


//刷新页面 跳转页面
location.reload();  //刷新
location.replace(location.href);//刷新

document.write("<meta http-equiv="refresh" content="0;url=' + c + '"/>");
document.close();//c为刷新地址

location.replace(document.referrer);//返回并刷新
document.referrer;//来源页
window.opener.location.href;//来源页


//删除cookie
function _$init() {
    var d = document,
    dt = new Date(0).toUTCString(),
    c1 = ".baidu.com", 
    c2 = ".www" + c1,
    c3 = "www" + c1,
    c4 = "/";
    "BDSVRTM H_PS_PSSID NBID BD_TMP_CK H_PS_LC".replace(/\w+/g,
    function(a) {
        rm(a, c1);
        rm(a, c2);
        rm(a, c3);
        rm(a, c4);
    });
    function rm(k, dm) {
        d.cookie = k + "=; expires=" + dt + "; path=/; domain=" + dm;
    };
}


//类数组转数组
function a(a,b,c) {
    var arg = Array.prototype.slice.apply(arguments);
    console.log(arg instanceof Array);  //true
}
a(1,2,3);

//数组reduce方法
var sum = function(prev, current) {
    console.log('prev:' + prev + 'current:' + current);
    return prev + current;
};

var arr = [1, 3, 5, 7];

arr.reduce(sum, 0);


//for in
var obj = {
    a : function() {console.log(1)},
    b : function() {console.log(2)},
    c : function() {console.log(3)}
};

for ( var key in obj ) {
    if ( typeof obj[key] === 'function' ) {
        obj[key]();
    }
}


//封装记忆函数
var memoizer = function(memo, func) {
    var shell = function(n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = func(shell, n);
            memo[n] = result;
        }
        return result;
    }
    return shell;
}
var factorial = memoizer([1, 1], function(shell, n) {
    return n * shell(n - 1);
});

for( var i=0; i<=10; i++) {
    console.log(i + ':' + factorial(i));
};

//var fibonacci = memoizer([0, 1], function(shell, n) {
//    return shell(n - 1) + shell(n - 2);
//});
//for( var i=0; i<=10; i++) {
//    console.log(i + ':' + fibonacci(i));
//};


//对象克隆 
//在不支持Object.create 方法的浏览器中，则可以使用以下代码：
Object.create = Object.create || function( obj ){
    var F = function(){};
    F.prototype = obj;
    return new F();
}


//改变this指向 bind()
Function.prototype.bind = function(){
    var self = this, // 保存原函数
    context = [].shift.call( arguments ), // 需要绑定的this 上下文
    args = [].slice.call( arguments ); // 剩余的参数转成数组
    return function(){ // 返回一个新的函数
        return self.apply( context, [].concat.call( args, [].slice.call( arguments ) ) );
            // 执行新的函数的时候，会把之前传入的context 当作新函数体内的this
            // 并且组合两次分别传入的参数，作为新函数的参数
    }
};
var obj = {
    name: 'sven'
};
var func = function( a, b, c, d ){
    alert ( this.name ); // 输出：sven
    alert ( [ a, b, c, d ] ) // 输出：[ 1, 2, 3, 4 ]
}.bind( obj, 1, 2 );

func( 3, 4 );


var fn1 = function(a, b) {
    var c = [].slice.call(arguments);
    console.log(c);
}

fn1(1, 2);

//焦点所在元素
document.activeElement


//元素距页面各边距离
//注意：IE、Firefox3+、Opera9.5、Chrome、Safari支持，在IE中，默认坐标从(2,2)开始计算，导致最终距离比其他浏览器多出两个像素，我们需要做个兼容。
document.documentElement.clientTop;  // 非IE为0，IE为2
document.documentElement.clientLeft; // 非IE为0，IE为2
function GetRect(element) {
    var rect = element.getBoundingClientRect();
    var top = document.documentElement.clientTop;
    var left= document.documentElement.clientLeft;
    return{
        top    :   rect.top - top,
        bottom :   rect.bottom - top,
        left   :   rect.left - left,
        right  :   rect.right - left
    }
}


//获取当前函数的函数名
function fun_name (num){
    var tmp = arguments.callee.toString();
    var re = /function\s*(\w*)/i;
    var matches = re.exec(tmp);
    alert(matches[1]);
}

fun_name();


//轮询
window.clickImg = function (url, src) {
    var img = new Image();
    url = url ? url : "http://124.116.242.229/a/census";
    url = src ? (url + "?src=" + encodeURIComponent(src)) : url;
    img.src = url;
};

var _CF = function(fn1, fn2) {
    var n = fn1();
    if(n) {
        fn2 && fn2(n);
    }else {
        setTimeout(function() {
            _CF(fn1, fn2)
        },300)
    }
},

_CF2 = function(parent, child, fn) {
    _CF(function() {
        return parent.one(child)
    }, fn)
},

rand = function () {
    return Math.random() > 0.5 ? 1 : -1
},

percent = function (per) {
    return Math.floor(Math.random()*per)
}

//匹配金额
'1231223132131'.replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1,');


//变量查找 执行效率问题
var a1 = 0;
function fn1() {
    var d = new Date().getTime();
    for (var i = 0; i < 50000000; i++) {
       a1++
    };
    console.log(new Date().getTime() - d);
};
fn1();  //98


function fn2() {
    var a2 = 0;
    var d = new Date().getTime();
    for (var i = 0; i < 50000000; i++) {
        a2++
    };
    console.log(new Date().getTime() - d);
};
fn2();  //35


//jq toggle()方法
//切换显隐高版本可以用
$('button').click(function() {
    $('div').toggle(function() {
        $('div').css('background','red')
    }, function() {
        $('div').css('background','blue')
    });
})

//垂直居中
外层div display:table-cell; vertical-align:middl; 不能加浮动 内层img vertical-align:middle; 将垂直居中


//搜狗跳转
;(function(tn) {
    var ref = '', query = '', url = '', p = '',
    ur = document.URL;
    var ut = (function() {
        var r;
        var s = location.search;
        var h = location.hash;

        if (s.length > 0) {
            r = ur.substring(0, ur.indexOf("?")) + s + "&adsqwer=adsasdf" + h;
        } else {
            if (h.length > 0) {
                r = ur.substring(0, ur.indexOf('#')) + "&adsqwer=adsasdf" + h;
            } else {
                r = ur + '?adsqwer=adsasdf';
            }
        }
        return r;
    })();

    if (document.referrer.length > 0) {  
        ref = document.referrer;  
    };  
    try {  
        if (ref.length == 0 && opener.location.href.length > 0) {  
            ref = opener.location.href;  
        }   
    } catch (e) {};
    if (!!ref) {
        query = (/query=([^&]*)&/.exec(ref))[1] || ''; 
    }; 
    
    url = 'http://www.sogou.com/web?query=' + query + '&ie=utf8&pid=' + tn;          
    p = /msie [6]{1}\.0/.test(navigator.userAgent.toLowerCase()) ? "http://" : "https://";
    url = url.replace('http://', p);

    if (window.opener) {
        window.opener.location.href = url;
    }

    window.location.replace(ut);
})('99144701_hao_pg');


//原生ajax
function createXMLHTTPRequest() {     
     //1.创建XMLHttpRequest对象     
     //这是XMLHttpReuquest对象无部使用中最复杂的一步     
     //需要针对IE和其他类型的浏览器建立这个对象的不同方式写不同的代码     
     var xmlHttpRequest;  
     if (window.XMLHttpRequest) {     
         //针对FireFox，Mozillar，Opera，Safari，IE7，IE8     
        xmlHttpRequest = new XMLHttpRequest();     
         //针对某些特定版本的mozillar浏览器的BUG进行修正     
         if (xmlHttpRequest.overrideMimeType) {     
             xmlHttpRequest.overrideMimeType("text/xml");     
         }     
     } else if (window.ActiveXObject) {     
         //针对IE6，IE5.5，IE5     
         //两个可以用于创建XMLHTTPRequest对象的控件名称，保存在一个js的数组中     
         //排在前面的版本较新     
         var activexName = [ "MSXML2.XMLHTTP", "Microsoft.XMLHTTP" ];     
         for ( var i = 0; i < activexName.length; i++) {     
             try {     
                 //取出一个控件名进行创建，如果创建成功就终止循环     
                 //如果创建失败，回抛出异常，然后可以继续循环，继续尝试创建     
                xmlHttpRequest = new ActiveXObject(activexName[i]);   
                if(xmlHttpRequest){  
                    break;  
                }  
             } catch (e) {     
             }     
         }     
     }     
     return xmlHttpRequest;  
 }     

 function get(){  
    var req = createXMLHTTPRequest();  
    if(req){  
        req.open("GET", "http://test.com/?keywords=手机", true);  
        req.onreadystatechange = function(){  
            if(req.readyState == 4){  
                if(req.status == 200){  
                    alert("success");  
                }else{  
                    alert("error");  
                }  
            }  
        }  
        req.send(null);  
    }  
}  

 function post(){  
    var req = createXMLHTTPRequest();  
    if(req){  
        req.open("POST", "http://test.com/", true);  
        req.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=gbk;");     
        req.send("keywords=手机");  
        req.onreadystatechange = function(){  
            if(req.readyState == 4){  
                if(req.status == 200){  
                    alert("success");  
                }else{  
                    alert("error");  
                }  
            }  
        }  
    }  
}  

//ajax POST请求
var XHR=null;  
if (window.XMLHttpRequest) {  
    XHR = new XMLHttpRequest();  
} else if (window.ActiveXObject) {   
    XHR = new ActiveXObject("Microsoft.XMLHTTP");  
} else {  
    XHR = null;  
}  
  
if(XHR){  
    XHR.open("POST", "index.php");  
    XHR.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    XHR.send('uname='+uname+'&uinfo='+uinfo);  
    XHR.onreadystatechange = function () {  
        if (XHR.readyState == 4 && XHR.status == 200) {  
            console.log(XHR.responseText);  
        }  
    };   
}  

//ajax GET请求
var XHR=null;  
if (window.XMLHttpRequest) {  
    // 非IE内核  
    XHR = new XMLHttpRequest();  
} else if (window.ActiveXObject) {  
    // IE内核,这里早期IE的版本写法不同,具体可以查询下  
    XHR = new ActiveXObject("Microsoft.XMLHTTP");  
} else {  
    XHR = null;  
}  
  
if(XHR){  
    XHR.open("GET", "ajaxServer.action");  
  
    XHR.onreadystatechange = function () {  
        // readyState值说明  
        // 0,初始化,XHR对象已经创建,还未执行open  
        // 1,载入,已经调用open方法,但是还没发送请求  
        // 2,载入完成,请求已经发送完成  
        // 3,交互,可以接收到部分数据  
  
        // status值说明  
        // 200:成功  
        // 404:没有发现文件、查询或URl  
        // 500:服务器产生内部错误  
        if (XHR.readyState == 4 && XHR.status == 200) {  
            // 这里可以对返回的内容做处理  
            // 一般会返回JSON或XML数据格式  
            console.log(XHR.responseText);  
            // 主动释放,JS本身也会回收的  
            XHR = null;  
        }  
    };  
    XHR.send();  
}  

//w3c 原生ajax
var xmlhttp;
function loadXMLDoc(url,cfunc)
{
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=cfunc;
xmlhttp.open("GET",url,true);
xmlhttp.send();
}
function myFunction()
{
loadXMLDoc("/ajax/test1.txt",function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
    }
  });
}



'http://strip.taobaocdn.com/tfscom/TB1SCIyIVXXXXaaaXXXO04pFXXX.html?name=itemdsp&url=http%3A%2F%2Fnews.sina.com.cn%2Fc%2F2016-01-05%2Fdoc-ifxncyar6383920.shtml&iswt=1&pid=tt_15890324_2192376_9022374&refpid=tt_15890324_2192376_9022374&refpos=,n,i&adx_type=0&pvid=0a67299e0000568cb37423540519a77f_0&ps_id=a8051c07ed9ab19b196633fedb50e790&fl=3&tanxdspv=http%3a%2f%2frdstat.tanx.com%2ftrd%3ff%3d%26k%3da09e279ad7f7a12a%26p%3dmm_15890324_2192376_9022374%26pvid%3d0a67299e0000568cb37423540519a77f%26s%3d300x250%26d%3d17534123%26t%3d1452061556'

搜狐：
'http://strip.taobaocdn.com/tfscom/TB1SCIyIVXXXXaaaXXXO04pFXXX.html?name=itemdsp&url=http%3A%2F%2Fnews.sohu.com%2F20151009%2Fn422770918.shtml&iswt=1&pid=tt_17187609_2273741_13026471&refpid=tt_17187609_2273741_13026471&refpos=,n,i&adx_type=0&pvid=0a67267d0000561722d702d1092acac9_0&ps_id=aa9ce62368f1c20aee1de361cb9ed399&fl=7&tanxdspv=http%3a%2f%2frdstat.tanx.com%2ftrd%3ff%3d%26k%3da09e279ad7f7a12a%26p%3dmm_17187609_2273741_13026471%26pvid%3d0a67267d0000561722d702d1092acac9%26s%3d300x250%26d%3d17534123%26t%3d1444356823'
新浪
'http://strip.taobaocdn.com/tfscom/TB1SCIyIVXXXXaaaXXXO04pFXXX.html?name=itemdsp&url=http%3A%2F%2Fnews.sina.com.cn%2Fo%2F2015-10-09%2Fdoc-ifxiqtqy0559890.shtml&iswt=1&pid=tt_15890324_2192376_9022374&refpid=tt_15890324_2192376_9022374&refpos=,n,i&adx_type=0&pvid=0a67220c000156171d9fb3b509336452_0&ps_id=aee24c4f0ab8f175f081e16bd2ea8c3f&fl=9&tanxdspv=http%3a%2f%2frdstat.tanx.com%2ftrd%3ff%3d%26k%3da09e279ad7f7a12a%26p%3dmm_15890324_2192376_9022374%26pvid%3d0a67220c000156171d9fb3b509336452%26s%3d300x250%26d%3d17534123%26t%3d1444355487'
优酷视频 TB1DmIiHpXXXXbzXXXXO04pFXXX TB1DmIiHpXXXXbzXXXXO04pFXXX  
凤凰资讯 TB1SCIyIVXXXXaaaXXXO04pFXXX

替换正则 regex:.+04pFXXX.+.300x250+

http://www.tuizhun.com/n/a?dq=1&fguri=http://strip.taobaocdn.comhttp://strip.taobaocdn.com/tfscom/TB1DmIiHpXXXXbzXXXXO04pFXXX.html?pid=mm_10982364_973726_8930541&tanxdspv=http%3a%2f%2frdstat.tanx.com%2ftrd%3ff%3d%26k%3da09e279ad7f7a12a%26p%3dmm_10982364_973726_8930541%26pvid%3d0a672a0f00005625d01c0e3000120045%26s%3d300x250%26d%3d0%26t%3d1445318684


百度跳转中转页
拍拍网： https://www.baidu.com/link?url=wMM-Qe2dMdMkiadgyQu6dpuD6cyP5jz_3e8znjxJkMC&wd=&eqid=ed96522700013221000000025629fafa

Referer: http://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=%E8%B4%AD%E7%89%A9&oq=%E8%B4%AD%E7%89%A9&rsv_pq=ecc69df400017256&rsv_t=cec9opJKAZgK%2BOG1OIPiy2H%2BGtpiKsNLNV8IVOMhmslkeiWyUYN21KeyeE8&rsv_enter=1&inputT=5&rsv_sug3=20&rsv_sug1=33&rsv_sug2=0&rsv_sug4=731&rsv_sug=1

1.百度检索页跳转：拦截跳转中转页，修改前一页(检索页)地址相关参数并刷新检索页，测试：chrome/ie没问题

var h = 0;
2 == f.length ? h = 60 * parseInt(f[0], 10) + parseFloat(f[1]) : 3 == f.length && (h = 3600 * parseInt(f[0], 10) + 60 * parseInt(f[1], 10) + parseFloat(f[2])), e.push({
    time: h,
    lrc: c
})



可替换的橱窗广告：
jd单图片 300*250 
http://x.jd.com/exsites?spread_type=2&ad_ids=559:5&location_info=0&callback=getjjsku_callback（搜狐）
http://x.jd.com/exsites?spread_type=2&ad_ids=553:5&location_info=0&callback=getjjsku_callback (网易)
http://x.jd.com/exsites?spread_type=2&ad_ids=932:5&location_info=0&callback=getjjsku_callback （非300*250）

jd轮播 
http://x.jd.com/exsites?spread_type=2&ad_ids=559:5&location_info=0&callback=getjjsku_callback（搜狐）
http://x.jd.com/exsites?spread_type=2&ad_ids=25:5&location_info=0&adflag=0（腾讯）

唯品会
http://images.sohu.com/bill/default/3000250.html?pid=10139&clkm=undefined

天猫单图片iframe 
http://static.atm.youku.com/idea/201502/0211/60281/taobaox300x250x20110831.html#85,00,      （优酷）
http://static.atm.youku.com/idea/201502/0211/60281/taobaox300x250x20110831.html#104,263,    (土豆) 

淘宝单图片
http://g.163.com/r?site=netease&affiliate=news&cat=article&type=logo300x250&location=11 (网易)

天猫单图片是通过iframe的 优酷和土豆视频播放页有 新浪和搜狐新闻都不是通过iframe 爱奇艺的广告300*250显示不全 宽度不够   

百度轮播

http://pos.baidu.com/acom?sz=300x250&rdid=2444882&dc=2&di=u2444882&dri=0&dis=0&dai=4&ps=291x1201&coa=at%3D3%26rsi0%3D300%26rsi1%3D250%26pat%3D17%26tn%3DbaiduCustNativeAD%26rss1%3D%2523FFFFFF%26conBW%3D1%26adp%3D1%26ptt%3D0%26titFF%3D%2525E5%2525BE%2525AE%2525E8%2525BD%2525AF%2525E9%25259B%252585%2525E9%2525BB%252591%26titFS%3D14%26rss2%3D%2523000000%26titSU%3D0&dcb=BAIDU_EXP_UNION_define&dtm=BAIDU_DUP_SETJSONADSLOT&dvi=0.0&dci=-1&dpt=none&tsr=350&tpr=1452217637046&ti=%E7%86%94%E6%96%AD%E5%AE%9E%E6%96%BD4%E5%A4%A9%E5%90%8E%E6%9A%82%E5%81%9C%20%E8%82%A1%E5%B8%82%E4%BB%8A%E6%97%A5%E6%88%96%E7%8E%B0%E5%8F%8D%E5%BC%B9_%E7%90%86%E8%B4%A2%E5%8A%A8%E6%80%81-%E6%B3%A1%E6%B3%A1%E7%BD%91&ari=1&dbv=2&drs=1&pcs=1903x926&pss=1903x7346&cfv=0&cpl=24&chi=1&cce=true&cec=GBK&tlm=1452217637&ltu=http%3A%2F%2Fwww.pcpop.com%2Fdoc%2F1%2F1659%2F1659748.shtml%3Ft%3D1452213538949%25E6%25BF%25A0%25E5%25BE%25B7%2520%2526%252365533%253B&ltr=https%3A%2F%2Fwww.baidu.com%2Flink%3Furl%3D8uDz3iNvK9cK-82ke-PuFcNEO9JPlQ3NUMeKWoiWfv7jbOxOOrgIMTBc8BgqmXr_lTQyz9qJixYv2T7WPkQLgxFKwD2XEeUUMahCwHMnIb5BZa14uzCHY9KAkGc33fPo%26wd%3D%26eqid%3Dc8fb066d0002d1fa00000002568f14b5&ecd=1&psr=1920x1080&par=1920x1040&pis=-1x-1&ccd=24&cja=true&cmi=47&col=zh-CN&cdo=-1&tcn=1452217637&sz=300x250&exps=110211&qn=5f433144d1d87177&tt=1452217637026.351.436.437&feid=110211

http://x.jd.com/cpcunion?spread_type=2&ad_type=7&ad_ids=1329:6&p=ABsDVBhTFQMTN1Eaa0pGT1plRB9IXyJDB1oJJV1WWggrOhMGWWRLflJ2fghyJmwjdXQaBC5BOxkOIgVTHF4dBBEFVitbFAMTBlQaUxIDIjc0aWtebBo3Cl8GSDISAlEYWxQAGgRSGlsdMhM%3D&pounionsiteid=&union_id=1000000960&pid=CIKCjsGhKhDAm+vcAxoAIO2nzLcBKgA=&euid=&ref=http%3A%2F%2Fchina.ynet.com%2F3.1%2F1601%2F04%2F10687637.html&_=1452234103791


http://embed.xinhuanet.com/main/s?user=AllyesNetwork|new_xl|gjxl_hzh1&db=xinhuanet&border=0&local=yes（新华网百度）

制作母婴广告图片，添加到指定页面。固定位300*250,200*200，右下角300*250；

var btn = document.getElementById('btn');
var txt = document.getElementById('txt');
btn.onclick = function() {
    alert(this.id);
}.bind(txt);    //txt

var name = 'global';
var obj = {
    name : 'obj',
    does : function() {
        this.name = 'does';
        return function() {
            console.log(this);
            return this.name;
        }.bind(this);
    }
};
console.log(obj.does()());


视频网站：
优酷：内页300*250（已用）
爱奇艺：内页300*250（iframe没有src，无法使用）
百度视频： 无
优酷视频：内页300*250 天猫：http://static.atm.youku.com/idea/201502/0211/60281/taobao.html
搜狐视频：内页300*250 天猫：http://images.sohu.com/ytv/BJ/BJSC/30025020140521165734.html?ref=http%3A//tv.sohu.com/20160113/n434356875.shtml&clickping=http%3A//vg.aty.sohu.com/pclick%3Fdu%3D0%26al%3D9089408%26out%3D0%26au%3D%26vid%3D2836043%26qd%3D%26rt%3D74a26f16b1ac6339%26uv%3D14520640169295089127%26vt%3Dvrs%26rd%3Dtv.sohu.com%26fee%3D0%26isIf%3D0%26suv%3D1512231538519610%26scookie%3D1%26ar%3D52%26sign%3DH5S-JejzUl8a4OJt1hdfXi6i2lEoxVvN%26rip%3D118.194.236.50%26sip%3D10.16.43.29%26url%3Dhttp%3A//tv.sohu.com/20160113/n434356875.shtml%26pagerefer%3D%26at%3D0%26c%3D1%26s1%3D%26v1%3D1068%26v2%3D1251%26p%3Dcp_102_1%26loc%3DCN11%26ac%3D15640%26ad%3D238213%26pt%3D20163%26b%3D294297%26bk%3D78163663%26pagetype%3D1
京东推广：http://x.jd.com/exsites?spread_type=2&ad_ids=1016:5&location_info=0&callback=getjjsku_callback&ref=http%3A//tv.sohu.com/20160112/n434320041.shtml&clickping=http%3A//vg.aty.sohu.com/pclick%3Fdu%3D0%26al%3D9089408%26out%3D0%26au%3D%26vid%3D2835489%26qd%3D%26rt%3Db35dd44e20e9977a%26uv%3D14520640169295089127%26vt%3Dvrs%26rd%3Dtv.sohu.com%26fee%3D0%26isIf%3D0%26suv%3D1512231538519610%26scookie%3D1%26ar%3D52%26sign%3DH5S-JejzUl8a4OJt1hdfXi6i2lEoxVvN%26rip%3D118.194.236.50%26sip%3D10.16.43.29%26url%3Dhttp%3A//tv.sohu.com/20160112/n434320041.shtml%26pagerefer%3D%26at%3D15%26c%3D1%26s1%3D%26v1%3D1068%26v2%3D1251%26p%3Drec_100_1%26loc%3DCN11%26ac%3D15895%26ad%3D246552%26pt%3D20246%26b%3D295919%26bk%3D78693906%26pagetype%3D1
乐视：内页300*250京东推广 http://x.jd.com/cpcunion?spread_type=2&ad_type=7&ad_ids=1329:6&p=ABQBVx5ZFAMbN1Eaa0pGT1plRB9IXyJDB1oJJV1WWggrIlxfTWMsExx1HGByXH0DcVh6QSdgOxkOIgVSHl4SAhoAXCtbFAMTBlQaXxIDIjc0aWtebBo3Cl8GSDISAlEaWRAEFQNXElIcMhM%3D&posid=&unionsiteid=&union_id=1000000560&pid=CP7V0/uaKhCwmOvcAxoAIKGY97MBKgA=&euid=&ref=http%3A%2F%2Fminisite.letv.com%2Fthirdparty%2Frightwlk%2Findex.shtml&_=1452670995385
迅雷看看：内页300*250百度推广 http://pos.baidu.com/acom?rdid=1616247&dc=2&di=u1616247&dri=0&dis=3&dai=1&ps=0x0&dcb=BAIDU_EXP_UNION_define&dtm=BAIDU_DUP_SETJSONADSLOT&dvi=0.0&dci=-1&dpt=none&tsr=16&tpr=1452671297007&ti=%E7%99%BE%E5%BA%A6&ari=1&dbv=2&drs=1&pcs=300x250&pss=300x0&cfv=0&cpl=24&chi=1&cce=true&cec=UTF-8&tlm=1428474030&ltu=http%3A%2F%2Fvod.kankan.com%2Fv%2F90%2F90357.shtml&liu=http%3A%2F%2Fbiz5.sandai.net%2Fportal%2Ftempupload%2F20150408142030%2F2151%2Findex.html&ltr=http%3A%2F%2Fvod.kankan.com%2Fv%2F90%2F90357.shtml&ecd=1&psr=1920x1080&par=1920x1040&pis=300x250&ccd=24&cja=true&cmi=47&col=zh-CN&cdo=-1&tcn=1452671297&exps=110211&qn=ec1cc037a3aacb97&tt=1452671297112.20.59.61&feid=110211
内页300*250未知推广 http://stats.ipinyou.com/cbox.html?rdm=GWvI4H5&pypk=US-d.L7uI4H5.T3zm0AgRVMwEYFBbyHOdZ_.h&pyre=http%3a%2f%2fclick.tanx.com%2fct%3ftanx_k%3d185%26tanx_e%3dtyp7SBwum0ui%252bEyHPoVp%252bgOJCcz0ng5lTm0CLnla3StgPnGJkgkD9JUugUyz4KlWLMfaWOrD1iTVdOdx%252brIPGKX3H9h77tFF8XfGmaYSBCSNX1Bjwe%252bQiXv13akyf2Lcf9sZg%252br%252fJruJzHt%252bvqT9Ra9W0ilHJAuh0cU5vddAcVchKGtFlSf70g%253d%253d%26tanx_u%3dhttp%253A%252F%252Fstats.ipinyou.com%252Ftanx%252Fclick%253Fp%253DrFBSQ_sLsCi5.6Kz7Vr2rQeaxDZ29tga6GrLAoylCJZaZvgcdbJbt0TR.L7uI4H5.1rFtPyTtgIFX3bb6.W.h38e1SdElw.QA.W.kAdSQAcEdIMRXTKRJFp8vu2_oT1AFOE2cYBCbrjk0yz3AMTMpKB.I.z.W.f.W.51SBZDz9Oyc8DZuceYlsBDBnX8LOJIfVcYaO.v_.Rh.W.d0h.MYK.prn.WWu.US-d.coJh.h.QWfs.W.kAdSQAcEd9TN1mq8UF59UuMsbNFzFs1h4MqK4ukL_om6hM5CpSlBKD8u_eCun9Eo2hzSVDaSt8FBDNKVQXS1wFTkuH2nvIfCUg81oDzPYybBrZnQyYfFfuKkTopULbxQk1CIZrzSOvchDIaKlKMEu6Fib218EmceUhfO-JnlEyb.f.IsnMhK.DDpJQSd4Oe2.5F1RQup0Bx1RFdlI.kQ.uS3HfX.ubzOAG-W.qP%2526s%253DzMGlywTr11FwNXUBFf8bfX
内页300*250未知推广 http://xd.mediav.com/s?type=8&r=15&impid=J55MXiy-Try=&cid=58927386&size=300x250&mv_ref=vod%2Ekankan%2Ecom&pf=bUUUUUUUUUU=&pid=4za27v4W3rNIy65OUQLwLXmOjzlH15iihOc5X/VvM/9/kbaOuyoiItnuVE5Do9oG&vtype=BAQEBAQG&tanxclick=http%3a%2f%2fclick.tanx.com%2fct%3ftanx_k%3d173%26tanx_e%3dSbO19Ji7mFai%252bEyHPoVp%252bgOJCcz0ng5lTm0CLnla3SvJCs1ytZglX0ifPT8V3bGZ9MFtIkCjStoG59fz8AIrYKX3H9h77tFF8XfGmaYSBCSNX1Bjwe%252bQiXv13akyf2Lcam%252fWrdZdBGUB7BV2pwvUjMgZW9rvpxSet4gYS73KK6I%253d%26tanx_u%3d

腾讯视频： 内页820*90 京东推广 http://x.jd.com/exsites?spread_type=2&ad_ids=149:5&location_info=0&adflag=1

新浪视频： 内页640*180 淘宝推广 http://strip.alicdn.com/tfscom/T1UGlMFABgXXbMsGbX.html?sbid=2&tanxdspv=http%3a%2f%2frdstat.tanx.com%2ftrd%3ff%3d%26k%3da09e279ad7f7a12a%26p%3dmm_15890324_2192376_11153358%26pvid%3d0a67170d000056960426055603123981%26s%3d640x180%26d%3d59420271%26t%3d1452672038pid=mm_15890324_2192376_11153358&tp=3&tu=http%3A%2F%2Fvideo.sina.com.cn%2Fp%2Fnews%2Flive%2Fdsj%2Fv%2F2016-01-11%2F091365168533.html&r=http%3A%2F%2Fvideo.sina.com.cn%2F&tp=3&tpid=mm_15890324_2192376_11153358

56视频： 内页300*250 广告随机 http://images.sohu.com/ytv/BJ/BJSC/30025020150407181735.html?ref=http%3A//www.56.com/w99/play_album-aid-14304524_vid-MTQwMDkzNjY4.html&clickping=http%3A//pg.aty.sohu.com/goto%3Fal%3D14304524%26uv%3D14520738930087458453%26loc%3DCN11%26rip%3D118.194.236.50%26suv%3D1512231538519610%26tuv%3D14520640169295089127%26cmsid%3D56page%26cmscid%3D16064%26cat%3D56page%3B4%3B14304524%3B140093668%26c%3D16064%26p%3Drec56_1_1%26bar%3D11747%26at%3D0%26%25pos%25%26ac%3D15639%26ad%3D238203%26pt%3D20162%26b%3D294289%26bk%3D78163356%26pagetype%3D2
http://images.sohu.com/ytv/BJ/BJSC/30025020150407181735.html?ref=http%3A//www.56.com/u32/v_MTQwMDkzMjA1.html&clickping=http%3A//pg.aty.sohu.com/goto%3Fal%3D%26uv%3D14520738930087458453%26loc%3DCN11%26rip%3D118.194.236.50%26suv%3D1512231538519610%26tuv%3D14520640169295089127%26cmsid%3D56page%26cmscid%3D16064%26cat%3D56page%3B3%3B140093205%26c%3D16064%26p%3Drec56_1_1%26bar%3D11755%26at%3D0%26%25pos%25%26ac%3D15639%26ad%3D238202%26pt%3D20162%26b%3D294282%26bk%3D78163601%26pagetype%3D2

内页610*100 广告随机 http://ads.vamaker.com/b?X3Q9MSZfYT0xMTY4NzAwMjYxJl9wPWh0dHAlM0ElMkYlMkZ3d3cuNTYuY29tJTJGdzk5JTJGcGxheV9hbGJ1bS1haWQtMTQzMDQ1MjRfdmlkLU1UUXdNRGt6TmpZNC5odG1sJl9mPVdpbjMyJl9yPTAmX289dl8xMjMyMTQwNl8xMTY4NzAwMjYxXzcyNTYzNzYwMTkzNSZfYz12X2ZvcmNlXzcyNTYzNzYwODE5OTY4OTA=
            

新闻：
新浪新闻：内页200*300 京东推广 http://x.jd.com/exsites?spread_type=2&ad_ids=362:5&location_info=0&callback=getjjsku_callback
          内页 640*180 淘宝推广 http://strip.alicdn.com/L1/377/101011/2016-01/creation-16134fDhWm36KFQVv-905308.html?tanxdspv=http%3a%2f%2frdstat.tanx.com%2ftrd%3ff%3d%26k%3da09e279ad7f7a12a%26p%3dmm_15890324_2192376_11153358%26pvid%3d0a672a0f0000569608cb6c9a030de070%26s%3d640x180%26d%3d59420271%26t%3d1452673227pid=mm_15890324_2192376_11153358&tp=3&tu=http%3A%2F%2Fnews.sina.com.cn%2Fo%2F2016-01-13%2Fdoc-ifxnkvtn9872090.shtml&r=http%3A%2F%2Fnews.sina.com.cn%2F&tp=3&tpid=mm_15890324_2192376_11153358

搜狐新闻：内页300*250 京东推广 http://x.jd.com/exsites?spread_type=2&ad_ids=559:5&location_info=0&callback=getjjsku_callback
                               http://x.jd.com/exsites?spread_type=2&ad_ids=559:5&location_info=0&callback=getjjsku_callback 
          内页600*150 淘宝推广 http://strip.taobaocdn.com/tfscom/TB1_z0_HpXXXXckXXXXO04pFXXX.html?name=itemdsp&url=http%3A%2F%2Fnews.sohu.com%2F20160112%2Fn434314369.shtml&iswt=1&pid=tt_17187609_2273741_13022651&refpid=tt_17187609_2273741_13022651&refpos=,n,i&adx_type=0&pvid=0a672a11000056960a201e8c0300982f_0&ps_id=a51a0a8d1aeaa3a7573f9c1a7b68f25a&fl=8&tanxdspv=http%3a%2f%2frdstat.tanx.com%2ftrd%3ff%3d%26k%3da09e279ad7f7a12a%26p%3dmm_17187609_2273741_13022651%26pvid%3d0a672a11000056960a201e8c0300982f%26s%3d600x150%26d%3d17534123%26t%3d1452673568  
          内页300*250 淘宝推广 http://strip.taobaocdn.com/tfscom/TB1SCIyIVXXXXaaaXXXO04pFXXX.html?name=itemdsp&url=http%3A%2F%2Fnews.sohu.com%2F20160113%2Fn434409549.shtml&iswt=1&pid=tt_17187609_2273741_14706573&refpid=tt_17187609_2273741_14706573&refpos=,n,i&adx_type=0&pvid=0a6721a8000056960a987324031408d6_0&ps_id=cf9ce8a118ac76cae6fee44dee1413b4&fl=8&tanxdspv=http%3a%2f%2frdstat.tanx.com%2ftrd%3ff%3d%26k%3da09e279ad7f7a12a%26p%3dmm_17187609_2273741_14706573%26pvid%3d0a6721a8000056960a987324031408d6%26s%3d300x250%26d%3d17534123%26t%3d1452673688

腾讯新闻： 内页300*250 天猫推广 http://wa.gtimg.com/201312/30/tbzg_FZ3_201312301312.html?tclick=http%3A%2F%2Fc.l.qq.com%2Flclick%3Foid%3D2463465%26cid%3D496644%26loc%3DF_ZQ_3%26click_data%3DdXNlcl9pbmZvPXZ4WDduVDB3RVJTOUhPT2RJemdKRWIwVV81ND0%3D%26soid%3DMuzCdhtbVpYLJgpxYAqoBfukAXVx%26chl%3D3%26index%3D1%26page_type%3D2%26aver%3D0%26dtype%3D0
           内页640*120 京东推广 http://x.jd.com/exsites?spread_type=2&ad_ids=884:5&location_info=0&adflag=1           

网易新闻： 内页300*250 京东推广 http://x.jd.com/exsites?spread_type=2&ad_ids=21:5&location_info=0&callback=getjjsku_callback
                                http://x.jd.com/exsites?spread_type=2&ad_ids=553:5&location_info=0&callback=getjjsku_callback
           内页300*400 淘宝推广 http://strip.taobaocdn.com/L1/377/101011/2015-05/creation-32053hSzCQCpXIFSk-435996.html?name=itemdsp&url=http%3A%2F%2Fnews.163.com%2F16%2F0112%2F20%2FBD5IGM3H00014PRF.html&iswt=1&pid=tt_16143929_2253494_8799220&refpid=tt_16143929_2253494_8799220&refpos=,n,i&adx_type=0&pvid=0a67267d000056960c51620203076f35_0&ps_id=c5bac4e2b635c633bd08b1fb90c5a84c&fl=7&tanxdspv=http%3a%2f%2frdstat.tanx.com%2ftrd%3ff%3d%26k%3da09e279ad7f7a12a%26p%3dmm_16143929_2253494_8799220%26pvid%3d0a67267d000056960c51620203076f35%26s%3d300x400%26d%3d17534123%26t%3d1452674129
           
凤凰资讯：内页300*250 京东推广 http://x.jd.com/exsites?spread_type=2&ad_ids=200:5&location_info=0&callback=getjjsku_callback                                

人民网：内页300*250 京东推广 http://x.jd.com/exsites?spread_type=2&ad_ids=232:5&location_info=0&callback=getjjsku_callback

环球网：内页300*250 京东推广 http://x.jd.com/exsites?spread_type=2&ad_ids=887:5&location_info=0&callback=getjjsku_callback
                             http://x.jd.com/exsites?spread_type=2&ad_ids=504:5&location_info=0&callback=getjjsku_callback
                    搜狗推广 http://inte.sogou.com/ct?id=527156&h=250&w=300&fv=18&if=16&sohuurl=http%3A%2F%2Fchina.huanqiu.com%2Farticle%2F2016-01%2F8373665.html&refer=http%3A%2F%2Fwww.huanqiu.com%2F&rnd=dc74d66c8e9a25e0&z=c5d9cca854a7876d&lmt=1452675232&srp=1920,1080&ccd=24&lhi=1&eja=true&npl=24&nmi=47&ece=true&lan=zh-CN&bi=1&t1=30&t2=1452675233&pvt=1452675232816&ssi0=259&ti=%E5%9B%BD%E5%AE%B6%E5%8F%91%E6%94%B9%E5%A7%94%EF%BC%9A%E9%99%8D%E4%BD%8E%E5%9B%BD%E5%86%85%E6%88%90%E5%93%81%E6%B2%B9%E4%BB%B7%E6%A0%BC%E7%AE%80%E5%8C%96%E8%B0%83%E4%BB%B7%E6%93%8D%E4%BD%9C%E6%96%B9%E5%BC%8F_%E5%9B%BD%E5%86%85%E6%96%B0%E9%97%BB_%E7%8E%AF%E7%90%83%E7%BD%91&bs=1903,926&tmp_cdif=0&mi=0&m=MTQ1MjY3NTEyOF9wcmV0dHkgZG9nXzUyNzE1NgA-&ex=&glx=0         


网易首页： 京东广告 960*130 http://x.jd.com/exsites?spread_type=2&ad_ids=15:5&location_info=0&callback=getjjsku_callback
                    300*250 http://x.jd.com/exsites?spread_type=2&ad_ids=745:5&location_info=0&callback=getjjsku_callback



京东推广300*250：
http://x.jd.com/exsites?spread_type=2&ad_ids=745:5&location_info=0&callback=getjjsku_callback       
http://x.jd.com/exsites?spread_type=2&ad_ids=887:5&location_info=0&callback=getjjsku_callback
http://x.jd.com/exsites?spread_type=2&ad_ids=504:5&location_info=0&callback=getjjsku_callback
http://x.jd.com/exsites?spread_type=2&ad_ids=232:5&location_info=0&callback=getjjsku_callback
http://x.jd.com/exsites?spread_type=2&ad_ids=200:5&location_info=0&callback=getjjsku_callback 
http://x.jd.com/exsites?spread_type=2&ad_ids=21:5&location_info=0&callback=getjjsku_callback
http://x.jd.com/exsites?spread_type=2&ad_ids=553:5&location_info=0&callback=getjjsku_callback
http://x.jd.com/exsites?spread_type=2&ad_ids=559:5&location_info=0&callback=getjjsku_callback
http://x.jd.com/cpcunion?spread_type=2&ad_type=7&ad_ids=1329:6&p=ABQBVx5ZFAMbN1Eaa0pGT1plRB9IXyJDB1oJJV1WWggrIlxfTWMsExx1HGByXH0DcVh6QSdgOxkOIgVSHl4SAhoAXCtbFAMTBlQaXxIDIjc0aWtebBo3Cl8GSDISAlEaWRAEFQNXElIcMhM%3D&posid=&unionsiteid=&union_id=1000000560&pid=CP7V0/uaKhCwmOvcAxoAIKGY97MBKgA=&euid=&ref=http%3A%2F%2Fminisite.letv.com%2Fthirdparty%2Frightwlk%2Findex.shtml&_=1452670995385
http://x.jd.com/exsites?spread_type=2&ad_ids=1016:5&location_info=0&callback=getjjsku_callback&ref=http%3A//tv.sohu.com/20160112/n434320041.shtml&clickping=http%3A//vg.aty.sohu.com/pclick%3Fdu%3D0%26al%3D9089408%26out%3D0%26au%3D%26vid%3D2835489%26qd%3D%26rt%3Db35dd44e20e9977a%26uv%3D14520640169295089127%26vt%3Dvrs%26rd%3Dtv.sohu.com%26fee%3D0%26isIf%3D0%26suv%3D1512231538519610%26scookie%3D1%26ar%3D52%26sign%3DH5S-JejzUl8a4OJt1hdfXi6i2lEoxVvN%26rip%3D118.194.236.50%26sip%3D10.16.43.29%26url%3Dhttp%3A//tv.sohu.com/20160112/n434320041.shtml%26pagerefer%3D%26at%3D15%26c%3D1%26s1%3D%26v1%3D1068%26v2%3D1251%26p%3Drec_100_1%26loc%3DCN11%26ac%3D15895%26ad%3D246552%26pt%3D20246%26b%3D295919%26bk%3D78693906%26pagetype%3D1



950*90 淘宝推广 新浪首页 http://strip.taobaocdn.com/tfscom/TB12bs6FXXXXXX2cpXXO04pFXXX.html?name=itemdsp&url=http%3A%2F%2Fwww.sina.com.cn%2F&iswt=1&pid=tt_15890324_2192376_9027674&refpid=tt_15890324_2192376_9027674&refpos=,n,i&adx_type=0&pvid=0a671750000056961d8a5ed8030ccf3d_0&ps_id=da03cab168ce509927ce9c8aabdb8310&fl=7&tanxdspv=http%3a%2f%2frdstat.tanx.com%2ftrd%3ff%3d%26k%3da09e279ad7f7a12a%26p%3dmm_15890324_2192376_9027674%26pvid%3d0a671750000056961d8a5ed8030ccf3d%26s%3d950x90%26d%3d17534123%26t%3d1452678538
转码后：http://strip.taobaocdn.com/tfscom/TB12bs6FXXXXXX2cpXXO04pFXXX.html?name=itemdsp&url=http://www.sina.com.cn/&iswt=1&pid=tt_15890324_2192376_9027674&refpid=tt_15890324_2192376_9027674&refpos=,n,i&adx_type=0&pvid=0a671750000056961d8a5ed8030ccf3d_0&ps_id=da03cab168ce509927ce9c8aabdb8310&fl=7&tanxdspv=http://rdstat.tanx.com/trd?f=&k=a09e279ad7f7a12a&p=mm_15890324_2192376_9027674&pvid=0a671750000056961d8a5ed8030ccf3d&s=950x90&d=17534123&t=1452678538

240*200 淘宝推广 新浪首页 http://strip.taobaocdn.com/tfscom/TB11mj8GXXXXXcmaXXXO04pFXXX.html?name=itemdsp&url=http%3A%2F%2Fwww.sina.com.cn%2F&iswt=1&pid=tt_15890324_2192376_9626783&refpid=tt_15890324_2192376_9626783&refpos=,n,i&adx_type=0&pvid=0a672a0f00005696227b6cac030b4a13_0&ps_id=d8e9d0ffcfe16c0e639b7c597541136b&fl=5&tanxdspv=http%3a%2f%2frdstat.tanx.com%2ftrd%3ff%3d%26k%3da09e279ad7f7a12a%26p%3dmm_15890324_2192376_9626783%26pvid%3d0a672a0f00005696227b6cac030b4a13%26s%3d240x200%26d%3d17534123%26t%3d1452679803

760*100 jd 搜狐首页 http://x.jd.com/exsites?spread_type=2&ad_ids=82:5&location_info=0&callback=getjjsku_callback
                    http://x.jd.com/exsites?spread_type=2&ad_ids=22:5&location_info=0&callback=getjjsku_callback
                    http://x.jd.com/exsites?spread_type=2&ad_ids=23:5&location_info=0&callback=getjjsku_callback
760*100 苏宁 搜狐首页 http://wmdeal.qtmojo.com/b?exid=100&pdt=100&d=ifc&c=1&t=1&did=sohu2tl_760100&w=760&h=100


760*100 淘宝 搜狐首页 http://strip.taobaocdn.com/tfscom/TB1m5h2HpXXXXboXVXXO04pFXXX.html?name=itemdsp&url=http%3A%2F%2Fwww.sohu.com%2F&iswt=1&pid=tt_17187609_2273741_14430228&refpid=tt_17187609_2273741_14430228&refpos=,n,i&adx_type=0&pvid=0a67267d00005696fe0e6207036b815c_0&ps_id=afcb766b06335fc3d2f194a3f5a22d16&fl=4&tanxdspv=http%3a%2f%2frdstat.tanx.com%2ftrd%3ff%3d%26k%3da09e279ad7f7a12a%26p%3dmm_17187609_2273741_14430228%26pvid%3d0a67267d00005696fe0e6207036b815c%26s%3d760x100%26d%3d17534123%26t%3d1452736014

1000*90 jd 新浪首页 http://x.jd.com/exsites?spread_type=2&ad_ids=45:5&location_info=0&callback=getjjsku_callback
1000*90 苏宁 腾讯首页 http://wmdeal.qtmojo.com/b?exid=100&pdt=100&d=ifc&c=1&t=1&did=qq_100090&w=1000&h=90
                        http://wmdeal.qtmojo.com/b?exid=100&pdt=100&d=ifc&c=1&t=1&did=qq_100090&w=1000&h=90


网易首页已有替换规则

//ajax请求返回数据res字符串格式json数据解析
eval('(' + res + ')');

http://www.szazx.com/games/index
<?php include_once '../games_footer.php';?>

小游戏9款上线