//1.一元操作符
//使用前置递增或递减 变量的值都是在语句被求值以前改变的 如：
var a = 28;
var b = --a + 3;
console.log(a);		//27
console.log(b);		//30

var num1 = 2;
var num2 = 20;
var num3 = --num1 + num2;		
var num4 = num1 + num2;			
console.log(num3);				//21
console.log(num4);				//21

//后置递增或递减 是在包含他们的语句被求值之后才执行的
var num1 = 2;
var num2 = 20;
var num3 = num1-- + num2;		
var num4 = num1 + num2;			
console.log(num3);				//22		
console.log(num4);				//21

//一元加减运算符主要用于算术运算 其次也可以用来做类型转换
//对非数值使用一元加操作符 该操作符会像Number()转型函数一样对这个值执行转换 都转换为number类型
var s1 = '1.1';
s1 = +s1;
console.log(typeof s1);		//number

var s1 = true;
s1 = +s1;
console.log(s1);			//1

var s1 = 'zzz';
s1 = +s1;
console.log(s1);			//NaN