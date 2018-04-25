/**
 * ##QuickSort - Skip Pivot
 * 
 * This implimentation of QuickSort maintains 
 * 2 sub arrays (left and right) to sort the data 
 * while skipping the pivot node by running 2 different loops.
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

	// loop from start to center-1
	for (var i = 0; i < center; i++)
		arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);

	// loop from center+1 to end
	for (i = center + 1; i < arr.length; i++)
		arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);

	left = quickSort(left); // quick sort the left sub array
	right = quickSort(right); // quick sort the right sub array

	return left.concat(pivot).concat(right); // concat left + pivot + right
}
