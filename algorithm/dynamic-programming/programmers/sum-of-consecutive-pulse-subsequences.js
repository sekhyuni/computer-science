// 1. 문제 이해
// 1-1. 입력
//      - sequence: number[], 1 <= sequence.length <= 500,000, -100,000 <= sequence[i] <= 100,000
// 1-2. 출력
//      - maxSumOfConsecutivePulseSubsequence: number
// 1-3. 제약
// 2. 구현 방식
//      - 시작이 sequence[0], -sequence[0]인 sequence 배열을 각각 생성
//      - sequence 길이만큼 loop를 돌면서, 각 pulse 패턴별 최대값을 memo
//      - i가 짝수 일 때, memo[0][i] = Math.max(memo[0][i - 1] + sequence[i], sequence[i])
//      - i가 홀수 일 때, memo[0][i] = Math.max(memo[0][i - 1] - sequence[i], -sequence[i])
//      - i가 짝수 일 때, memo[1][i] = Math.max(memo[0][i - 1] - sequence[i], -sequence[i])
//      - i가 홀수 일 때, memo[1][i] = Math.max(memo[0][i - 1] + sequence[i], sequence[i])
function solution(sequence) {
  if (sequence.length === 1) {
    return Math.max(sequence[0], -sequence[0]);
  }

  let maxSumOfConsecutivePulseSubsequence = 0;

  const memoOfMaxSum = Array.from({ length: 2 }, (_, idxOfPattern) =>
    Array.from({ length: sequence.length }, (_, idxOfSequence) => {
      if (idxOfSequence === 0) {
        return idxOfPattern === 0 ? sequence[0] : -sequence[0];
      }
    })
  );

  for (let i = 1; i < sequence.length; i++) {
    if (i % 2 === 0) {
      memoOfMaxSum[0][i] = Math.max(
        memoOfMaxSum[0][i - 1] + sequence[i],
        sequence[i]
      );
      memoOfMaxSum[1][i] = Math.max(
        memoOfMaxSum[1][i - 1] - sequence[i],
        -sequence[i]
      );
    } else {
      memoOfMaxSum[0][i] = Math.max(
        memoOfMaxSum[0][i - 1] - sequence[i],
        -sequence[i]
      );
      memoOfMaxSum[1][i] = Math.max(
        memoOfMaxSum[1][i - 1] + sequence[i],
        sequence[i]
      );
    }

    maxSumOfConsecutivePulseSubsequence = Math.max(
      maxSumOfConsecutivePulseSubsequence,
      memoOfMaxSum[0][i],
      memoOfMaxSum[1][i]
    );
  }

  return maxSumOfConsecutivePulseSubsequence;
}

console.log(solution([2, 3, -6, 1, 3, -1, 2, 4]));
console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, -7, -3, -99, 5]));
