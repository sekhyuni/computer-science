/**
 * @param {number} n
 * @return {number}
 */
// 1. 문제 이해
// 1-1. 입력
//      - n: number, 0 <= n <= 30
// 1-2. 출력
//      - fibonacciNumber: number
// 1-3. 제약
// 2. 구현 방식
//      - 어떤 상태를 점화식으로 세울 것인가? -> n
//        - memo[n] = memo[n - 1] + memo[n - 2];
//      - 초기값 할당
//        - memo[0] = 0;
//        - memo[1] = 1;
const fib = function (n) {
  let fibonacciNumber = 0;
  const memo = Array.from({ length: n + 1 }, (_, idx) => {
    if (idx === 0) {
      return 0;
    } else if (idx === 1) {
      return 1;
    } else {
      return 0;
    }
  });

  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }

  fibonacciNumber = memo[n];

  return fibonacciNumber;
};

console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
