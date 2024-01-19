var search = function(nums, target) {
    let index = -1;
    function divide(left, right) {
        if (right === left) {
            if (nums[left] === target) {
                index = left;
            }
            return;
        }

        const midPoint = Math.floor((left + right) / 2);

        if (nums[left] <= nums[midPoint]) {
            if (target > nums[midPoint] || target < nums[left]) {
                divide(midPoint + 1, right);
            } else {
                divide(left, midPoint);
            }
        }

        if (nums[midPoint + 1] <= nums[right]) {
            if (target < nums[midPoint + 1] || target > nums[right]) {
                divide(left, midPoint);
            } else {
                divide(midPoint + 1, right);
            }
        }


        
    }

    divide(0, nums.length - 1);
    return index;

};

console.log(search([5,1,3], 1));