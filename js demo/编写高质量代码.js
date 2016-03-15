var man = {
   hands: 2,
   legs: 2,
   heads: 1
};

// 在代码的某个地方
// 一个方法添加给了所有对象
if (typeof Object.prototype.clone === "undefined") {
   Object.prototype.clone = function () {};
}

for (var i in man) {
   if (man.hasOwnProperty(i)) { // 过滤
      console.log(i, ":", man[i]);
   }
}
/* 控制台显示结果
hands : 2
legs : 2
heads : 1
*/
// 2.
// 反面例子:
// for-in loop without checking hasOwnProperty()
for (var i in man) {
   console.log(i, ":", man[i]);
}
/*
控制台显示结果
hands : 2
legs : 2
heads : 1
clone: function()
*/

for (var i in man) {
   if (Object.prototype.hasOwnProperty.call(man, i)) { // 过滤
      console.log(i, ":", man[i]);
   }
}

var a = [1, 4, 5, 3, 9];
var rand = function (a, b) {
	return a - b;
}
a.sort(rand);

var arr = [1, 3, 5];
function rand(a, b) {
  return (a- b) = Math.random() - 0.5;
}
arr.sort(rand());