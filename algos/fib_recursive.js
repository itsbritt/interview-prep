/**
 * Time Complexity:
 * Recursive tree will be asymmetric but we know the upper bound will be of height n / 2
 * Meaning upper bound complexity will be O(2^n)
 * 
 * Space Complexity:
 * height of tree on left will be of length n
 * height of tree down right side is length n - 2
 * 
 * upper bound = n
 * lower bound = n / 2
 * 
 * 
 * @param {*} n 
 * @returns 
 */

function fib(n) {
    if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

function memoizedFib(n, b1 = 0, b2 = 1) {
    if (n === 0) {
        return b1;
    }

    return memoizedFib(n - 1, b2, b1 + b2);
}

console.log(memoizedFib(6));

// 0 1, 2, 3, 5