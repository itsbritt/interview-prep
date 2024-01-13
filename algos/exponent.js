/**
 * Naive solution
 */

var myPow = function(x, n) {
    
    if (n === 0) return 1;

    if (n > 0) {
        return x * myPow(x, n - 1);
    } else {
        return (1/x) * myPow((1/x), Math.abs(n) - 1);
    }
};

var myPowOptimized = function(x, n) {
    if (n === 0) return 1;

    if (n === 1) return x;

    if (n > 0) {
        let remainder = n % 2;
        let product = x; // 2
        let i = 2;
        while (i <= n / 2) {
            product*=x;
            i++;
        }
    
        product*=product;
    
        if (remainder === 1) {
            product*=x;
        }
        return product
    } else {

        if (Math.abs(n) === 1) {
            return 1 / x;
        }


        let product = 1 / x;
        let remainder = Math.abs(n) % 2;
        let i = 2;
        while (i <= Math.abs(n) / 2) {
            product*=(1/x);
            i++;
        }

        if (remainder === 0) {
            product*=product;
        }

        if (remainder === 1) {
            product*=(1/x);
        }

        return product;
    }

   
};


function exponent(x, n) {

    function helper(x, n) {
        if (x === 0) return 0;
        if (n === 0) return 1;

        let result = helper(x, Math.floor(n / 2));
        result*=result;

        if (n % 2 === 1) {
            return result * x;
        }

        return result;

    }

    const answer = helper(x, Math.abs(n));
    if (n >= 0) {
        return answer;
    }

    return 1 / answer;

  
    
}

console.log(exponent(2, -3));


// 2 3
/**
 * 2 ^ 4
 * 
 * 2 ^2  * 2 ^ 2
 * 
 * 
 */