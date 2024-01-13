function selection_sort(arr) {
    // select the min value from the unsorted portion of array
    // place that value at the first index
    // select the next min value, place it at the next index

    /**
     * Init a pointer starting at index 0 (i)
     * Loop from 0 - n (n is length of array);
     * 
     * On each loop, loop from i to n, recording the min index (index at which the min value is located)
     * 
     * At the end of the loop, swap value at minIndex with value at j
     */

    for (let i = 0; i < arr.length - 1; i++) {
        let j = i + 1;
        let minIndex = i;

        while (j < arr.length) {
            if (arr[j] < arr[i]) {
                minIndex = j;
            }
            j++;
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
     
}

console.log(selection_sort([3, 5, 8, 5, 99, 1]));