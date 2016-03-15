if (!console) {
	var console = {};
	console.log = function(str) {
		alert(str)
	}
}
var test=(function()
{
	var arr2=[];
	for(var i=0;i<20000;i++)
	{
		var t=i;
		t=parseInt(Math.random()*2000)+1;
		arr2[i]=(t.toString());
	}
	
	return function(){return arr2};
})();
//1.先排序 再比较相邻两个元素 如果不相同则添加前一个到新数组里	效率可以 缺点：打乱原有数组顺序
var arr = [1,2,3,4,5,5,20,30,4,4,3,2,1];
arr.sort(function(a,b){
	return a - b;
})	//这里如果不需要按数值排序 可直接使用arr.sort()
var arr2 = [];
for (var i = 0; i < arr.length; i++) {
	if ( arr[i] == arr[i+1] ) {
		continue;
	}
	arr2.push(arr[i]);
};
console.log(arr2);	//[1, 2, 3, 4, 5, 20, 30] 

//2.遍历原数组每个元素 对比新数组每个元素 如果新数组里没有原数组当前元素 则添加该元素到新数组里
var arr = [1,2,3,3,4,4,3,3,4,55,5,1,2,1];
var arr2 = [arr[0]];
for (var i = 1; i < arr.length; i++) {
	var a = arr2.every(function(item, index, array) {
		return arr[i] != item;
	}) 
	if (a) {
		arr2.push(arr[i]);
	}	
};
console.log(arr2)	//[1, 2, 3, 4, 55, 5] 

//3.类似于第二种方法 当新数组arr2出现和原数组arr1相同元素时 跳出循环(即不向arr2添加该元素)	效率最低
var arr = [1,2,2,3,3,4,3,2,4,1];
var arr2 = [];
aa : for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr2.length; j++) {
			if ( arr[i] == arr2[j] ) {
				continue aa;
			}
		};
		arr2[arr2.length] = arr[i];	//arr2[arr2.length] == arr2.push(arr[i])
	 };
console.log(arr2);	//[1, 2, 3, 4]

//4.第一次添加到新数组的元素 同样存到对象hash中(相当于给其做了个添加过的标记) 防止重复添加	效率较高
var arr = [4,2,3,4,1,2,3,1];
var arr2 = [], hash = {};

for (var i = 0, elem; (elem = arr[i]) != null; i++ ) {
	if ( !hash[elem] ) {
		arr2.push(arr[i]);
		hash[elem] = true;
	}
}

//冒泡排序
var arr = [1,12,34,4,5,23,6,1000];
var tmp = '';
for (var i = 0; i < arr.length; i++) {
	for (var j = 0; j < arr.length - 1; j++) {
		if (arr[j] > arr[j+1]) {
			tmp = arr[j];
			arr[j] = arr[j+1];
			arr[j+1] = tmp;
		}
	}
};
console.log(arr);
