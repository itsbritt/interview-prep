function bubble_sort(arr) {
    /**
     * For each item in array, examine adjacent values (starting at index 0)
     * If value from left is greater than value from right, swap values
     * Repeat this until we have reached the end of the array
     * At this point, the greatest value in the array will be at index n - 1;
     * 
     * This means that in our next loop, we need to go from 0 to n-2,
     * Each time we reach the end, our sorted portion will grow, meaning we can decrease the upper limit to our inner loop by 1
     */
    for(let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubble_sort([3, 5, 8, 5, 99, 1]));