var obj = {};  
  
var Poker = {  
    Title: "K",  
    Style: "spade",  
    Value: 13,  
    State: 1  
};  
  
  
Object.defineProperties(  
Poker,  
{  
    "backgroundImg": {  
        value: "images\\common\\hide.png",  
        enumerable: false, //不可以for 遍历  
        writable: false//只读  
    },  
    "forgroundImg": {  
        value: "images\\spade\\K.png",  
        enumerable: false, //不可以for 遍历  
        writable: false//只读  
    },  
    Img: {  
        get: function() {  
            return this.State == 0 ? this.backgroundImg : this.forgroundImg;  
        },  
        enumerable: true  
  
    }  
}  
);  
  
alert(Poker.Img); //images\\spade\\K.png  
  
for (var key in Poker) {  
    alert(key); //backgroundImg 和  forgroundImg无法被遍历到  
}  
  
alert(Poker.backgroundImg); //依然可以访问  
Poker.backgroundImg = "XXX";  
alert(Poker.backgroundImg); //依然是images\\common\\hide.png  
