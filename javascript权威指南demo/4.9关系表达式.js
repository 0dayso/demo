//对象的比较是引用的比较 对象只和其本身相等 和任何其他对象都不等
var obj1 = [1,2], obj2 = [1,2];
console.log(obj1 == obj2);	//false
console.log(obj1[0] == obj2[0]);	//true

var a,b;
a === b; 					//true
null === null;		//true

null == undefined;	//true


//in运算符 string in obj  判断obj是否有string属性
var obj = {x : 'xx', y : 'yy'};
// var str = 'x';
console.log('x' in obj);		//true
console.log('z' in obj);		//false

var data = [7,8,9];
console.log('0' in data);		//true
console.log(1 in data);			//true
console.log(3 in data);			//false

//instanceof  obj instanceof Object 判断obj 是否为 Object实例
var d = new Date();
console.log( d instanceof Date );


//





























