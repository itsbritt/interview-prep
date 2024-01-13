var minimumTotal = function(triangle) {
    if (triangle.length === 1) return triangle[0][0];
    let minSum = Number.POSITIVE_INFINITY;
    for (let row = 1; row < triangle.length; row++) {
        for (let col = 0; col <= row; col++) {
            let value = triangle[row][col];
            if (col === 0) {
               triangle[row][col] = value + triangle[row - 1][col]; 
            } else if (col === row) {
                triangle[row][col] = value + triangle[row - 1][col - 1];
            } else {
                triangle[row][col] = Math.min(value + triangle[row - 1][col], value + triangle[row - 1][col - 1]);
            }

            if (row === triangle.length - 1) {
                minSum = Math.min(triangle[row][col], minSum);
            }
        }
    }
    return minSum;
};

console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]));

// console.log(minimumTotal([[-10]]));