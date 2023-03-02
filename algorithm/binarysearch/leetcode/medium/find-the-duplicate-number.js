/**
 * @param {number[]} nums
 * @return {number}
 */
// 1. 문제 이해
// 1-1. 입력
//      - nums: number[], nums.length === n + 1, 1 <= nums[i] <= 10^5
// 1-2. 출력
//      - repeatedNumber: number
// 1-3. 제약
//      - 하나의 정수만 두 번 나타남
//      - nums 배열을 변경할 수 없음
//      - 상수 공간만 사용해야 함
// 2. 구현 방식
//      1) binary search
//          - [1, n - 1] 범위만큼 binary search로 탐색
//          - nums 길이만큼 loop 돌리면서, nums[i]가 mid보다 작으면 count++;
//          - count > mid ? end = mid - 1 : start = mid + 1;
//          - start를 반환
//      2) hash table
//          - nums[i]를 key, 나타난 횟수를 value로 하는 hash table 생성
//          - nums 길이만큼 loop 돌리면서, 2번 나타난 nums[i]를 반환
const findDuplicate = function (nums) {
  let start = 1;
  let end = nums.length - 1;

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

    if (count > mid) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  // Time Complexity: O(nlogn)
  // Space Complexity: O(k)
  return start;
};

const findDuplicateUseHashTable = function (nums) {
  const hashTableOfNums = new Map();

  // Time Complexity: O(n)
  // Space Complexity: O(n)
  for (let i = 0; i < nums.length; i++) {
    if (hashTableOfNums.has(nums[i])) {
      return nums[i];
    } else {
      hashTableOfNums.set(nums[i], 1);
    }
  }
};
