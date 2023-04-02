/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
// 1. 문제 해결
// 1-1. 입력 타입
//      - pattern: string
//      - s: string
// 1-2. 출력 타입
//      - isSamePattern: boolean
// 1-3. 입력값 범위
//      - 1 <= pattern.length <= 300
//      - pattern은 오직 소문자
//      - 1 <= s.length <= 3,000
//      - s는 소문자, ' '를 포함
//      - s는 처음 또는 마지막에 공백이 없음
//      - s에 있는 모든 단어들은 공백으로 띄워져 있음
// 2. 구현 방법
//      - 하나의 Map에는 pattern을 key로, word를 value로 넣으면서 같은 패턴인지 확인, 다른 하나의 Map에는 word를 key로 pattern을 value로 넣으면서 같은 패턴인지 확인
const wordPattern = function (pattern, s) {
  const hashTableOfPatternIsKey = new Map();
  const hashTableOfWordIsKey = new Map();
  let isSamePattern = true;

  const listOfWord = s.split(' ');

  if (listOfWord.length === 1) {
    if (pattern.length !== 1) {
      isSamePattern = false;
      return isSamePattern;
    }
  }

  for (let idx = 0, len = listOfWord.length; idx < len; idx++) {
    if (hashTableOfPatternIsKey.has(pattern[idx])) {
      if (hashTableOfPatternIsKey.get(pattern[idx]) !== listOfWord[idx]) {
        isSamePattern = false;
        break;
      }
    } else {
      hashTableOfPatternIsKey.set(pattern[idx], listOfWord[idx]);
    }

    if (hashTableOfWordIsKey.has(listOfWord[idx])) {
      if (hashTableOfWordIsKey.get(listOfWord[idx]) !== pattern[idx]) {
        isSamePattern = false;
        break;
      }
    } else {
      hashTableOfWordIsKey.set(listOfWord[idx], pattern[idx]);
    }
  }

  return isSamePattern;
};

console.log(wordPattern('abba', 'dog dog dog dog'));
console.log(wordPattern('jquery', 'jquery'));
