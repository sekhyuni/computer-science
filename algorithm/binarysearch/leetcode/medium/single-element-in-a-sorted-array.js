/**
 * @param {number[]} nums
 * @return {number}
 */
// 1. 문제 이해
// 1-1. 입력
//      - nums: number[], 1 <= nums.length <= 10^5, 1 <= nums[i] <= 10^5
// 1-2. 출력
//      - singleElement: number
// 1-3. 제약
//      - Time Complexity: O(logn), Space Complexity: O(1)
// 2. 구현 방식
//      - 예외 처리
//        - if nums.length === 1 ? return nums[0];
//        - else if nums.length !== 1 && nums[0] !== nums[1] ? return nums[0];
//        - else if nums.length !== 1 && nums[nums.length - 2] !== nums[nums.length - 1] ? return nums[nums.length - 1];
//      - 알고리즘 구현
//        - nums 배열의 [1, nums.length - 2] 범위에서 binary search 탐색
//        - if mid % 2 === 0 && nums[mid] === nums[mid + 1] || mid % 2 === 1 && nums[mid - 1] === num[mid] ? start = mid + 1;
//        - else if mid % 2 === 1 && nums[mid] === nums[mid + 1] || mid % 2 === 0 && nums[mid - 1] === nums[mid] ? end = mid - 1;
//        - else return nums[mid];
const singleNonDuplicate = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  } else {
    if (nums[0] !== nums[1]) {
      return nums[0];
    } else if (nums[nums.length - 2] !== nums[nums.length - 1]) {
      return nums[nums.length - 1];
    }
  }

  let start = 1;
  let end = nums.length - 2;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (
      (mid % 2 === 0 && nums[mid] === nums[mid + 1]) ||
      (mid % 2 === 1 && nums[mid - 1] === nums[mid])
    ) {
      start = mid + 1;
    } else if (
      (mid % 2 === 1 && nums[mid] === nums[mid + 1]) ||
      (mid % 2 === 0 && nums[mid - 1] === nums[mid])
    ) {
      end = mid - 1;
    } else {
      return nums[mid];
    }
  }
};

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]));
