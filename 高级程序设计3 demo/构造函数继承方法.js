//一、使用apply或call方法将父函数绑定到子函数上
function Animal() {
	this.species = '动物';
}
function Cat(name, color) {
	//Animal.apply(this,arguments);
	Animal.call(this);
	this.name = name;
	this.color = color;
}
var cat1 = new Cat('Tom','blue');
console.log(cat1.species);		//'动物'


//二、prototype模式 如果‘猫’的prototype对象指向一个‘动物’实例，那么所有猫的实例都能继承Animal了
function Animal() {
	this.species = '动物';
}
function Cat(name, color) {
	this.name = name;
	this.color = color;
}
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
var cat1 = new Cat('Tom','blue');
console.log(cat1.species);		//'动物'


//三、直接继承prototype  对于不变的属性可以直接写入到prototype对象中 因此Cat可以跳过Animal构造函数 直接继承Animal.prototype
//这样做的好处是不用实例化Animal比较省内存，缺点是Cat和Animal的prototype都指向了同一个对象，那么对Cat.prototype的修改会反映到
//Animal.prototype中
function Animal(){};
Animal.prototype.species = '动物';
Cat.prototype = Animal.prototype;
Cat.prototype.constructor = Cat; //这里不仅变回Cat.prototype指向 也改变了Animal.prototype指向
console.log(Animal.prototype.constructor); //Cat
var cat1 = new Cat('Tom','blue');
console.log(cat1.species);		//'动物'


//四、利用空对象作为中介（解决了三的问题）
function Animal(){};
Animal.prototype.species = '动物';
var F = function() {};
F.prototype = Animal.prototype;
Cat.prototype = new F();	//F为空对象几乎不占内存 实例比较省内存
Cat.prototype.constructor = Cat;	//不影响Animal.prototype
console.log(F.prototype.constructor);	//Animal
console.log(Animal.prototype.constructor);	//Animal
var cat1 = new Cat('Tom','blue');
console.log(cat1.species);		//'动物'

//封装方法四 这是YUI实现继承的方式
function Animal(){
	this.name = 'hello';
};
// Animal.prototype.species = '动物';
Animal.prototype.sayName = function() {
	console.log(this.name);
}
function Cat(name, color) {
	this.name = name;
	this.color = color;
}
function extend(Child, Parent) {
	var F = function() {};
	F.prototype = Parent.prototype;
	Child.prototype = new F();
	Child.prototype.constructor = Child;
	Child.uber = Parent.prototype;	//意思是为子对象设一个uber属性，这个属性直接指向父对象的prototype属性。（uber是一个德语词，意思是"向上"、"上一层"。）这等于在子对象上打开一条通道，可以直接调用父对象的方法。这一行放在这里，只是为了实现继承的完备性，纯属备用性质。
}
extend(Cat, Animal);
var cat1 = new Cat('Tom', 'blue');
// console.log(cat1.species);		//'动物'
cat1.sayName();


//拷贝继承  思路：把父对象所有属性拷贝进子对象
function Animal(){};
Animal.prototype.species = '动物';
function Cat(name, color) {
	this.name = name;
	this.color = color;
}
function extend2(Child, Parent) {
	var p = Parent.prototype;
	var c = Child.prototype;
	for (var i in p) {
		c[i] = p[i]
	}
	c.uber = p;
}
extend2(Cat, Animal)
var cat1 = new Cat('Tom', 'blue');
console.log(cat1.species);		//'动物'