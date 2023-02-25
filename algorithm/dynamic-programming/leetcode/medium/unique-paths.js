/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 1. 문제 이해
// 1-1. 입력
//      - m: number, 1 <= m <= 100
//      - n: number, 1 <= n <= 100
// 1-2. 출력
//      - countOfUniquePaths: number
// 1-3. 제약
// 2. 구현 방식
//      - 무엇을 메모이제이션 할 것인가?
//          - memo[m][n]
//      - memo[m][n] = memo[m - 1][n] + memo[m][n - 1]
//      - memo[i][1] = 1, memo[1][j] = 1
const uniquePaths = function (m, n) {
  let countOfUniquePaths = 1;
  const memo = Array.from({ length: m + 1 }, () => new Array(n + 1));

  for (let i = 1; i <= m; i++) {
    memo[i][1] = 1;
  }
  for (let j = 1; j <= n; j++) {
    memo[1][j] = 1;
  }
  for (let i = 2; i <= m; i++) {
    for (let j = 2; j <= n; j++) {
      memo[i][j] = memo[i - 1][j] + memo[i][j - 1];
    }
  }

  countOfUniquePaths = memo[m][n];

  return countOfUniquePaths;
};

console.log(uniquePaths(3, 7));
