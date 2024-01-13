
/**
 * @param {str} s
 * @return {list_str}
 */
// function generate_all_subsets(s) {
//     // Write your code here.
//     const output = [""];
    
//     // at each CURRENT character at n:
//     // loop thru previous chars from 0 to n
//     //   add charAt(n) + current
    
//     function traverse(n, end, current) {
//         if (n === end) {
//             return;
//         }
        
//         output.push(output[n] + current);
        
//         traverse(n + 1, end, current);
//     }
    
//     let i=0;
//     while (i < s.length) {
//         traverse(0, output.length, s.charAt(i));
//         i++;
//     }

//     return output;
// }

function generate_all_subsets(s) {
    // Write your code here.
    
    if (s.length < 1) {
        return [""];
    }
    
    const output = [];
    
    function build(n, subset) {
        console.log('subset', subset)
        if (n === s.length) {
            return output.push(subset);
        }
    
        subset+=s.charAt(n);
        build(n + 1, subset); // x
        subset = subset.substring(0, subset.length - 1);
        build(n + 1, subset); // ""
        
    }
    
    build(0, "");
    return output;
    
}

console.log(generate_all_subsets("xy"));