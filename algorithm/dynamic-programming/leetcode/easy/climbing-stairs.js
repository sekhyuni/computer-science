/**
 * @param {number} n
 * @return {number}
 */
// 1. 문제 이해
// 1-1. 입력
//      - n: number, 1 <= n <= 45
// 1-2. 출력
//      - countOfClimbingWay: number
// 1-3. 제약
//      - 한 번에 1칸 또는 2칸을 올라갈 수 있음
// 2. 구현 방식
//      - 어떤 상태를 점화식으로 세울 것인가? -> n
//        - memo[n] = memo[n - 1] + memo[n - 2];
//      - 초기값 할당
//        - memo[1] = 1;
//        - memo[2] = 2;
const climbStairs = function (n) {
  let countOfClimbingWay = 1;
  const memo = Array.from({ length: n + 1 }, (_, idx) => {
    if (idx === 1) {
      return 1;
    } else if (idx === 2) {
      return 2;
    } else {
      return 0;
    }
  });

  if (n === 1 || n === 2) {
    countOfClimbingWay = memo[n];

    return countOfClimbingWay;
  }

  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }

  countOfClimbingWay = memo[n];

  return countOfClimbingWay;
};

console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
