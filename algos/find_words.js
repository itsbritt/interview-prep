/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    
    const output = new Set([]);
    const cache = new Set([]);

    const adjMap = {};

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            const coordinateKey = JSON.stringify([row, col]);
            const siblings = [];
            // left
            if (col > 0) {
                siblings.push([row, col - 1]);
            }
            // right
            if (col < board[row].length - 1) {
                siblings.push([row, col + 1]);
            }
            // top
            if (row > 0) {
                siblings.push([row - 1, col]);
            }
            // bottom
            if (row < board.length - 1) {
                siblings.push([row + 1, col]);
            }

            adjMap[coordinateKey] = siblings;
        }
    }

    const allMapKeys = Object.keys(adjMap);
    const allMapCoordinates = allMapKeys.map(key => JSON.parse(key));
    for (const word of words) {
        if (cache.has(word)) {
            output.add(word);
            break;
        }
        const siblings = [...allMapCoordinates];
        const map = {...adjMap};
        helper(word, 0, siblings, map, "");
  
    }

    function helper(word, i, siblings, map, str) {
        cache.add(str);
        
        if (str === word) {
            output.add(word);
            return;
        }

        for (const sibling of siblings) {
            const [row, col] = sibling;
            const mapKey = JSON.stringify(sibling);
            if (map[mapKey] !== 0 && board[row][col] === word[i]) {
                helper(word, i + 1, map[mapKey], {...map, [mapKey]: 0}, str + board[row][col]);
            }
        }
        return;
    }

   return [...output];
};

console.log(findWords([["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], ["eat", "oath", "tae"]));
console.log(findWords([["a","b","c"],["a","e","d"],["a","f","g"]], ["eaafgdcba","eaabcdgfa"]));
// console.log(findWords([["a"],["b"],["c"]], ["bc", "cba", "bca"]));
// console.log(findWords([["b"],["a"],["b"],["b"],["a"]], ["abb", "aba"]));