function test1() {
	return false
}
function test2() {
	return false
}
function go() {
	alert('ok')
}

function doCheck(arr, fn) {
	if (typeof arr != 'object') return; 
	for (var i = 0; i < arr.length; i++) {
		if (!arr[i]) {
			arr[i] = true;
			arguments.callee();
		}
	};
	fn();
}

doCheck([test1(), test2()], go);