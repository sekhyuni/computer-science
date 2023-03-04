/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 1. 문제 이해
// 1-1. 입력
//      - nums: number[], 0 <= nums.length <= 10^5, -10^9 <= nums[i] <= 10^9, -10^9 <= target <= 10^9
// 1-2. 출력
//      - listOfStartAndEndIndices: number[]
// 1-3. 제약
//      - nums는 오름차순 정렬된 배열임
//      - target을 못찾으면 [-1, -1]을 반환함
// 2. 구현 방식
//      - 범위 [0, nums.length - 1]에서 binary search를 통해 nums[mid]가 target이고 좌측은 target이 아닌 index 찾기
//      - 범위 [0, nums.length - 1]에서 binary search를 통해 nums[mid]가 target이고 우측은 target이 아닌 index 찾기
const searchRange = function (nums, target) {
  if (nums.length === 0) {
    return [-1, -1];
  } else {
    if (nums.length === 1) {
      if (nums[0] === target) {
        return [0, 0];
      } else {
        return [-1, -1];
      }
    }
  }

  const listOfStartAndEndIndices = [];

  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] === target && nums[mid - 1] !== target) {
      listOfStartAndEndIndices.push(mid);
      break;
    } else {
      if (nums[mid] >= target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }

  if (listOfStartAndEndIndices.length === 0) {
    return [-1, -1];
  }

  start = 0;
  end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] === target && nums[mid + 1] !== target) {
      listOfStartAndEndIndices.push(mid);
      break;
    } else {
      if (nums[mid] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }

  return listOfStartAndEndIndices;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([], 0));
