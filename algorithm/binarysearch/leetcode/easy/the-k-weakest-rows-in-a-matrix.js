/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
// 1. 문제 이해
// 1-1. 입력
//      - mat: number[][], 2 <= mat.length, mat[i].length <= 100, mat[i][j] === 0 || mat[i][j] === 1
//      - k: number, 1 <= k <= 100
// 1-2. 출력
//      - listOfKWeakestRowIndices: number[]
// 1-3. 제약
// 2. 구현 방식
//      1) binary search
//        - 각 row별 제일 우측에 있는 값이 1인 column index를 탐색 (binary search)
//        - row index와 column index를 Object 형태로 listOfRowPower에 저장
//        - listOfRowPower를 오름차순 정렬 -> slice(0, k) -> map(rowPower => rowPower.index) 처리한 값 반환
//      2) brute force
//        - row index와 각 row별 1의 합산값을 Object 형태로 listOfRowPower에 저장
//        - listOfRowPower를 오름차순 정렬 -> slice(0, k) -> map(rowPower => rowPower.index) 처리한 값 반환
const kWeakestRows = function (mat, k) {
  const listOfRowPower = [];

  for (let i = 0; i < mat.length; i++) {
    let start = 0;
    let end = mat[i].length - 1;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      if (mat[i][mid] === 1) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    listOfRowPower.push({
      index: i,
      value: start,
    });
  }

  return listOfRowPower
    .sort((a, b) => a.value - b.value)
    .slice(0, k)
    .map((rowPower) => rowPower.index);
};

const kWeakestRowsUseBruteForce = function (mat, k) {
  const listOfRowPower = [];

  for (let i = 0; i < mat.length; i++) {
    listOfRowPower.push({
      index: i,
      value: mat[i].reduce((prev, curr) => prev + curr),
    });
  }

  return listOfRowPower
    .sort((a, b) => a.value - b.value)
    .slice(0, k)
    .map((rowPower) => rowPower.index);
};

console.log(
  kWeakestRows(
    [
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ],
    3
  )
);
console.log(
  kWeakestRows(
    [
      [1, 0, 0, 0],
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
    ],
    2
  )
);
