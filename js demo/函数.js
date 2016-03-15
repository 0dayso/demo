var input = 5;  
switch (input) {  
    case 10:  
        function fun1() {  
            alert(10);  
        }  
        break;  
    case 5:  
        function fun1() {  
            alert(5);  
        }  
        break;  
    default:  
        function fun1() {  
            alert("default");  
        }  
        break;  
}  
fun1();     //ie chrome下 default   ff下 5  函数声明预编译 同名函数后声明的替代前面的  在ff下switch当作语句块所以是5

//用函数表达式创建函数，只有当函数表达式执行的时候才创建函数对象并执行函数体内代码
var input = 5;  
switch (input) {  
    case 10:  
        var fun1 = function() {  
            alert(10);  
        }  
        break;  
    case 5:  
        var fun1 = function() {  
            alert(5);  
        }    
        break;  
    default:  
        var fun1 = function() {  
            alert("default");  
        }    
        break;  
}  
fun1();         //ie chrome ff 均为 5



function fun1() {  
    alert("A");  
}  
  
var count = 2;  
  
var input = 10;  
switch (input) {  
    case 5:  
        function fun1() {  
            alert(5);  
        }  
        break;  
    case 10:  
        if (count % 2 == 0) {  
            function fun1() {  
                alert("odd");  
            }  
        }  
        else {  
            function fun1() {  
                alert("even");  
            }  
        }  
}  
  
fun1();     //ie chrome  'even'    ff: 报错 fun1 is not defined 



var fun3 = function fun4() {//声明一个变量指向一个非匿名的函数表达式  
  
}    
fun3();  
 
alert(typeof fun3); //function  
alert(typeof fun4); //undefined


//return 把有名函数当作函数表达式来看待 而不是函数声明
var fun1 = function(x) {  
    if (x < 10) {  
        return function fun2() {  
            alert("min");  
        }  
    }  
    return function fun2() {  
        alert("max");  
    }  
}  
  
fun1(4)();      //ie chrome ff  'min'
fun1(10)();     //ie chrome ff  'max'

//非匿名函数表达式
var fun1 = function fun2() {  
    alert("OK");  
}  
  
fun1(); // OK  
fun2(); //在IE中弹出OK，在Chrome和FireFox中错误




(function() {  
    alert("OK");  
})();  

(function() {  
    alert("OK");  
} ());  


//渐变区域  参数为匿名函数
$(  
function() {  
    $(":button").click(  
    function() {  
        for (var i = 0; i < 10; i++) {  
            var ol = $("<li>").css({ width: 30, height: 30 }).  
            addClass("left").  
            appendTo("ol");  
            ol.css("backgroundColor",  
                function(index, value) {  
                    index = $("ol>li").index(this);  
                    var r, g, b = 0, colorValue = "";  
                    if (index == 0) {  
                        r = parseInt(Math.random() * 256);  
                        g = parseInt(Math.random() * 256);  
                        b = parseInt(Math.random() * 256);  
                    } else {  
                        colorValue = $("ol>li").eq(index - 1).css("backgroundColor").  
                                    toString().replace("rgb(", "").replace(")", "")  
                        r = parseInt(colorValue.split(",")[0]);  
                        g = parseInt(colorValue.split(",")[1]);  
                        b = parseInt(colorValue.split(",")[2]) + 5;  
                    }  
                    return "rgb(" + r + "," + g + "," + b + ")";  
                }  
                );  
        }  
    }  
    );  
}  
); 


//点击复制div函数 参数为匿名函数
$(  
function() {  
    $("div").click(  
    function() {  
        $("<div>").appendTo("body").css(  
        (function(e) {  
            var styleObj = {};  
            for (var item in e.style) {  
                if (e.style[item] != "") {  
                    styleObj[item] = e.style[item];  
                }  
            }  
            return styleObj;  
        } (this))  
        );  
    }  
    );  
}  
);