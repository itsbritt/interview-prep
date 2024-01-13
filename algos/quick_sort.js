/**
 * Idea is to select a pivot
 * Move smaller values left of pivot
 * Move larger values right of pivot
 * Each time we do this, we are left with two sorted portions of the array
 * As long as we are choosing the middle index or a random index as the pivot, we can avoid the quadratic worst case scenario of sorting an already sorted list
 * 
 * The bulk of work will be done in our Hoare's partition function, 
 * which will use two pointers at each end of the subarray we are sorting
 * Pointers will move inward, looking for itemFrom right and itemFromLeft
 * ItemFromRight = less than or equal to pivot
 * ItemFromLeft = greater than or equal to pivot
 * When we find these values...as long as left pointer is not greater than right pointer, swap the values
 * 
 * Recursion tree has a height of logn (it will always be if we select the midpoint as the pivot)
 * At each level of the tree we scan thru n values
 * --> T: O(nlogn)
 * --> S: O(1)
 */

function quickSort(arr, left = 0, right = arr.length - 1) {

    if (arr.length > 1) {
        const pivotIndex = partition(arr, left, right);

        if (left < pivotIndex - 1) {
            quickSort(arr, left, pivotIndex - 1);
        }

        if (right > pivotIndex) {
            quickSort(arr, pivotIndex, right);
        }

    }
    
    return arr; 

    function partition(arr, left, right) {
        const pivot = arr[left + Math.floor((right - left) / 2)]; // midpoint
        
        while (left <= right) {
            while(arr[left] < pivot) left++;
            while(arr[right] > pivot) right--;

            if (left <= right) {
                [arr[left], arr[right]] = [arr[right], arr[left]];
                left++;
                right--
            }
        }
        
        return left;
    }

}

console.log(quickSort([1, 2, 1, 3, 5]))



