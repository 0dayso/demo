define(['a'], function(A) {
	function result() {
		return A.add(3, 3);
	};

	return {
		result : result
	}
})