/**
 * @param {number[]} arr
 * @return {number}
 */
// 1. 문제 이해
// 1-1. 입력
//      - arr: number[], 3 <= arr.length <= 10^5, 0 <= arr[i] <= 10^6
// 1-2. 출력
//      - peakIndexInMountainArray: number
// 1-3. 제약
//      - Time Complexity는 O(log(arr.length))로 풀어야 함
//      - arr는 mountain 형식임이 보장됨
// 2. 구현 방식
//      - 범위 [0, arr.length - 1]에서 binary search 탐색
//      - arr[mid] > arr[mid + 1] ? end = mid - 1;
//      - arr[mid] <= arr[mid + 1] ? start = mid + 1;
const peakIndexInMountainArray = function (arr) {
  let start = 0;
  let end = arr.length - 1;

  // Time Complexity: O(logn), n === 10^5
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] > arr[mid + 1]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  // Total Time Complexity: O(logn), n === 10^5
  // Total Space Complexity: O(1)
  return start;
};

console.log(peakIndexInMountainArray([0, 1, 0]));
console.log(peakIndexInMountainArray([0, 2, 1, 0]));
console.log(peakIndexInMountainArray([0, 10, 5, 2]));
