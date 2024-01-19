var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const A_CODE = 'a'.charCodeAt();
    const freqMap = new Int16Array(26);
    let i = 0;
    while (i < s.length) {
        freqMap[s.charCodeAt(i) - A_CODE]+=1;
        freqMap[t.charCodeAt(i) - A_CODE]-=1;
        i++;
    }

    console.log(freqMap);

    for (const value of freqMap) {
        console.log('value', value)
        if (value !== 0) return false;
    }

    return true;

};

console.log('a'.charCodeAt(), 'b'.charCodeAt());

console.log(isAnagram('anagram', 'nagaram'))