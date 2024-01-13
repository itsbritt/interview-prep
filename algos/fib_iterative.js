// 0, 1, 1, 2, 3, 5

function fib(n) {
    const cache = [0, 1];

    let i=2;

    while(i <= n) {
        cache.push(cache[i - 2] + cache[i - 1]);
        i++;
    }
    
    return cache[n];
}

console.log(fib(1));