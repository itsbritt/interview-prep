function brackets(s) {

    /**
     * If value is opening bracket:
     *      push value to stack
     *  else: pop stack
     *      If popped value is not the opposite of current OR stack is empty return false
     * 
     * At the end of traversal: if values still in the stack => return false. otherwise return true
     */

    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    const stack = [];
    for (const bracket of s) {
        if (bracket in bracketMap) {
            let pairedBracket = stack.pop();
            if (!pairedBracket || bracketMap[bracket] !== pairedBracket) {
                return false;
            }
        } else {
            stack.push(bracket);
        }
    }

    if (stack.length > 0) {
        return false;
    }

    return true;
}

console.log(brackets('()[]{}'), true);
console.log(brackets('()[]{{'), false);
console.log(brackets('))[]]{}'), false);