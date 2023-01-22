/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 1. 문제 이해
// 1-1. 입력 타입
//      - nums: number[]
//      - target: number
// 1-2. 출력 타입
//      - index: number
// 1-3. 입력값 범위
//      - 1 <= nums.length <= 10,000
//      - -10,000 <= nums[i] <= 10,000
//      - -10,000 <= target <= 10,000
// 1-4. 제약 사항
//      - 주어진 nums 배열에서 target값을 가지는 index를 찾아서 반환
//      - 주어진 nums 배열에서 target값을 찾지 못하면 target이 들어가야 할 index를 찾아서 반환 
// 2. 구현 방법
// 2-1. binary search를 사용해서 target값을 가지는 index를 찾아서 반환
// 2-2. binary search를 사용해서 target값을 찾지 못하면 target이 들어가야 할 index를 찾아서 반환
const searchInsert = function (nums, target) {
    const index = binarySearch(nums, target);

    // Total Time Complexity: O(logn)
    return index;
};

const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;

    // 2-1. binary search를 사용해서 target값을 가지는 index를 찾아서 반환
    // Time Complexity: O(logn)
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    // 2-2. binary search를 사용해서 target값을 찾지 못하면 target이 들어가야 할 index를 찾아서 반환
    return start;
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));