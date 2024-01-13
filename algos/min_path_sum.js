var minPathSum = function(grid) {

    for(let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (row === 0 && col === 0) continue;
            let fromTop = row === 0 ? Number.POSITIVE_INFINITY : grid[row - 1][col] + grid[row][col];
            let fromLeft = col === 0 ? Number.POSITIVE_INFINITY : grid[row][col - 1] + grid[row][col];
            grid[row][col] = Math.min(fromTop, fromLeft);
        }
    }
    
    return grid[grid.length - 1][grid[0].length - 1];
};
console.log(minPathSum([[1,2,3], [4,5,6]]));