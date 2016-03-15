// var book = {
// 	"name" : "javascript",
// 	"author" : ["liu", "wei"],
// 	"num" : 1000,
// 	"year" : "2015"
// }
// var a = JSON.stringify(book,["name", "price"]);
// console.log(a);
// var b = JSON.stringify(book);
// console.log(b);
// var c = JSON.parse(b);
// console.log(c);

//通过函数筛选修改待序列化数据对象
// var jsonText = JSON.stringify(book, function(key, value) {
// 	switch(key) {
// 		case "author" :
// 			return value.join(',');
// 		case "year" :
// 			return 2014;
// 		case "num" :
// 			return undefined;
// 		default :
// 			return value;
// 	}
// });

// console.log(jsonText);

//字符串缩进 stringify第三个参数 数字代表缩进的空格数 （4个空格）
// var jsonText2 = JSON.stringify(book, null, 4);
// console.log(jsonText2);

//JSON.stringify()第三个参数如果是字符串 则以此字符串为缩进符
// var jsonText3 = JSON.stringify(book, null, "--");
// console.log(jsonText3);


//对象 toJSON方法在序列化时可以正常工作  可以作为函数过滤器的补充
// var book = {
//     "title": "Professional JavaScript",
//     "authors": ["Nicholas C. Zakas"],
//     edition: 3,
//     year: 2011,
//     toJSON: function () {
//         return this.title;
//     }
// };
// var jsonText = JSON.stringify(book);
// console.log(jsonText);		//"Professional JavaScript" 

/*
序列化内部顺序 1.先toJSON()返回值 2.过滤函数 3.相应格式化

如果存在toJSON()方法而且能通过它取得有效的值，则调用该方法。否则，按默认顺序执行序列化。
如果提供了第二个参数，应用这个函数过滤器。传入函数过滤器的值是第(1)步返回的值。
对第(2)步返回的每个值进行相应的序列化。
如果提供了第三个参数，执行相应的格式化。

*/


// JSON解析 JSON.parse() 接收两个参数为函数 
var book = {
    "title": "Professional JavaScript",
    "authors": ["Nicholas C. Zakas"],
    edition: 3,
    year: 2011,
    releaseDate: new Date(2015, 11, 1)
};
var jsonText = JSON.stringify(book);

var bookCopy = JSON.parse(jsonText, function(key, value){
	if (key == "releaseDate") {
		return new Date(value)
	} else {
		return value
	}
});

console.log(bookCopy.releaseDate.getFullYear());



