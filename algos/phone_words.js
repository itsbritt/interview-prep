function words_from_phone(digits) {
    const output = [];

    const charMap = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    };


    function helper(i, slate) {
        if (i === digits.length) {
            return output.push(slate);
        }

        let digit = digits[i];

        if (digit === "0" || digit === "1") {
            helper(i + 1, slate);
        } else {
            let options = charMap[digit];
            for (const char of options) {
                helper(i + 1, slate + char);
            }
        }
    }

    helper(0, "");
    return output;

}

console.log(words_from_phone("1234567"))