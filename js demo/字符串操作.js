//substr参数 起始位置和长度
var a = "hello world!";
var b = a.substr(1, 5);
console.log(a);
console.log(b);

//substring 参数 起始位置 结束位置
var c = a.substring(4, 2);
var d = a.substr(4, 2);
console.log(c);
 
 //regular expression
 var str = "testing:1, 2, 3";
 var pattern = /\d+/g;
 //pattern.test(str);
 str.match(pattern);
 str.search(pattern);
 str.replace(pattern,'#');