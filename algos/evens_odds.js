function segregate_evens_and_odds(numbers) {
    
    let left = 0;
    let right = numbers.length - 1;
    
    while (left < right) {
        while (numbers[left] % 2 === 0) {
            left++;
        }

        while (numbers[right] % 2 === 1) {
            right--;
        }
        
        if (left < right && numbers[left] % 2 === 1 && numbers[right] % 2 === 0) {
            [numbers[left], numbers[right]] = [numbers[right], numbers[left]];
        } 

        left++;
        right--;

    }
    // Write your code here.
    return numbers;
}

console.log(segregate_evens_and_odds([3,5]));