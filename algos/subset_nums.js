/**
 * Given an integer array nums of unique elements, return all possible 
subsets
 (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]
 */

function subsets_recursive(nums) {
    const output = [];
    function helper(i, subset) {
        if (i === nums.length) {
            output.push([...subset]);
            return;
        }
        subset.push(nums[i]);
        helper(i + 1, subset);
        subset.pop();
        helper(i + 1, subset);
    }
    helper(0, []);
    return output;
}

function subsets_iterative(nums) {

    let output = [[]];

    let i = 0;
    while (i < nums.length) {
        let value = nums[i];
        output = [...output, ...output.map(item => item.concat(value))];
        i++;
    }

    return output;
}

// console.log(subsets_recursive([1,2,3]));
console.log(subsets_iterative([1,2,3]));