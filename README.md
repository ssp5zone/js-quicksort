 # QuickSorts in JavaScript
 
 Various [QuickSort](https://en.wikipedia.org/wiki/Quicksort) implimentations in pure javascript.
 
 ## Details
 
 The above files use different approaches to perform a Quick sort.
 
 ### 1. QuickSort - Skip Pivot
 
This implimentation of QuickSort maintains 2 sub arrays (left and right) to sort the data while skipping the pivot node by running 2 different loops.
 
 ### 2. QuickSort - Delete Pivot
 
This implimentation of QuickSort maintains 2 sub arrays (left and right) to sort the data. To avoid using 2 loops, it deletes the pivot. This reduces the redundant code for 2nd loop. The `delete` operation in an Array is not be available for many other languages.
 
 ### 3. QuickSort - 3 Arrays
 
This implimentation of QuickSort maintains 3 sub arrays (left, right and middle) to sort the data. This increases the space complexity by maintaining an extra array but is more efficient when using arrays of repetative elements.

 ### 4. QuickSort - Indexed
 
This no-return version of quicksort that uses index based swapping to sort on original array. All the operations are performed in the original input array here. 

 ## Usage
 
 When using _quicksort-skip-pivot.js_, _quicksort-delete-pivot.js_ or _quicksort-3-arrays.js_
 ```javascript
  var sortedArray = quickSort(unsortedArray); 
 ```
 
 When using _quicksort-indexed.js_, the input array would be modified
 ```javascript
  quickSort(unsortedArray); 
 ```
 
## Licence
Licenced under GNU GENERAL PUBLIC LICENSE v3.0. It is free to copy, use and distribute.
