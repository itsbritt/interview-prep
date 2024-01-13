function find_all_well_formed_brackets(n) {
    // Write your code here.
    const output = [];
    
    function helper(s) {
        if (s.length === n * 2) {
            output.push(s);
            return;
        }
    
        
        helper(s + '(');
        helper(s + ')');
    }

    helper('(');
    console.log(output)
    return output.filter((b => isValid(b)));

    
    function isValid(brackets) {
        
        let i = 0;
        const stack = [];
        while (i < brackets.length) {
            if (brackets[i] === '(') {
                stack.push(')');
            } else {
                let right = stack.pop();
                if (!right) {
                    return false;
                }
            }
            i++;
        }
        
        if (stack.length > 0) {
            return false;
        }
        
        return true;
    }
}

console.log(find_all_well_formed_brackets(3));