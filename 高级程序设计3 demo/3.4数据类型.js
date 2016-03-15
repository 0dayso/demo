//5种简单数据类型 Number String Boolean Undefined Null   1种复杂数据类型 Object

//1.typeof 操作符 检测数据类型 
var str = 'I am a string';
console.log(typeof str);	//string

var num = 123;
console.log(typeof num)		//number

var bool = true;
console.log(typeof bool);	//boolean

var obj1 = {},obj2 = null;
console.log(typeof obj1);	//object
console.log(typeof obj2);	//object

var aa;
console.log(typeof aa);		//undefined

var fn = function(){};
console.log(typeof fn);		//function


//Undefined类型 只有一个值 undefined  声明变量未经初始化默认值为undefined 使用未声明的变量会报错
var b;	
b == undefined;				//true
//未声明的变量和声明了但未初始化的变量 使用typeof操作符检测结果都为undefinde 因此显示的初始化变量是很明智的
//这样做，当typeof检测出的结果为'undefined'时，就能判断变量未声明而不是初始化
console.log(typeof b);		//undefined
console.log(typeof c);		//undefined 


//Null类型 只有一个值 null   表示一个空对象的指针
//保存对象的变量还没有真正保存对象，应该明确让该变量保存null值
console.log(undefined == null)	//true undefined值 派生自null值 所以相等性测试为true


//Boolean类型 两个值 小写true false  任何类型值都可以通过Boolean()转换为Boolean类型 
//以下是转换规则
//true 非空字符串	非0数字		任何对象		
//false 空字符串	0和NAN		null 	undifined
Boolean('hello');	//true
Boolean('');		//false
Boolean(3);			//true
Boolean(0);			//false
Boolean(NaN);		//false
var obj = new Object();
var obj2 = {};
Boolean(obj);		//true
Boolean(obj2);		//true
Boolean(null);		//false
Boolean(undefined);	//false
//在使用流程控制语句时 如if() 会自动执行相应的Boolean转换非常重要
//错误的使用一个对象而不是一个Boolean值 会导致整个流程控制语句判断出错


//Number类型
//1.浮点数 0.1+0.2 != 0.3  不要测试某个特定的浮点数值 如
if (0.1+0.2=0.3) {
	alert('something')
}

//2.isFinite() 判断数值超出计算机范围
var result = Number.MAX_VALUE + Number.MAX_VALUE;
console.log(isFinite(result));	//false

//3.NaN 表示一个本来要返回数值的操作数未返回数值的情况
//isNaN()接收任何数据类型 判断能否转成数字 如果可以返回false 不可以返回true
isNaN('100px');		//true
isNaN('100+100');	//false
isNaN('100'+'100');	//false

//4.数值转换 Number() 接收任何数据类型	parseInt parseFloat 接收字符串参数
//由于Number()函数转换字符串时比较复杂而且不够合理 一般在处理字符串时 都不用它
Number('');				//0 空字符串会被转换为0 
Number('hello'); 		//非数值字符串 转换NaN
Number('1234hello'); 	//NaN
Number('Undefined');	//NaN
Number(true);			//1
Number(false);			//0
//parseInt 转换字符串为数值  会忽略字符串前面的空格，直至找到第一个非空格字符
//如果第一个字符不是数值或是负号 则返回NaN  如果第一个字符是数值继续解析第二个字符 直至遇到非数值字符
//parseInt() 第二个参数为数值基数 默认为10进制 为了避免错误 建议无论在什么情况下都明确指定基数
parseInt('', 10);			//NaN
parseInt('1234hello', 10);	//1234
parseInt('0xAF', 16);	//175
parseInt('070', 8);		//56	
parseInt('070', 10);	//70
//parseFloat解析方式类似parseInt 有两点区别：1.遇到一个无效的小数点截止 2.只转换10进制数，不存在第二个参数
parseFloat('0xAF');		//0
parseFloat('22.2.3');	//22.2
parseFloat('070');		//70
parseFloat('123.23hello');//123.23


//String类型 由零或多个16位Unicode字符组成的字符系列
//1.字符字面量 特殊的字符字面量：转义序列	\n换行	\b空格	\t制表	\'单引号	\" 双引号	\u03a3	Unicode字符
var str = "hello world \n i am \"fengge\"";
console.log(str);

//2.字符串特点 不可变 创建新的字符串 会销毁原来的字符串

//3.转换为字符串 toString() String()
//除undefined和null之外 任何数据类型都可以通过toString()转换为字符串 
//toString() 转换数值为字符串时 可以传递基数 如：
var num = 10;
num.toString(2);	//"1010"


//Object类型	对象就是一组数据和功能的集合