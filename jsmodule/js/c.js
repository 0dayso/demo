define(['a'], function(A) {
	function result() {
		return A.add(2, 2);
		// alert('c')
	};

	return {
		result : result
	}
})