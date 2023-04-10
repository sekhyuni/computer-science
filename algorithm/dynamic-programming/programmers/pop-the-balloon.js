// 1. dynamic programming
//  - 배열 a의 길이만큼 loop를 돌면서, leftMinMemo[i]와 rightMinMemo[i]를 구하고, a[i]와 비교한다.
//  - leftMinMemo[i] = Math.min(leftMinMemo[i - 1], a[i]), rightMinMemo[i] = Math.min(rightMinMemo[i - 1], a[a.length - i - 1])
//  - a[i] > leftMinMemo[i] && a[i] > rightMinMemo[a.length - i - 1]이면, 제외한다.
//  - a[0]와 a[a.length - 1]은 무조건 남을 수 있음
// 2. brute force
//  - 좌측끝부터 i - 1까지 최소값을 찾는다.
//  - 우측끝부터 i + 1까지 최소값을 찾는다.
//  - a[i]과 leftMin 비교, a[i]과 rightMin을 비교한다.
//  - a[i] > leftMin && a[i] > rightMin이면, 제외한다.
//  - a[0]와 a[a.length - 1]은 무조건 남을 수 있음
// [입력]
// - a: number[], 1 <= a.length <= 10^6, -10^9 <= a[i] <= 10^9
// [출력]
// - lengthOfListOfCanRestBalloon: number
function solution(a) {
  let countOfCannotRestBalloon = 0;

  const leftMinMemo = [a[0]];
  const rightMinMemo = [a[a.length - 1]];

  // Time Complexity: O(n), n === 10^6
  for (let i = 1; i < a.length - 1; i++) {
    leftMinMemo[i] = Math.min(leftMinMemo[i - 1], a[i]);
  }

  // Time Complexity: O(n), n === 10^6
  for (let i = 1; i < a.length - 1; i++) {
    rightMinMemo[i] = Math.min(rightMinMemo[i - 1], a[a.length - i - 1]);
  }

  // Time Complexity: O(n), n === 10^6
  for (let i = 1; i < a.length - 1; i++) {
    if (a[i] > leftMinMemo[i] && a[i] > rightMinMemo[a.length - i - 1]) {
      countOfCannotRestBalloon++;
    }
  }

  // Total Time Complexity: O(3 * n), n === 10^6
  // Total Space Complexity: O(2 * n), n === 10^6
  return a.length - countOfCannotRestBalloon;
}

function solutionUseBruteForce(a) {
  let countOfCannotRestBalloon = 0;

  // Time Complexity: O(n), n === 10^6
  for (let i = 1; i < a.length - 1; i++) {
    // Time Complexity: O(k^2), k === i
    const leftMin = Math.min(...a.slice(0, i));
    // Time Complexity: O((a.length - k - 1)^2), k === i
    const rightMin = Math.min(...a.slice(i + 1, a.length));

    if (a[i] > leftMin && a[i] > rightMin) {
      countOfCannotRestBalloon++;
    }
  }

  // Total Time Complexity: O(n * (k^2 + (a.length - k - 1)^2)), n === 10^6, k === i
  // Total Space Complexity: O(1)
  return a.length - countOfCannotRestBalloon;
}

console.log(solution([9, -1, -5]));
console.log(solution([-16, 27, 65, -2, 58, -92, -71, -68, -61, -33]));

console.log(solutionUseBruteForce([9, -1, -5]));
console.log(
  solutionUseBruteForce([-16, 27, 65, -2, 58, -92, -71, -68, -61, -33])
);
