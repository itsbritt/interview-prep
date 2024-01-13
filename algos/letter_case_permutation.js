function permute(s) {

    const output = [];
    function helper(slate, options, n) {

        if (options.length === 0) {
            return output.push(slate);
        }

        function isNumber(value) {
            return !isNaN(parseInt(value));
        }

        if (isNumber(s.charAt(n))) {
            helper(slate + s.charAt(n), options.slice(1), n + 1);
        } else {
            let char = s[n];
            helper(slate + char.toUpperCase(), options.slice(1), n + 1);
            helper(slate + char.toLowerCase(), options.slice(1), n + 1);
        }
    }

    helper("", s, 0);
    return output;

}

console.log(permute("a1z"));