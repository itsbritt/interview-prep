const arr = new Array(5).fill(null).map((_, i) => i + 1);

arr.reduce((acc, curr) => {
    return curr % 2 === 1 ? [...acc, curr] : [...acc];
},[]);

console.log(arr);