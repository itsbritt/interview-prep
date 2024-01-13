function generate_palindromic_decompositions(s) {
    const output = [];

    function helper(i, sub) {
        console.log('sub', sub);
        if (i === s.length) {
            if (isPalindrome(sub)) {
                output.push(sub);
            }
            return;
        }

        helper(i + 1, sub + s[i]);
        helper(i + 1, sub + '|' + s[i])
    }

    function isPalindrome(s) {
        let strings = s.split('|');
        if (strings.length === 1) {
            return s === s.split('').reverse().join('');
        }

        let i = 0;
        while (i < strings.length) {
            if (strings[i] !== strings[i].split('').reverse().join()) {
                return false;
            }
            i++;
        }

        return true;
    }

    helper(0, "");

    return output;

}

console.log(generate_palindromic_decompositions("aba"))