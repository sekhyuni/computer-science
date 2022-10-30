function solution(s) {
    const lengthOfString = s.length;
    let answer = -1;

    for (let i = 0; i < lengthOfString; i++) {
        if (answer > -1) {
            break;
        }

        for (let j = 0; j <= i; j++) {
            if (s[j] === s[lengthOfString - i + j - 1] && isPalindrome(s.slice(j, lengthOfString - i + j))) {
                answer = lengthOfString - i;
                break;
            }
        }
    }

    return answer;
}

function isPalindrome(s) {
    const legnthOfSubString = s.length;

    for (let i = 1; i < legnthOfSubString; i++) {
        if (s[i] !== s[legnthOfSubString - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(solution('abcdcba'));
console.log(solution('abacde'));
console.log(solution('abacdefdce'));