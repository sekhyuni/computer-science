// 1. 문제 이해
// 1-1. 입력
//      - n: number, 2 <= n <= 10
//      - words: string[], 2 <= n <= words.length <= 100, 2 <= words[i].length <= 50
// 1-2. 출력
//      - listOfLosePersonIndexAndTime: number[], listOfLosePersonIndexAndTime.length === 2
// 1-3. 제약
// 2. 구현 방식
//      - hash table로 중복되는 단어의 index를 찾는다.
//      - 전 index 끝 글자와 현 index 시작 글자를 비교해서 맞는지 판단한다.
//      - 틀린 index가 없으면 [0, 0] 반환
//      - 틀린 index가 있으면 [index + 1 % n, Math.floor(index + 1 / n) + 1] 반환
function solution(n, words) {
  const hashTableOfWords = new Map();

  let loseIdx = -1;
  // Time Complexity: O(n), n === 100
  for (let i = 0; i < words.length; i++) {
    if (hashTableOfWords.has(words[i])) {
      loseIdx = i;
      break;
    } else {
      hashTableOfWords.set(words[i], true);
    }

    if (i > 0) {
      if (words[i - 1][words[i - 1].length - 1] !== words[i][0]) {
        loseIdx = i;
        break;
      }
    }
  }

  if (loseIdx === -1) {
    return [0, 0];
  }

  const existsRest = (loseIdx + 1) % n !== 0;
  const losePersonIndex = (loseIdx + 1) % n || n;
  const loseTime = Math.floor((loseIdx + 1) / n) + (existsRest ? 1 : 0);

  // Total Time Complexity: O(n), n === 100
  // Total Space Complexity: O(n), n === 100
  return [losePersonIndex, loseTime];
}

console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
);
console.log(
  solution(5, [
    "hello",
    "observe",
    "effect",
    "take",
    "either",
    "recognize",
    "encourage",
    "ensure",
    "establish",
    "hang",
    "gather",
    "refer",
    "reference",
    "estimate",
    "executive",
  ])
);
console.log(
  solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
);
