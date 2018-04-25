/**
 * ##QuickSort - Delete Pivot
 * 
 * This implimentation of QuickSort maintains 
 * 2 sub arrays (left and right) to sort the data.
 * 
 * To avoid using 2 loops, it deletes the pivot. 
 * This reduces the redundant code for 2nd loop.
 * 
 * @param {Array<any>} arr 
 * @returns {Array<any>}
 */
function quickSort(arr) {
	if (arr.length < 2) return arr; // last case. 1 element left

	// find center and use it as pivot
	var center = Math.trunc(arr.length / 2),
		pivot = arr[center],
		left = [],
		right = [];

	delete arr[center]; // remove pivot array

	// fill left and right sub arrays
	arr.forEach(function (x) {
		x < pivot ? left.push(x) : right.push(x);
	});

	left = quickSort(left); // quick sort the left sub array
	right = quickSort(right); // quick sort the right sub array

	return left.concat(pivot).concat(right); // concat left + pivot + right
}
