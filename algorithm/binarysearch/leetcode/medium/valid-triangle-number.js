/**
 * @param {number[]} nums
 * @return {number}
 */
// 1. brute force
//  - 3중 loop를 돌면서 각 변의 길이 a, b, c 값이 a + b > c, b + c > a, c + a > b를 만족하는지 확인
// 2. binary search
//  - nums를 오름차순 정렬
//  - 2중 loop를 돌면서 각 변의 길이 a, b 값을 고르고, a, b, c 값이 a + b > c를 만족하는 c를 binary search로 탐색 (nums를 오름차순 정렬했으므로 나머지 조건은 이미 만족한 상태)
const triangleNumber = function (nums) {
  let countOfCanTriangle = 0;

  // Time Complexity: O(nlogn), n === 10^3
  nums.sort((a, b) => a - b);

  // Time Complexity: O(n^2 * logn), n === 10^3
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      let start = j + 1;
      let end = nums.length - 1;

      while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (nums[i] + nums[j] > nums[mid]) {
          start = mid + 1;
        } else {
          end = mid - 1;
        }
      }

      countOfCanTriangle += start - (j + 1);
    }
  }

  // Total Time Complexity: O(nlogn), n === 10^3 + O(n^2 * logn), n === 10^3
  // Total Space Complexity: O(1)
  return countOfCanTriangle;
};

const triangleNumberUseBruteForce = function (nums) {
  let countOfCanTriangle = 0;

  // Time Complexity: O(n^3), n === 10^3
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (
          nums[i] + nums[j] > nums[k] &&
          nums[i] + nums[k] > nums[j] &&
          nums[j] + nums[k] > nums[i]
        ) {
          countOfCanTriangle++;
        }
      }
    }
  }

  // Total Time Complexity: O(n^3), n === 10^3
  // Total Space Complexity: O(1)
  return countOfCanTriangle;
};

console.log(triangleNumber([2, 2, 3, 4]));
console.log(triangleNumber([4, 2, 3, 4]));
