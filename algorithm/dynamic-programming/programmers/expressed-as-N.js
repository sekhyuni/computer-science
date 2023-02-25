// 1. 문제 이해
// 1-1. 입력
//      - N: number, 1 <= N <= 9
//      - number: number, 1 <= number <= 32,000
// 1-2. 출력
//      - minCountOfUsingN: number
// 1-3. 제약
//      - 수식에는 괄호와 사칙연산만 가능, 나누기 연산에서 나머지는 무시
//      - if (minCountOfUsingN > 8) return -1;
// 2. 구현 방식
//      - 무엇을 메모이제이션할 것인가?
//          - memo[countOfUsingN]
//      - 5를 한 번 썼을 때: 5
//      - 5를 두 번 썼을 때, 55=55, 5+5=10, 5-5=0, 5*5=25, 5/5=1
//      - 5를 세 번 썼을 때, 555=555, 55+5=60, 55-5=50, 55*5=275, 55/5=11, 5+55=60, 5-55=-50, 5*55=275, 5/55=0, ...
function solution(N, number) {
  let minCountOfUsingN = -1;
  const memo = Array.from({ length: 9 }, () => new Set());

  for (let i = 1; i < 9; i++) {
    memo[i].add("1".repeat(i) * N);

    for (let j = 1; j < i; j++) {
      for (const operand1 of memo[j]) {
        for (const operand2 of memo[i - j]) {
          memo[i].add(operand1 + operand2);
          memo[i].add(operand1 - operand2);
          memo[i].add(operand1 * operand2);
          memo[i].add(Math.floor(operand1 / operand2));
        }
      }
    }

    if (memo[i].has(number)) {
      minCountOfUsingN = i;
      break;
    }
  }

  return minCountOfUsingN;
}

console.log(solution(5, 12));
console.log(solution(2, 11));
