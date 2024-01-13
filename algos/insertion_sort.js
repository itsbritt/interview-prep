function insertion_sort(arr) {
    /**
     * You can think of the array as being divided into a sorted and unsorted portion
     * We will be continuously taking the first value from the unsorted portion and inserting it to its correct portion in the sorted portion
     * 
     * We will do this for the entire length of the array
     * 
     * Edge cases: when we are swapping our current value into its correct position in the sorted portion,
     * we will continue swapping until 1) we reach the end of the array  
     */


    for(let i=0; i<arr.length; i++) {
        let j = i;
        let value = arr[i];
        while (j > 0 && arr[j - 1] > arr[j]) {
            [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
            j--;
        }
        arr[j] = value;
    }

    return arr;
}

console.log(insertion_sort([3, 5, 8, 5, 99, 1, -10]))