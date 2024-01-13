// var climbStairs = function(n) {
//     if (n <= 3) {
//         return n;
//     }

//     const count = new Array(n).fill(0);
//     count[0] = 1;
//     count[1] = 2;

//     let i = 2;
//     while (i < n) {
//         count[i] = count[i - 2] + count[i - 1];
//         i++;
//     }

//     return count[n - 1];

// };

function climbStairs(n) {

    if (n <= 3) {
        return n;
    }

    let count = [2, 3];

    let i = 3;
    while (i < n) {
        count = [count[1], count[0] + count[1]];
        i++;
    }

    return count[1];


}



console.log(climbStairs(5));