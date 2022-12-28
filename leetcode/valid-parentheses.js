const isValid = function (s) {
    const stack = [];
    const lengthOfS = s.length;

    stack.push(s[0]);
    for (let i = 1; i < lengthOfS; i++) {
        if (stack[stack.length - 1] === '(' && s[i] === ')') {
            stack.pop();
        } else if (stack[stack.length - 1] === '{' && s[i] === '}') {
            stack.pop();
        } else if (stack[stack.length - 1] === '[' && s[i] === ']') {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }

    return !stack.length;
};

console.log(isValid('()){}'))