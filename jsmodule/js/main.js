require.config({
	paths : {
		'jquery' : 'jquery',
		'b' : 'b'
	}
});

require(['jquery', 'a', 'b', 'c'], function($, A, B, C) {
	$('body').css('background', '#ccc');

	console.log(A.add(1, 1));	//2

	console.log(B.result());	//6

	console.log(C.result());	//4
});