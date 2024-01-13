// var twoSum = function(nums, target) {
//     const cache = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         let diff = target - nums[i];
//         if (cache.has(JSON.stringify(diff))) {
//             return [cache.get(JSON.stringify(diff)), i];
//         }
//         cache.set(JSON.stringify(nums[i]), i);
//     }

// };

var twoSum = function(nums, target) {
    const cache = new Set();

    for (const num of nums) {
        const diff = target - num;
        if (cache.has(diff)) {
            return [diff, num];
        }
        cache.add(num);
    }
    // for (let i = 0; i < nums.length; i++) {
    //     let diff = target - nums[i];
    //     if (cache.has(JSON.stringify(diff))) {
    //         return [cache.get(JSON.stringify(diff)), i];
    //     }
    //     cache.set(JSON.stringify(nums[i]), i);
    // }

};

console.log(twoSum([2,7,11,15], 9))