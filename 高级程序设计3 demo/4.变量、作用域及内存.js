/*基本类型值*/
var a = 1;
var b = a;
b = 3;
console.log(a);	// 1 不变

/*引用类型值*/
var a = {
	'x' : 1,
	'y' : 2
}
var b = a;
b.x = 3;
console.log(a.x) // 3 改变 复制的是a指向堆内存的一个引用指针 b和a 指向同一个对象 相互影响


/*函数传参相当于 变量复制*/
function add(num) {
	num += 20;
	return num;
}
var count = 10;

console.log(add(count));	//30
console.log(count);			//10


function fn(obj) {
	//obj = person = {}  obj和person 指向同一个Object
	obj.name = 'liu';	//相互影响
	obj = new Object();	//obj指向另一个Object
	obj.name = 'sun';	//互不影响
}
var person = new Object();
fn(person);
console.log(person.name);	//liu 函数传参 是按值传递的

/*参数*/
function ad(a, b) {
	arguments[1] = 10;	//通过arguments对象修改第二个参数为10 
	return arguments[0] + b;
}
var result = ad(5, 15);
var result1 = ad(5, 100);
console.log(result);	// 15
console.log(result1);	// 15

// function bc(a, b) {
// 	a = 10;
// 	b = 5;
// 	console.log(arguments[0]);
// 	console.log(arguments[1]);
// }
// bc(22, 3);	// 10 修改命名参数 是否会改变arguments对象？ 书上写不会 测试会改变。