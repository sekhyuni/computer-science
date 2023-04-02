/**
 * @param {number[]} nums
 * @return {number}
 */
// 1. 문제 이해
// 1-1. 입력
//      - nums: number[], 1 <= nums.length <= 5,000, -5,000 <= nums[i] <= 5,000
// 1-2. 출력
//      - minNumber: number
// 1-3. 제약
//      - nums[i]는 유일한 정수임
// 2. 구현 방식
//      1) binary search
//        - nums 배열의 [0, nums.length - 1] 범위에서 binary search 탐색
//        - if nums[start] < nums[end] ? nums[start] 반환
//        - else if nums[mid] > nums[end] ? 오른쪽으로 이동
//        - else if nums[mid] < nums[end] && !(nums[mid] < nums[mid - 1] && nums[mid] < nums[mid + 1]) ? 왼쪽으로 이동
//        - else if nums[mid] < nums[end] && nums[mid] < nums[mid - 1] && nums[mid] < nums[mid + 1] ? nums[mid] 반환
//        - nums[start] 반환
//      2) brute force
//        - nums 배열을 순회하면서 최소값을 찾은 후, 반환
//      3) sort
//        - nums 배열을 오름차순 정렬 후, nums[0] 반환
const findMin = function (nums) {
  let start = 0;
  let end = nums.length - 1;

  // Time Complexity: O(logn), n === 5,000
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[start] < nums[end]) {
      return nums[start];
    } else {
      if (nums[mid] > nums[end]) {
        start = mid + 1;
      } else {
        if (nums[mid] < nums[mid - 1] && nums[mid] < nums[mid + 1]) {
          return nums[mid];
        } else {
          end = mid - 1;
        }
      }
    }
  }

  // Total Time Complexity: O(logn), n === 5,000
  // Total Space Complexity: O(1)
  return nums[start];
};

const findMinUseBruteForce = function (nums) {
  let min = Number.MAX_VALUE;

  // Time Complexity: O(n), n === 5,000
  for (let i = 0; i < nums.length; i++) {
    if (min > nums[i]) {
      min = nums[i];
    }
  }

  // Total Time Complexity: O(n), n === 5,000
  // Total Space Complexity: O(1)
  return min;
};

const findMinUseSort = function (nums) {
  // Time Complexity: O(nlogn), n === 5,000
  nums.sort((a, b) => a - b);

  // Total Time Complexity: O(nlogn), n === 5,000
  // Total Space Complexity: O(1)
  return nums[0];
};

console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
console.log(findMin([11, 13, 15, 17]));
console.log(findMin([3, 1, 2]));
console.log(findMin([1]));
console.log(findMin([5, 1, 2, 3, 4]));
