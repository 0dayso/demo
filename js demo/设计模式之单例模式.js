//单例模式最简单的方式：对象字面量方法
var mySingleton = {
	prototype1 : "something",
	prototype2 : "other",
	method1 : function () {
		console.log('hello')
	}
};
mySingleton.prototype1;

//单例模式可以创建私有变量和方法，可以通过闭包把希望共用的方法放出来
var mySingleton = function () {
	//这里声明私有变量和方法
	var myVar = 'my var';
	var ourVar = 'our var';
	var myMethod = function () {
		console.log(myVar)
	};
	var ourMethod = function () {
		console.log(ourVar)
	};

	//这里放出公用变量和方法
	return {
		ours : 'the public can see this',
		oursFn : function () {
			ourMethod()
		}
	}

};
var single = mySingleton();
//single.oursFn();			//'our var'
//single.ourMethod();			//undefined


//上面的代码很不错了，但如果我们想做到只有在使用的时候才初始化，那该如何做呢？
var Singleton = (function () {
	var i;
	/*这里定义单例代码*/
	var init = function () {
		return {
			publicMethod : function () {
				console.log('the public method')
			},
			publicVar : 'the public can see this'
		}
	}

	return {
		Fn : function () {
			if (!i) {
				i = init()
			}
			return i;
		}
	}

})();
Singleton.Fn().publicMethod();
