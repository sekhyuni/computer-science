/**
 * @param {number[]} nums
 * @return {number}
 */
// 1. 문제 이해
// 1-1. 입력
//      - nums: number[], 1 <= nums.length <= 1000, -2^31 <= nums[i] <= 2^31 - 1, nums[i] != nums[i + 1]
// 1-2. 출력
//      - indexOfPeakElement: number
// 1-3. 제약
//      - O(logn)으로 짜야함
//      - nums[-1]이나 nums[n]은 -무한대라고 보면 됨
//      - peak element가 여러 개면, 그 중에 하나를 선택해서 index를 반환
// 2. 구현 방식
//      - 범위 [0, nums.length - 1]에서 binary search로 탐색하여 nums[mid]가 nums[mid + 1]보다 큰 지 확인
//      - 크면 시작점쪽으로 가고, 작으면 끝쪽으로 감
const findPeakElement = function (nums) {
  if (nums.length === 1) {
    return 0;
  } else {
    if (nums[nums.length - 1] > nums[nums.length - 2]) {
      return nums.length - 1;
    }
  }

  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] > nums[mid + 1]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return start;
};
