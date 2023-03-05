/**
 * @param {number[]} nums
 * @return {number}
 */
// 1. 문제 이해
// 1-1. 입력
//      - nums: number[], n === nums.length, 1 <= n <= 10^4, 0 <= nums[i] <= n
// 1-2. 출력
//      - missingNumber: number
// 1-3. 제약
//      - nums[i]는 각각 유일함
//      - O(n)의 Time Complexity와 O(1)의 Space Complexity로 풀기
// 2. 구현 방식
//      1) Gauss sum
//          - expectedSum = n * (n + 1) / 2;
//          - actualSum = nums.reduce((prev, curr) => prev + curr);
//          - expectedSum - actualSum 반환
//      2) binary search
//          - 범위 [0, n]에서 binary search로 탐색
//          - [0, n - 1] loop를 돌면서, mid보다 작은 nums[i]의 총 count가 몇인지 탐색
//          - count <= mid이면, end = mid - 1;
//          - count > mid이면, start = mid + 1;
//          - start 반환
const missingNumber = function (nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  // Time Complexity: O(n)
  const actualSum = nums.reduce((prev, curr) => prev + curr);

  // Total Time Complexity: O(n)
  // Total Space Complexity: O(1)
  return expectedSum - actualSum;
};

const missingNumberUseBinarySearch = function (nums) {
  let start = 0;
  let end = nums.length;

  // Time Complexity: O(logn)
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    let count = 0;
    // Time Complexity: O(n)
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] <= mid) {
        count++;
      }
    }

    if (count <= mid) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  // Total Time Complexity: O(nlogn)
  // Total Space Complexity: O(1)
  return start;
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
