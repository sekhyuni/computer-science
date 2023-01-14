function solution(strs, t) {
    const dp = Array(t.length + 1).fill(20001);
    const longest = strs.sort((a, b) => b.length - a.length)[0].length;

    dp[0] = 0;

    for (let i = 1; i < dp.length; i++) {
        for (let j = i; j >= Math.max(0, i - longest); j--) {
            const start = j === 0 ? 0 : j - 1;

            if (strs.includes(t.slice(start, i))) {
                dp[i] = Math.min(dp[i], dp[start] + 1);
            }
        }
    }

    return dp.slice(-1)[0] === 20001 ? -1 : dp.slice(-1)[0];
}

console.log(solution(["ba", "na", "n", "a"], 'banana'));
console.log(solution(["app", "ap", "p", "l", "e", "ple", "pp"], 'apple'));
console.log(solution(["ba", "an", "nan", "ban", "n"], 'banana'));
console.log(solution(["ab", "na", "n", "a", "bn"], 'nabnabn'));