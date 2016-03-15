//语句块 注意：1.语句块的结尾不需要分号；2.块中的原始语句必须以分号结尾，但语句块不需要；3.缩进
{
	var x = Math.PI;
	var cx = Math.cos(x);
	console.log("cos(π) = "+cx);		//cos(π) = -1
}

	
//switch()
var n = 1;
switch(n) {
	case 1:
		console.log(1);
		break;
	case 2:
		console.log(2);
		break;
	case 3:
		console.log(3);
		break;	
	default:
		console.log(4);
		break;
}

//循环 while		do while   for   for in

//for 循环
var sum = 0;
for ( var i = 0, j = 10; i < j; i++, j-- )
	sum += i+j;

//从0连加到n
function add(n) {
	var sum = 0, n1 = n;
	for ( var i = 1; i < n; i++, n-- ) 
		sum += i+n;
	sum = (n1 % 2 == 1) ? (sum + Math.ceil(n1/2)) : sum;
	return sum;
}
console.log(add(100));		//5050

// for in 循环  枚举对象属性
var obj = {name : 'fengge', age : '23'};
for ( var attr in obj ) {
	console.log(attr + ":" + obj[attr]);
}

var o = {x : '1', y : '2', z : '3'};
var a = [], i = 0;
for ( a[i++] in o ) ;
console.log(a);		["x","y","z"];
for (var i in a) console.log(i);		//0  1  2  枚举数组下标


//跳转语句: 
//1.标签语句 for while等循环体加标签 以便于break(直接跳出),continue(跳离当前继续下一次)跳转
label : for ( var i = 0; i < 10; i++ ) {
	for ( var j = 10; j > i; j-- ) {
		if (i == 5)
			break label;
		console.log(i);
	}
}
//try catch(e)
function factorial(n) {
	if (n == 1)
		n *= 1;
	else 
		n *= factorial(n-1);
	// debugger;
	return n;
}
try {
	var n = Number(prompt("请输入正整数",""));
	var f = factorial(n);
	alert(n + " | = " + f);
} catch(ex) {
	alert(ex);
}








