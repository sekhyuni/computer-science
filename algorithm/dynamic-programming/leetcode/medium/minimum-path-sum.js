/**
 * @param {number[][]} grid
 * @return {number}
 */
// 1. 문제 이해
// 1-1. 입력
//      - grid: number[][], 0 <= grid[i][j] <= 100
//      - m === grid.length, n === grid[i].length, 1 <= m, n <= 200
// 1-2. 출력
//      - minSumOfPath
// 1-3. 제약
//      - 이동은 아래 또는 오른쪽으로 해야 함
// 2. 구현 방식
//      - 어떤 상태를 점화식으로 세울 것인가? -> i, j까지 가는 길의 최소 합
//          - memo[i][j] = Math.min(memo[i - 1][j], memo[i][j - 1]) + grid[i][j];
//      - 초기값 할당
//          - memo[0][0] = grid[1][1];
//          - memo[i][0] = listOfFirstCol.slice(0, i + 1).reduce((prev, curr) => prev + curr);
//          - memo[0][j] = listOfFirstRow.slice(0, j + 1).reduce((prev, curr) => prev + curr);
const minPathSum = function (grid) {
  let minSumOfPath = grid[0][0];
  const m = grid.length;
  const n = grid[0].length;
  const memo = Array.from({ length: m }, () => new Array(n));

  const listOfFirstCol = [];
  for (let i = 0; i < m; i++) {
    listOfFirstCol.push(grid[i][0]);
  }
  const listOfFirstRow = grid[0];

  for (let i = 0; i < m; i++) {
    memo[i][0] = listOfFirstCol
      .slice(0, i + 1)
      .reduce((prev, curr) => prev + curr);
  }
  for (let j = 0; j < n; j++) {
    memo[0][j] = listOfFirstRow
      .slice(0, j + 1)
      .reduce((prev, curr) => prev + curr);
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      memo[i][j] = Math.min(memo[i - 1][j], memo[i][j - 1]) + grid[i][j];
    }
  }

  minSumOfPath = memo[m - 1][n - 1];

  return minSumOfPath;
};

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);
console.log(
  minPathSum([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
