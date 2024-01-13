var threeSum = function(nums) {
    
    nums.sort((a, b) => a - b);
    const output = [];


    
    for (let i = 0; i < nums.length - 2; i++) {
        console.log('i', i, nums)
        if (nums[i] > 0) {
            break;
        }

        if (i === 0 || nums[i] !== nums[i - 1]) {
            
            let j = i + 1;
            let k = nums.length - 1;

            while (j < k) {
                const sum = nums[i] + nums[j] + nums[k];
                if (sum === 0) {
                    output.push([nums[i], nums[j], nums[k]]);
                    j++;
                    while (j < k && nums[j] === nums[j - 1])j++;
                } else if (sum < 0) {
                    j++;
                } else {
                    k--;
                }
            }
        }

    }

    return output;
};

console.log(threeSum([0,0,0]))