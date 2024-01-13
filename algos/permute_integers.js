
/**
 * Recurse:
 *  add option to slate
 *  update available options
 *  stop when slate.length === arr.length
 * 
 * 
 */
function get_permutations(arr) {
    const result = [];
    function helper(slate, options) {
        if (options.length === 0) {
            return result.push(slate);
        }

        let i = 0;
        while (i < options.length) {
            let copy = options.slice();
            copy.splice(i, 1);
            helper([...slate, options[i]], copy);
            i++;
        }

    }

    helper([], arr);
    return result;
}

console.log(get_permutations([1, 2, 3]))
