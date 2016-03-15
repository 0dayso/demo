/*
seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3*/

var nums = {
    'zero' : 1,
    'two' : 2,
    'three' : 3,
    'four' : 4,
    'five' : 5,
    'six' : 6,
    'seven' : 7,
    'eight' : 8,
    'nine' : 9
};


//var seven = function(fnCount) {
//    if (fnCount == 'times') {
//        return parseInt(nums['seven']) * 1;
//    }
//};
//seven('times');


var five = function() {
    var result = /function\s*(\w*)/i.exec(arguments.callee.toString())[1];
    return nums[result];
};


var times = function(five) {

};

var seven = function(times) {
    var fn1 = /function\s*(\w*)/i.exec(arguments.callee.toString())[1];
    var num1 = nums[fn1];
    debugger;
    var fnC = /function\s*(\w*)/i.exec(arguments[0].toString())[1];

    if (fnC == 'times') {
        return num1 * times();
    }
};

seven(times(five()));