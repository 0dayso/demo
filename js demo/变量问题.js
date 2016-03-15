//
var x = 10; //全局  
y = 100; //全局  
function fun1() {  
    var m = 99; //局部  
    n = 9; //全局  
}  
alert(typeof this.x); //number  
alert(typeof this.y); //number  
alert(typeof this.m); //undefined  
alert(typeof this.n); //undefined  
fun1();  
alert(typeof this.m); //undefined  
alert(typeof this.n); //number 

var x = 10; //全局  
y = 100; //全局  
function fun1() {  
    var m = 99; //局部  
    n = 9; //全局  
}  
alert(typeof window.x); //number  
alert(typeof window.y); //number  
alert(typeof window.m); //undefined  
alert(typeof window.n); //undefined  
fun1();  
alert(typeof window.m); //undefined  
alert(typeof window.n); //number  

alert(this == window);  //true
alert(this === window); //true


//函数在其函数状态和对象状态时this的指向是不同的，因为javaScript的动态的执行，当其执行到的时候，才去计算上下文情况 
function Fo1() {  
    return this;  
}  
alert(Fo1());       //[object window]
alert(new Fo1());   //[object object]


//在javaScript中声明变量非常的灵活，但这个灵活性，对控制全局和局部要有所注意。
function fun1() {  
    var m = n = 10; //n是全局，m是局部  
    var x, y = 1, k = 10; //xyk都是局部  
}