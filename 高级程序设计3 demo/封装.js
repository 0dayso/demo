//对象封装
//原型结构
var Cat = {
	name : '',
	color : ''
}
//根据原型结构创建对象实例
var cat1 = {};
cat1.name = 'Tom';
cat1.color = 'blue';
var cat2 = {};
cat2.name = 'jerry';
cat2.color = 'grey';

//通过函数的方式申明 避免重复 问题：不能反映cat1和cat2是同一个原型对象的实例
function Cat(name,color) {
	return {
		name : name,
		color : color
	}
}
var cat1 = Cat('tom','blue');
var cat2 = Cat('jerry','grey');
console.log(cat1)

//构造函数
function Cat(name, color) {
	this.name = name;
	this.color = color;
}
var cat1 = new Cat('tom', 'blue');
console.log('cat1-name:'+cat1.name+'\n'+'cat1-color:'+cat1.color);
var cat2 = new Cat('jerry', 'grey');
console.log('cat2-name:'+cat2.name+'\n'+'cat2-color:'+cat2.color);
//cat1和cat2会自动拥有construct属性指向Cat构造函数 由此可以检测cat1和cat2是同一个对象实例
console.log(cat1.constructor == Cat);
console.log(cat2.constructor == Cat);

//构造函数模式  每个构造函数都有一个prototype属性指向其原型对象，所有该构造函数实例都会继承其原型对象属性
//对于不变的属性或方法，直接定义到prototype属性对象上，避免重复造成内存浪费
function Cat(name, color) {
	this.name = name;
	this.color = color;
	this.type = 'animal';
	this.run = function() {
		alert('吃老鼠');
	}
}
var cat1 = new Cat('tom', 'blue');
var cat2 = new Cat('jerry', 'grye');
console.log(cat1.run == cat2.run);		//false  不同实例的方法指向不同的内存地址

function Cat(name, color) {
	this.name = name;
	this.color = color;
}
Cat.prototype.type = 'animal';
Cat.prototype.run = function() {
	alert('吃老鼠')
}
var cat1 = new Cat('tom', 'blue');
var cat2 = new Cat('jerry', 'grey');
console.log(cat1.run == cat2.run);		//true	不同实例的原型方法指向同一个内存地址


//Prototype模式验证方法
//isPrototypeOf() 判断某个prototype对象和实例的关系
console.log(Cat.prototype.isPrototypeOf(cat1));	//Cat.prototype是实例cat1的原型对象吗？ true

//hasOwnProperty()  判断某个属性是本地属性还是继承自prototype对象
console.log(cat1.hasOwnProperty('name'));	//true 本地属性
console.log(cat1.hasOwnProperty('type'));	//false 继承自prototype对象

//in	判断某个实例是否具有某个属性（不分是否为本地）
console.log('name' in cat1);	//true
console.log('type' in cat1);	//true