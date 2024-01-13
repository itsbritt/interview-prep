function find_combinations(n, k) {
   
    const results = [];
  
    function helper(integer, set) {
        if (set.length === k) {
            results.push([...set]);
            return;
        }
        if (integer > n || k - set.length < k - integer) return;
        set.push(integer);
        helper(integer + 1, set);
        set.pop();
        helper(integer + 1, set);
    }
    helper(1, []);

    return results;
 }

 function combo(n, k) {
    const output = [];
    
    function recurse(slate, i) {
        if (slate.length === k) {
            return output.push([...slate]);
        }
        
        if (i > n) return;
        
        slate.push(i);
        recurse(slate, i + 1);
        slate.pop();
        recurse(slate, i + 1);
    }
    
    recurse([], 1);
    
    return output;
 }

 console.log(combo(5, 2));