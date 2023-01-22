/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 1. 문제 이해
// 1-1. 입력 타입
//     - nums: number[]
//     - val: number
// 1-2. 출력 타입
//     - nums: number[]
// 1-3. 입력 범위
//      - 0 <= nums.length <= 100
//      - 0 <= nums[i] <= 50
//      - 0 <= val <= 100
// 1-4. 출력 범위
//      - 0 <= nums.length <= 100
// 1-5. 제약 사항
//      - nums의 요소들 중 val이 아닌 요소만 남긴다.
// 2. 구현 방식
// 2-1. nums.length만큼 loop를 돌면서 val인 요소만 제거한다.
const removeElement = function (nums, val) {
    // 시간 복잡도: O(n)
    for (let i = 0, len = nums.length; i < len; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
};

removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);