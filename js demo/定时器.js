var n = 0;
max = 10,
t = null;
function add () {
    n++;
    console.log(n);
    if (n == max) {
        clearInterval(t)
    }
}
t = setInterval(add, 500);


var n = 0,
max = 10;

function add () {
    n++;
    if (n < max) {
        console.log(n);
        setTimeout(add, 500)
    }
}
setTimeout(add, 500);

//f2在f1之后执行 f1执行时间较长 f3会立即执行  结果为333333 111 10
var b;
function f1(a,callback){
    b = a;  
　　setTimeout(function () {
       console.log('111');
　　　　callback();
　　}, 1000);
}
function f2 () {
    console.log(b);
}
function f3() {
    console.log('333333');
}
f1(10,f2);
f3();