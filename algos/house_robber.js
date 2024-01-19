var rob = function(nums) {
    let i = 1;
    while (i < nums.length) {
        if (i === 1) {
            nums[i] = Math.max(nums[i], nums[i - 1]);
        } else {
            nums[i] = Math.max(nums[i - 2] + nums[i], nums[i - 1]);
        }
        i++;
    }

    return nums[nums.length - 1];
};

console.log(rob([2,1,1,2,10,100]));