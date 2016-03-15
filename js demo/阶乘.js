// function jc(n) {
// 	var result = 1;
// 	while (n>1) {
// 		result *= n;
// 		n--;
// 	}
// 	return result;
// }

// function jc(n) {
// 	var r = 1;
// 	for (var i = 2; i <= n; i++) {
// 		r *= i;
// 	};
// 	return r;
// }
// jc(4);

function jc(n, m) {
	if(n < m) {
		var a = n;
		n = m;	
		m = a;
	}

	var result = m;//2 4
	for( var i = result+1; i <= n; i++) {
		result *= i;
	}	
	return result;
}
jc(3,5);//60
jc(5,3);//60
