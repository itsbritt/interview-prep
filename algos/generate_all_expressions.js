function generate_all_expressions(s, target) {
    
    
    const output = [];
    
    function helper(result, string, i) {
        console.log('string', string);
        console.log('result', result);
        if (i === s.length) {
            output.push(string);
            
            return;
        }
        
        let int = parseInt(s[i]);
        helper(result + int, string + '+' + s[i], i + 1);
        helper(result * int, string + '*' + s[i], i + 1);
        helper(parseInt(string + s[i]), string + s[i], i + 1);
    }
    
    helper(parseInt(s[0]), s[0], 1);
    
    return output;

}

console.log(generate_all_expressions("202", 4));