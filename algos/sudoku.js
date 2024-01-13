function solve_sudoku_puzzle(board) {
    
    let filled = board;
    
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const column = filled.map(row => row[col]);
            console.log('col', column)
            if (filled[row][col] !== 0) {
                continue;
            } else {
                // space is empty
                let i = 1;
                while (i <= 9) {
                    if (filled[row].indexOf(i) === -1 && column.indexOf(i) === -1) {
                        filled[row][col] = i;
                        break;
                    } else {
                        i++;
                    }
                }
                continue;
            }
           
        }
        
         
    }
    // Write your code here.
    return filled;
}

console.log(solve_sudoku_puzzle([
    [8, 4, 9, 0, 0, 3, 5, 7, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0],
    [7, 0, 0, 0, 9, 0, 0, 8, 3],
    [0, 0, 0, 9, 4, 6, 7, 0, 0],
    [0, 8, 0, 0, 5, 0, 0, 4, 0],
    [0, 0, 6, 8, 7, 2, 0, 0, 0],
    [5, 7, 0, 0, 1, 0, 0, 0, 4],
    [0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 2, 1, 7, 0, 0, 8, 6, 5]
    ]));