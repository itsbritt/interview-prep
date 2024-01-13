/**
 * Move n-1 disks from 
 * @param {S} n 
 */

function tower_of_hanoi(n) {
    const output = [];

    function move(n, src, dst, aux) {
        if (n > 0) {
            move(n - 1, src, aux, dst);
            output.push([src, dst]);
            move(n - 1, aux, dst, src);
        }

    }

    move(n, 1, 3, 2);
    
    return output;
}

// function hanoi(n) {

//     const moves = [];
//     function move(n, src, dst, aux){
//         if (n < 1) {
//             return;
//         } else if (n === 1) {
//             moves.push([src, dst]);
//         } else {
//             move(n - 1, src, aux, dst);

//         }

//     }

//     move(n, 1, 3, 2);
// }

console.log(tower_of_hanoi(3))
