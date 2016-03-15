require.config({
	paths : {
		'jquery' : 'http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min',
		'b' : 'lib/b'
	}
});

require(['jquery', 'a', 'b', 'c'], function($, A, B, C) {
	$('body').css('background', '#ccc');

	console.log(A.add(1, 1));	//2

	console.log(B.result());	//6

	console.log(C.result());	//4
});