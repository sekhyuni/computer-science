/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
// 1. 문제 이해
// 1-1. 입력
//      - n: number, 1 <= n <= 2^31 - 1
// 1-2. 출력
//      - pickedNumber: number
// 1-3. 제약
//      - 1 <= pick <= n
// 2. 구현 방식
//      - 범위 [1, n]에서 binary search로 탐색
//      - guess(mid) === 0 ? return mid;
//      - guess(mid) === -1 ? end = mid - 1;
//      - guess(mid) === 1 ? start = mid + 1;
//      - return start;
const guessNumber = function (n) {
  let start = 1;
  let end = n;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (guess(mid) === 0) {
      return mid;
    } else if (guess(mid) === -1) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return start;
};

console.log(guessNumber(10));
console.log(guessNumber(1));
console.log(guessNumber(2));
