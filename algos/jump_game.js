/**
 * You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

0 <= j <= nums[i] and
i + j < n
Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [2,3,0,1,4]
Output: 2
 */

function jump(nums) {
    const target = nums.length - 1;
    const minJumps = new Array(nums.length).fill(Number.POSITIVE_INFINITY);
    minJumps[0] = 0;
    let i = 0;
    while (i < nums.length - 1) {
        console.log(minJumps)
        const distance = target - i;
        if (distance <= nums[i]) {
            return minJumps[i] + 1;
        }

        for (let j = 1; j <= nums[i]; j++) {
            minJumps[i+j] = Math.min(minJumps[i+j], minJumps[i] + 1);
        }
        i++;
    }
}

console.log(jump([1,2,1,1,1]));