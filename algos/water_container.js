var maxArea = function(height) {
    // area = min(left, right) * (right - left)
    let max = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const h = Math.min(height[left], height[right]);
        const w = right - left;
        max = Math.max(max, w * h);
        
        if (height[left] < height[right]) {
            left++
        } else if (height[left] > height[right]) {
            right--;
        } else {
            left++;
            right--;
        }
    }
    return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));