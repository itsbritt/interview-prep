var lengthOfLongestSubstring = function(s) {
    
    const cache = new Set();

    let max = 0;

    let left = 0;
    let right = 0;
    while (right < s.length) {
        console.log('cache', cache)
        if (cache.has(s[right])) {
            cache.delete(s[right]);
            left++;
        } else {
            cache.add(s[right]);
            max = Math.max(max, cache.size);
            right++;
        }
    }

    return max;

    
};

console.log(lengthOfLongestSubstring('pwwkew'));