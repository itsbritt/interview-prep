var productExceptSelf = function(nums) {
   
    let i = 1;
    const prefix = new Array(nums.length).fill(1);
    while (i < nums.length) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
        i++;
    }

    const postfix = new Array(nums.length).fill(1);
    i = nums.length - 2;

    while (i >= 0) {
        postfix[i] = nums[i + 1] * postfix[i + 1];
        i--;
    }

    return prefix.map((value, index) => value * postfix[index]);

};



console.log(productExceptSelf([1,2,3,4]))