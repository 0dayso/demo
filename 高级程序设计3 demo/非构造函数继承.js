//一、object()方法
var Chinese = {
	nation : '中国'
};
var Doctor = {
	career : '医生'
}
//只做一件事，就是把子对象的prototype属性，指向父对象，从而使得子对象与父对象连在一起。
//使用的时候，第一步先在父对象的基础上，生成子对象：
function object(o) {
	function F() {};
	F.prototype = o;
	return new F();
}
var Doctor = object(Chinese);
//然后，再加上子对象本身的属性：
Doctor.career = '医生';
//这时，子对象已经继承了父对象的属性了。
console.log(Doctor.nation); //中国


//二、浅拷贝 思路：把父对象的属性拷贝给子对象  当父对象的属性是数组或对象时，
//子对象拷贝的是父对象一个内存地址，修改子对象会影响父对象
var Chinese = {
	nation : '中国'
};
var Doctor = {
	career : '医生'
}
Chinese.birthPlaces = ['北京','上海','香港'];
function extendCopy(p) {
	var c = {};
	for (var i in p) {
		c[i] = p[i];
	}
	c.uber = p;
	return c;
}
var Doctor = extendCopy(Chinese);
Doctor.career = '医生';
console.log(Doctor.nation); //中国
//但是，这样的拷贝有一个问题。那就是，如果父对象的属性等于数组或另一个对象，那么实际上，
//子对象获得的只是一个内存地址，而不是真正拷贝，因此存在父对象被篡改的可能。
Doctor.birthPlaces.push('厦门');
alert(Doctor.birthPlaces); //北京, 上海, 香港, 厦门
alert(Chinese.birthPlaces); //北京, 上海, 香港, 厦门


//三、深拷贝 所谓"深拷贝"，就是能够实现真正意义上的数组和对象的拷贝。它的实现并不难，只要递归调用"浅拷贝"就行了。
function deepCopy(p, c) {
　　　　var c = c || {};
　　　　for (var i in p) {
　　　　　　if (typeof p[i] === 'object') {
　　　　　　　　c[i] = (p[i].constructor === Array) ? [] : {};
　　　　　　　　deepCopy(p[i], c[i]);
　　　　　　} else {
　　　　　　　　　c[i] = p[i];
　　　　　　}
　　　　}
　　　　return c;
　　}
//使用的时候这样写：
　　var Doctor = deepCopy(Chinese);
//现在，给父对象加一个属性，值为数组。然后，在子对象上修改这个属性：
　　Chinese.birthPlaces = ['北京','上海','香港'];
　　Doctor.birthPlaces.push('厦门');
//这时，父对象就不会受到影响了。
　　alert(Doctor.birthPlaces); //北京, 上海, 香港, 厦门
　　alert(Chinese.birthPlaces); //北京, 上海, 香港
//目前，jQuery库使用的就是这种继承方法。