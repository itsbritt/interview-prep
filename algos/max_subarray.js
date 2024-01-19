function subarray_worst(nums) {
    let max = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j<nums.length; j++) {
            let sum = 0;
            for (let k = j; k < nums.length; k++) {
                sum+=nums[k];
                max = Math.max(sum, max);
            }   
        }
    }
    return max;
}

function subarray_better(nums) {
    let max = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < nums.length - 1; i++) {
        let sum = 0;
        sum+=nums[i];
        for (let j = i + 1; j<nums.length; j++) {
            sum+=nums[j];
            max = Math.max(sum, max);
        }
    }

    return max;

}

function subarray_best(nums) {
    if (nums.length === 1) return nums[0];
    let max = nums[0];
    let sum = max;
    let i = 1;
    while (i < nums.length) {
        if (sum < 0) {
            sum = nums[i];
        } else {
            sum+=nums[i];
        }
        max = Math.max(sum, max);
        i++;
    }

    return max;
    


}

console.log(subarray_best([-2,1,-3,4,-1,2,1,-5,4]))