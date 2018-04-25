/**
 * ##QuickSort - Indexed
 * 
 * This is a swap based, no-return version of quicksort
 * that uses index based swapping to sort on original array
 * 
 * @param {Array<any>} arr 
 * @param {number} start 
 * @param {number} end 
 * @returns {void}
 */
function quickSort(arr, start, end) {
	if ((end - start) < 1) return; // edge case, pivot became last element

	// initial condition
	if (start === undefined) {
		start = 0;
		end = arr.length;
	}

	// find center and use it as pivot
	var center = Math.trunc((end + start) / 2),
		pivot = arr[center],
		element, i;

	// loop between mentioned space
	for (i = start; i <= end; i++) {
		element = arr[i];
		// if an abnormality is found, swap pivot with the element
		if ((element < pivot && i > center) || (element > pivot && i < center)) {
			arr[i] = pivot;
			arr[center] = element;
			center = i; // update the location of center
		}
	}

	quickSort(arr, start, center - 1); // sort the left side of center
	quickSort(arr, center + 1, end); // sort the right side of center
}
