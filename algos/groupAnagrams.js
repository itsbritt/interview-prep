var groupAnagrams = function(strs) {
    const CODE_A = 'a'.charCodeAt();
    const anagramMap = {};
    for (const string of strs) {
        const freqMap = new Int16Array(26);
        for (const char of string) {
            const index = char.charCodeAt() - CODE_A;
            freqMap[index]++;
        }
        const key = JSON.stringify(freqMap);
        if (key in anagramMap) {
            anagramMap[key].push(string);
        } else {
            anagramMap[key] = [string];
        }
    }

    return Object.values(anagramMap);
};

console.log(groupAnagrams(["duh","ill","tan","ate","nat","bat"]))