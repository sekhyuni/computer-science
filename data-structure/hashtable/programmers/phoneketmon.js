function solution(nums) {
  const max = nums.length / 2;
  const setOfPhonekeymon = new Set(nums);

  return setOfPhonekeymon.size > max ? max : setOfPhonekeymon.size;
}

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([3, 3, 3, 2, 2, 2]));
