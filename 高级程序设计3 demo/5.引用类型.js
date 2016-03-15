/*5.1 Object类型*/
//对象字面量是向函数传递大量可选参数的首选方式
function person(args) {
	var info = '';
	if (typeof args.name == 'string') {
		info += 'Name:' + args.name + '\n';
	}
	if (typeof args.age == 'number') {
		info += 'Age:' + args.age;
	}
	alert(info);
}

person({
	'name':'feng',
	'age':25
})
person({
	'name':'ge'
})

//属性访问：'.' '[]' 一般情况下用'.'访问
var person = {
	'user name':'liuwei'
}
alert(person['user name'])


/*5.2 Array类型*/
//数组检测 instanceof 默认只有一个全局环境
//当有多个全局环境（框架）从一个框架向另一个框架传入数组 ECMAScript5新增Array.isArray()方法检测
var a = [];
if (a instanceof Array)
	alert('a是数组');		//a是数组
alert(Array.isArray(a));	//true

//数组转换toString() valueOf() toLocaleString()
//join 数组转为字符串
var color = ['red','yellow','blue'];
console.log(color.join('^^'));

//栈方法 (Last In First Out 后进先出) push()末端插入 返回新数组长度  pop()末端删除 返回被删除项
//队列方法(First In First Out 先进先出) shift()开头删除 返回被删除项 unshift()开头插入 返回新数组长度
// push()+shift() 或  pop()+unshift()  模拟队列方法

//数组排序 通过比较函数的返回值来改变元素顺序 
function compare(v1, v2) {
	if (v1 < v2) {
	    return -1;  // v1在前 v2在后
	} else if (v1 > v2) {
		return 1;	// v1在后 v2在前
	} else {
		return 0;
	}		
}
var arr = [1,3,5,10,2,19];
arr.sort(compare);	//[1, 2, 3, 5, 10, 19]

function compare(v1, v2) {
	return v1 > v2 ? 1 : -1;	
}
var arr = [1,3,5,10,2,19];
arr.sort(compare);

//操作方法
//concat() 数组复制连接
var arr = ['a','b','c'];
var arr2 = arr.concat('d',['e','f']);
console.log(arr2)	//["a", "b", "c", "d", "e", "f", exist: function] 
//slice(a,b) 截取数组a-b之间的元素(不包括b)，返回一个新数组 不改变原来数组
var arr = [1,2,3,4,5,6];
var arr2 = arr.slice(1,5);
console.log(arr2);	//[2, 3, 4, 5, exist: function]
var arr3 = arr.slice(1);
console.log(arr3);	//[2, 3, 4, 5, 6, exist: function]
//splice(a,b,c...)删除、插入、替换 a起始位置 b要删除的项数 c..要插入的项(N项) 修改原数组
var arr = ['a','b','c','d','e','f'];
arr.splice(0,1);
console.log(arr);
arr.splice(0,2,'g');
console.log(arr);
arr.splice(2,0,'c1','c2');
console.log(arr);

//位置方法indexOf lastIndexOf 返回4在arr数组中的索引
var arr = [1,2,3,4,5,4,3,2,1];
arr.indexOf(4);		//3
arr.lastIndexOf(4);	//5
arr.indexOf(4,4);	//5
arr.lastIndexOf(4,4);	//3
arr.indexOf(6);		//-1

//迭代方法 接收两个参数：1.要在数组每一项上执行的函数(该函数接收三个参数 1.数组项的值 2.该项在数组中的位置 3.数组对象本身) 2.可选参数 运行该函数的作用域对象——影响this值
//every()每一项执行函数后都返回true才为true,some()任何一项执行函数后返回了true就为true
var arr = [1,2,3,4,5,4,3,2,1];
var result = arr.every(function(item,index,array) {
	return (item > 2);
})
console.log(result);	//false
var arr = [1,2,3,4,5,4,3,2,1];
var result = arr.some(function(item,index,array) {
	return (item > 2);
})
console.log(result);	//true
//filter() 返回符合条件的新数组 筛选数组非常有用
var arr = [1,2,3,4,5,4,3,2,1];
var result = arr.filter(function(item,index,array) {
	return (item > 2);
})
console.log(result);	//[3, 4, 5, 4, 3, exist: function] 
//map() 返回原数组上执行函数后的新数组	（创建一一对应的新数组）
var arr = [1,2,3,4,5,4,3,2,1];
var result = arr.map(function(item,index,array) {
	return item*2
})
console.log(result);	//[2, 4, 6, 8, 10, 8, 6, 4, 2, exist: function] 
//forEach() 没有返回值相当于for循环遍历
var arr = [1,2,3,4,5,4,3,2,1];
var result = arr.forEach(function(item,index,array) {
	//执行某些操作
	console.log(index)
})

