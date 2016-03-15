var quickSort = function(arr) {		//pivot->中心点
	var al = arr.length;
	if (al <= 1) return arr;
	var pivotIndex = Math.floor(al / 2);
	var pivot = arr[pivotIndex];
	var left = [], right = [];	
	for (var i = 0; i < al; i++) {
		if (i == pivotIndex) continue;
		if (arr[i] < pivot) {
			left.push(arr[i])
		} else {
			right.push(arr[i])
		}
	};
	return quickSort(left).concat([pivot],quickSort(right));
};
var arr = [2,4,3,4,6,3,2,5,6,2,3,6,5,4];
quickSort(arr);