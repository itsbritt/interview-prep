var minimumSteps = function(s) {
    let total = 0;
    let zeroCount = 0;
    let i = s.length - 1;

    while (i >= 0) {
        if (s[i] === "0") {
            zeroCount++;
        } else {
            total+=zeroCount;
            zeroCount = 0;
        }
        i--;
    }

    return total;
       
};

console.log(minimumSteps("11000111"));