/**
 * ##QuickSort - 3 Arrays
 * 
 * This implimentation of QuickSort maintains 
 * 3 sub arrays (left, right and middle) to sort the data.
 * 
 * This increases the space complexity by maintaining an extra array 
 * but is more efficient when using arrays of repetative elements
 * 
 * 
 * @param {Array<any>} arr 
 * @returns {Array<any>}
 */
function quickSort(arr) {
	if (arr.length < 2) return arr; // last case. 1 element left

	// find center and use it as pivot
	var pivot = arr[Math.trunc(arr.length / 2)],
		left = [],
		right = [],
		middle = [];

	// segregate elements as left, middle and right
	arr.forEach(function (x) {
		if (x < pivot) {
			left.push(x);
		} else if (x === pivot) {
			middle.push(x);
		} else {
			right.push(x);
		}
	});

	left = quickSort(left); // quick sort the left sub array
	right = quickSort(right); // quick sort the right sub array

	return left.concat(middle).concat(right); // concat left + middle + right
}
