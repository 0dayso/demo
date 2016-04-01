/*6.1理解对象*/
//数据属性 修改属性默认的特性 Object.defineProperty(属性所在对象, 属性名, 描述符对象)
var person = {
	name: 'feng'
}
Object.defineProperty(person, 'name', {
	writable: false,//设置属性name的值为不可修改
	value: 'feng'
})
console.log(person.name);//feng
person.name = 'fengge';	//修改无效
console.log(person.name);//feng

//访问器属性 不能直接定义 需使用Object.defineProperty()定义
var book = {
	_year: 2014,
	edition: 1
};
Object.defineProperty(book, 'year', {
	get: function() {
		return this._year
	},
	set: function(newValue) {
		if (newValue > 2014) {
			this._year = newValue;
			this.edition += newValue - 2014;
		}
	}
});
book.year = 2015;
alert(book.edition);//2


/*6.2创建对象*/
//1.工厂模式
function createPerson(name, age, job) {
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function() {
		alert(o.name)
	}
	return o;
}
var person1 = createPerson('liuwei', 26, 'js engineer');
var person2 = createPerson('feng', 26, 'js');
person1.sayName();	//liuwei
person2.sayName();	//feng

//2.构造函数模式
function CreatePerson(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function() {
		console.log(this.name)
	}
}
var p1 = new CreatePerson('liuwei', 26, 'js');
var p2 = new CreatePerson('feng', 24, 'js');
p1.sayName();	//liuwei
p2.sayName();	//feng
console.log(p1.constructor == CreatePerson);	//true	实例p1的constructor属性指向他的构造函数CreatePerson
console.log(p2.constructor == CreatePerson);	//true	同上
//检测对象类型 instanceof操作符
console.log(p1 instanceof CreatePerson);	//true
console.log(p2 instanceof CreatePerson);	//true

//构造函数问题 每个方法都要在每个实例上重新创建一遍
console.log(p1.sayName == p2.sayName);	//false	不同实例上的同名函数不相等

//没有必要创建两个完成同样任务的Function实例 把sayName()方法提到构造函数外可解决这个问题
//如果有多个方法 就要在函数外创建多个全局函数 不符合封装的概念了
function CreatePerson(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = sayName;
}
function sayName() {
	console.log(this.name)	
}	
var p1 = new CreatePerson('liuwei', 26, 'js');
var p2 = new CreatePerson('feng', 24, 'js');
p1.sayName();	//liuwei
p2.sayName();	//feng

//3.原型模式 创建的每个函数都有一个prototype属性 该属性是一个指针 指向一个对象（包含特定类型的所有实例共享属性和方法）
function Person() {

}
Person.prototype.name = 'liuwei';
Person.prototype.age = 26;
Person.prototype.sayName = function() {
	console.log(this.name)
}
var p1 = new Person();
var p2 = new Person();
p1.sayName();
p2.sayName();
console.log(p1.sayName == p2.sayName);	//true

//原型模式缺点：共享一切属性和方法  对于引用类型如friends 修改一个实例的friends会影响另一个实例的friends
function Person() {

}
Person.prototype = {
	constructor: Person,
	name: 'liuwei',
	age: 25,
	friends: ['aa', 'bb'],
	sayName: function() {
		console.log(this.friends)
	}
}
var p1 = new Person();
var p2 = new Person();
p1.sayName();	//["aa", "bb", exist: function] 
p1.friends.push('cc');
p1.sayName();	//["aa", "bb", "cc", exist: function]  
p2.sayName();	//["aa", "bb", "cc", exist: function] 


