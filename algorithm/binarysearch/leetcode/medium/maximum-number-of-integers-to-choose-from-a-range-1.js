// - 범위 [1, n] 배열에서 banned 배열에 없는 요소들의 합이 maxSum을 넘지않는 요소들의 최대 개수 구하기
// - 선택 가능한 요소 배열 만들기
// - 선택 가능한 요소 배열을 순회하면서 sum < maxSum인 최대 index를 반환
/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
const maxCount = function (banned, n, maxSum) {
  // Time Complexity: O(nlogn), n === 10^4
  banned.sort((a, b) => a - b);

  let maxSumOfCanChooseElement = 0;
  let maxCountOfCanChooseElement = 0;

  // Time Complexity: O(nlogn), n === 10^4
  for (let i = 0; i < n; i++) {
    maxSumOfCanChooseElement += i + 1;
    maxCountOfCanChooseElement++;

    let start = 0;
    let end = banned.length - 1;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      if (banned[mid] === i + 1) {
        maxSumOfCanChooseElement -= i + 1;
        maxCountOfCanChooseElement--;
        break;
      } else if (banned[mid] > i + 1) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    if (maxSumOfCanChooseElement > maxSum) {
      return maxCountOfCanChooseElement - 1;
    }
  }

  // Total Time Complexity: O(nlogn), n === 10^4 + O(nlogn), n === 10^4
  // Total Space Complexity: O(1)
  return maxCountOfCanChooseElement;
};

console.log(maxCount([1, 6, 5], 5, 6));
console.log(maxCount([1, 2, 3, 4, 5, 6, 7], 8, 1));
console.log(maxCount([11], 7, 50));