//缩小方法 reduce() 数组求和  reduceRight() 与reduce反向
var arr = [1,2,3,4,5,4,3,2,1];
var result = arr.reduce(function(pre,cur,index,array) {
	return pre+cur
})
console.log(result);		//25



/*5.3 Date类型*/
//创建日期对象
var d = new Date();
//Date.parse() Date.UTC  返回设置时间 参数格式不同
var sometime = new Date(Date.parse("May 25, 2014"));
var sometime = new Date("May 25, 2014");
console.log(sometime);		//Sun May 25 2014 00:00:00 GMT+0800 (中国标准时间) 
//
var utc = new Date(Date.UTC(2000, 0));
console.log(utc);			//Sat Jan 01 2000 08:00:00 GMT+0800 (中国标准时间) 
var utctime = new Date(Date.UTC(2015, 1, 10, 10, 17, 30));
console.log(utctime);		//Tue Feb 10 2015 18:17:30 GMT+0800 (中国标准时间) 
//本地时间
var d = new Date(2015, 1, 10, 10, 17, 30);
console.log(d);				//Tue Feb 10 2015 10:17:30 GMT+0800 (中国标准时间) 
//返回当前时间的毫秒数
var start = Date.now();		//ie9+
var start = +new Date();	//兼容
//日期和时间组件方法



/*5.4 RegExp类型*/
//RegExp对象方法 exec() 返回包含第一个匹配项信息的数组
//即使匹配模式为g 在一个字符串上多次调用exec()方法只返回第一个匹配项
var text = 'cat, bat, mat, tat';
var pattern1 = /.at/;

var matches = pattern1.exec(text);
console.log(matches.index);			//0
console.log(matches[0]);			//cat
console.log(pattern1.lastIndex);	//0
	
var matches = pattern1.exec(text);
console.log(matches.index);			//0
console.log(matches[0]);			//cat
console.log(pattern1.lastIndex);	//0	

var text = 'cat, bat, mat, tat';
var pattern2 = /.at/g;

var matches = pattern2.exec(text);
console.log(matches.index);			//0
console.log(matches[0]);			//cat
console.log(pattern2.lastIndex);	//3
	
var matches = pattern2.exec(text);
console.log(matches.index);			//5
console.log(matches[0]);			//bat
console.log(pattern2.lastIndex);	//8	

//test() 接受一个字符串 匹配返回true 不匹配返回false
var text = "000-00-0000";
var pattern = /\d{3}-\d{2}-\d{4}/;
if (pattern.test(text)) {
	console.log('匹配成功')
}


/*5.5 Function类型*/
//作为值的函数  一个函数作为另一个函数的参数
function fn1(fn2, fn2Argus) {
	return fn2(fn2Argus);
}
function add10(num) {
	return num += 10;
}
var result = fn1(add10, 20);
console.log(result);	//30

function sayHi(name) {
	return name = 'hello ' + name;
}
var result2 = fn1(sayHi, 'feng');
console.log(result2);		//'hello feng'

//根据某个属性的比较函数
function fn1(propertyName) {
	return function(object1, object2) {
		var value1 = object1[propertyName];
		var value2 = object2[propertyName];

		if (value1 < value2) {
			return -1;
		} else if (value1 > value2) {
			return 1;
		} else {
			return 0;
		}
	}
}