//4.构造函数+原型模式 是目前创建对象的默认模式 构造函数定义实例属性 原型定义方法和共享属性
function Person(name, age) {
	this.name = name;
	this.age = age;
	this.friends = ['aa', 'bb'];
}
Person.prototype = {
	constructor: Person,
	sayName: function() {
		console.log(this.name)
	}
}
var p1 = new Person('liuwei', 26);
var p2 = new Person('fengge', 24);
p1.sayName();	//liuwei
p2.sayName();	//fengge
p1.friends.push('cc');
console.log(p1.friends);	//["aa", "bb", "cc", exist: function]
console.log(p2.friends);	//["aa", "bb", exist: function] 
console.log(p1.sayName == p2.sayName);	//true


/*6.3继承*/
//6.3.1 原形链继承（有问题，一般不单独使用） 一个构造函数的实例指向另一个构造函数的原型对象
function SuperType() {
	this.property = true;
}
SuperType.prototype.getSuperValue = function() {
	return this.property;
}
function SubType() {
	this.subproperty = false;
}
//继承了SuperType
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function() {
	return this.subproperty;
}
var s1 = new SubType();
console.log(s1.getSubValue());	//false
console.log(s1.getSuperValue());	//true

//给原型添加方法一定要放在继承之后
function SuperType() {
	this.property = true;
}
SuperType.prototype.getSuperValue = function() {
	return this.property;
}
function SubType() {
	this.subproperty = false;
}
//继承了SuperType
SubType.prototype = new SuperType();
//子类型添加新方法
SubType.prototype.getSubValue = function() {
	return this.subproperty;
}
//重写超类型中的方法
SubType.prototype.getSuperValue = function() {
	return false
}
var p1 = new SubType();
console.log(p1.getSuperValue());	//false
var p2 = new SuperType();
console.log(p2.getSuperValue());	//true

//原形链问题 包含引用类型值的原型属性会被所有实例共享 
function SuperType() {
	this.colors = ['red','yellow','blue'];
}
function SubType() {

}
//继承后 超类型实例等于子类型原型 超类型原本的实例属性相对于子类型而言就成了原型属性
SubType.prototype = new SuperType();
var p1 = new SubType();
p1.colors.push('grey');
console.log(p1.colors);	//["red", "yellow", "blue", "grey", exist: function] 
var p2 = new SubType();
console.log(p2.colors);	//["red", "yellow", "blue", "grey", exist: function]

//6.3.3 原形链继承+借用构造函数 组合继承（最常用的继承方式）
//原形链继承方法和共享属性 借用构造函数继承实例私有属性
function Super(name) {
	this.name = name;
	this.colors = ['red', 'yellow', 'blue'];
}
Super.prototype.sayName = function() {
	console.log(this.name)
}

function Sub(name, age) {
	//借用构造函数继承各实例私有属性
	Super.call(this, name);
	//设置子类型自己的属性
	this.age = age;
}
//原形链继承方法和共享属性
Sub.prototype = new Super();
Sub.prototype.sayAge = function() {
	console.log(this.age)
}
var p1 = new Sub('liuwei', 26);
p1.sayName();	//liuwei
p1.sayAge();	//26
p1.colors.push('grey');
console.log(p1.colors);	//["red", "yellow", "blue", "grey", exist: function]
var p2 = new Sub('fengge', 24);
p2.sayName();	//fengge
p2.sayAge();	//24
console.log(p2.colors);	//["red", "yellow", "blue", exist: function] 


//借用构造函数+原型  组合继承实例测试
function Animal(name) {
	this.name = name;
	this.lies = ['cat', 'dog'];
}

Animal.prototype.sayName = function() {
	console.log(this.name)
}

function Dog(name, age) {
	Animal.call(this, name);
	this.age = age;
};

Dog.prototype = new Animal('haha');

Dog.prototype.sayAge = function() {
	console.log(this.age)
}

var d1 = new Dog('dog1', 30);
d1.sayName();	//dog1
d1.sayAge();	//30
d1.lies.push('gaga');
console.log(d1.lies);	//["cat", "dog", "gaga"]

var d2 = new Dog('dog2', '50');
d2.sayName();	//dog2
d2.sayAge();	//50
console.log(d2.lies);	//["cat", "dog"]
