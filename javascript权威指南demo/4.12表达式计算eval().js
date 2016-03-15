//动态执行源代码中的字符串,几乎没有必要在实际中使用
eval("3+2");
eval("function a(){alert('1')}");
a();		//1

//eval() 参数没有意义 将会报错
eval("a");	//a is not defined 

//使用eval()别名调用eval() 将是全局eval
var geval = eval;
var x = "global", y = "global";
function f() {
	var x = "local";
	eval("x += 'changed';");			//局部eval() 改变局部的x
	return x;											//x 是 "local changed"	
}

function g() {
	var y = "local";
	geval("y += 'changed';");			//全局eval() 改变全局的y
	return y;
}

console.log(f(), x);				//localchanged global
console.log(g(), y);				//local globalchanged
 

//delete 运算符
var arr = [1,2,3];
delete arr[2];
console.log( 2 in arr );		//false
console.log(arr.length);		//3

var o = {x : 1, y : 2};
delete o.x;
x in o;											//false		in 判断 o 是否有 x 属性
//通过var声明的变量 function声明的函数不能被delete

//逗号运算符
for (var i=0,j=10; i<j; i++,j--)
	console.log(i+j);					// 5 个 10