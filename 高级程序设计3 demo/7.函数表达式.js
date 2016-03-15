/*7.1递归*/
var factorial = (function f(num) {
	if (num <= 1) {
		return 1;
	} else {
		return f(num-1)*num;	//4*f(3)=4*3*f(2)=4*3*2*f(1)=4*3*2*1=24
	}
})
console.log(factorial(4));	
var f2 = factorial;
factorial = null;
console.log(f2(4));	//24	f2正常执行f()
console.log(factorial(4));	//error


function factorial(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num*factorial(num-1);
	}
}
console.log(factorial(4));	//24
f2 = factorial;
factorial = null;
console.log(f2(4));	//error factorial赋值给f2 当factorial=null f2不会为null 但是f2必须执行factorial() 所以报错


function factorial(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num*arguments.callee(num-1);
	}
}
console.log(factorial(4));	//24
f2 = factorial;
factorial = null;
console.log(f2(4));	//24	arguments.callee()是一个指向正在执行的函数的指针 通过其可以顺利执行