var data = [{'name': 'zhang', age: 28},{'name': 'liu', age:29}];
data.sort(fn1('name'));
console.log(data[0].name);		//liu
data.sort(fn1('age'));
console.log(data[0].age);		//28

//函数内部有两个特殊对象：arguments和this
//阶乘函数  变量是一串地址 用来指向内存中的实际数据 可以改变
function factorial(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * factorial(num-1);
	}
}

var fn = factorial;
factorial = function() {
	return 0;
}
console.log(fn(5));			//0
console.log(factorial(5));	//0


function factorial(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * arguments.callee(num-1);	//arguments.callee指向方法本身，不可变
	}
}

var fn = factorial;
factorial = function() {
	return 0;
}
console.log(fn(5));			//120
console.log(factorial(5));	//0

//caller 该属性保存着调用当前函数的函数的引用
function outer() {
	inner();
}
// function inner() {
// 	console.log(inner.caller)		//function outer() {
// 									//	inner();
// 									//	}
// }

function inner() {
	console.log(arguments.callee.caller)	//function outer()...
}

outer();


//apply()和call() 第一个参数是执行函数的作用域 第二个参数是要执行函数的参数
//apply()和call()最大的作用是在改变作用域上
window.color = 'red';
var o = {'color':'blue'};

function sayColor(){
	console.log(this.color)
}

sayColor();				//red
o.run = sayColor;
o.run();				//blue  sayColor函数赋值给对象o.run属性 通过o.run()调用函数sayColor 执行this.color 就变成o.color
sayColor.call(window);	//red
sayColor.call(this);	//red	
						//通过把函数赋值给对象 改变函数this指向						
sayColor.call(o);		//blue	call()方法更为方便 直接改变sayColor指向o

//bind() 其this值会被绑定到传给bind()函数的值

var another = sayColor.bind(o);
another();				//blue


/*5.6基本包装类型*/
//String类型 indexOf lastIndexOf
var str = 'hello world';
console.log(str.lastIndexOf('l',9));	//9

//match()
var str = 'cat, bat, sat';
var pattern = /.at/;
var result = str.match(pattern);
console.log(result)					//["cat", index: 0, input: "cat, bat, sat", exist: function]
console.log(result[0])				//'cat'
console.log(result.index)			// 0
console.log(pattern.lastIndex)		// 0	

//search() 从头向后查找 返回第一个匹配项索引 无匹配返回-1
var text = 'cat, bat';
var pattern = /at/;
text.search(pattern);		// 1

//replace()
var text = 'cat, bat, sat';
var nText = text.replace('at','ond');		//替换第一个匹配项
console.log(nText);							//cond, bat, sat 
var text2 = text.replace(/at/g,'ond');		//全局匹配 替换所有匹配项
console.log(text2);							//cond, bond, sond 

//split() 		字符串=》数组
var colors = "red, blue, yellow, grey";
var results = colors.split(",");
console.log(results);						//["red", " blue", " yellow", " grey", exist: function] 
var result2 = colors.split(",", 2);
console.log(result2);						//["red", " blue", exist: function]0: "red"1: " blue"length: 2__proto__: Array[0] 
var result3 = colors.split(/[^,]+/);
console.log(result3);						//["", ",", ",", ",", "", exist: function]0: ""1: ","2: ","3: ","4: ""length: 5__proto__: Array[0] 


/*5.7单体内置对象*/
//Global对象 Math对象
//Math.floor(Math.random()*y + x)  y为总数量  x为起始值
var num = Math.floor(Math.random()*y + x);
console.log(Math.floor(Math.random()*10 + 1));	//1-10之间随机数
console.log(Math.floor(Math.random()*9 + 2))	//2-10之间随机数

//函数num() 随机取得x-y之间的数
function num(x, y) {
	//总数量为z
	var z = y - x + 1;
	return Math.floor(Math.random()*z + x);
}
console.log(num(5, 10));						//x-y之间随机数
//随机取得数组中的一个元素
var colors = ['red', 'yellow', 'green', 'blue', 'white'];
var color = colors[num(0, colors.length-1)];
console.log(color);