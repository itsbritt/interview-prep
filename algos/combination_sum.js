var combinationSum = function(candidates, target) {
    const output = [];
    function helper(sum, nums, index) {
        if (sum === target) {
            return output.push(nums);
        }

        if (sum > target) {
            return;
        }

        for (let i = index; i < candidates.length; i++) {
            let value = candidates[i];
            sum+=value;
            nums.push(candidates[i]);
            helper(sum, [...nums], i);
            sum-=value;
            nums.pop();
        }

    }

    helper(0,[],0);
    return output;
};

console.log(combinationSum([2,3,6,7], 7));