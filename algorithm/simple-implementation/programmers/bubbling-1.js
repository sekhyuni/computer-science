// 1. 문제 이해
// 1-1. 입력
//      - babbling: string[], 1 <= babbling.length <= 100, 1 <= babbling[i].length <= 15
// 1-2. 출력
//      - countOfWordCanSpeak: number
// 1-3. 제약
//      - bubbling의 각 문자열에서 'aya', 'ye', 'woo', 'ma'가 한 번씩만 등장함
//      - 문자열은 알파벳 소문자로만 이루어져 있음
// 2. 구현 방식
function solution(babbling) {
  let countOfWordCanSpeak = 0;

  // Time Complexity: O(n), n === 100
  for (let i = 0; i < babbling.length; i++) {
    // Time Complexity: O(4 * m), m === 15
    const restWord = babbling[i]
      .replace('aya', '-')
      .replace('ye', '-')
      .replace('woo', '-')
      .replace('ma', '-');

    // Time Complexity: O(m), m === 15
    for (let j = 0; j < restWord.length; j++) {
      if (restWord[j] !== '-') {
        break;
      }

      if (j === restWord.length - 1) {
        countOfWordCanSpeak++;
      }
    }
  }

  // Total Time Complexity: O(n * 5 * m), n === 100, m === 15
  // Space Time Complexity: O(1)
  return countOfWordCanSpeak;
}

console.log(solution(['aya', 'yee', 'u', 'maa', 'wyeoo']));
console.log(solution(['ayaye', 'uuuma', 'ye', 'yemawoo', 'ayaa']));
