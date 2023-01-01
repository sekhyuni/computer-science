/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    const hashTable = new Map();
    nums.forEach((num, idx) => {
        hashTable.set(num, idx);
    });

    const lengthOfNums = nums.length;
    for (let idx = 0; idx < lengthOfNums; idx++) {
        if (idx !== hashTable.get(target - nums[idx]) && hashTable.has(target - nums[idx])) {
            return [idx, hashTable.get(target - nums[idx])];
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))

const twoSumByBruteForce = function (nums, target) {
    const lengthOfNums = nums.length;
    for (let i = 0; i < lengthOfNums; i++) {
        for (let j = i + 1; j < lengthOfNums; j++) {
            if (i !== j && nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

console.log(twoSumByBruteForce([2, 7, 11, 15], 9))
console.log(twoSumByBruteForce([3, 2, 4], 6))