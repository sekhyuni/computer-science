// 1. 문제 이해
// 1-1. 입력
//      - nums: number[], 3 <= nums.length <= 500, -1000 <= nums[i] <= 1000
//      - target: number, -10^4 <= target <= 10^4
// 1-2. 출력
//      - closestNumber: number
// 1-3. 요건
//      - nums에서 3개를 뽑아서 더한 값이 target과 가장 가까운 수 반환
// 2. 구현 방식
//      - 3개의 합을 listOfThreeSum 배열에 저장
//      - listOfThreeSum에서 binary search를 사용하여 target과 가장 가까운 수 반환
const threeSumClosest = function (nums, target) {
  const setOfThreeSum = new Set();
  const closestNumber = target;
  const lengthOfNums = nums.length;

  for (let i = 0; i < lengthOfNums - 2; i++) {
    for (let j = i + 1; j < lengthOfNums - 1; j++) {
      for (let k = j + 1; k < lengthOfNums; k++) {
        if (!setOfThreeSum.has(nums[i] + nums[j] + nums[k])) {
          setOfThreeSum.add(nums[i] + nums[j] + nums[k]);
        }
      }
    }
  }

  const listOfThreeSum = [...setOfThreeSum];
  listOfThreeSum.sort((a, b) => a - b);

  let left = 0,
    right = listOfThreeSum.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (listOfThreeSum[mid] === target) {
      return closestNumber;
    } else if (listOfThreeSum[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return listOfThreeSum[left] ?? listOfThreeSum[right];
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
console.log(threeSumClosest([0, 0, 0], 1));
console.log(threeSumClosest([4, 0, 5, -5, 3, 3, 0, -4, -5], -2));
console.log(
  threeSumClosest(
    [
      147, 465, -917, -321, 551, 982, -967, -672, 670, -859, -776, 290, -406,
      223, 123, -266, 730, 339, 792, 588, 138, 822, 474, -615, 386, -392, 559,
      364, 124, 829, -505, 553, -284, -458, -826, -791, -67, -798, 932, -828,
      -739, 65, -782, -159, 363, -123, 893, -992, -662, -65, -352, -649, -357,
      780, -690, -584, -660, -427, 802, 113, 856, 34, -145, -97, -8, 488, 467,
      -24, 967, 96, -915, 309, -931, 989, -789, 886, -568, 451, 965, -344, 917,
      -994, 865, -537, 241, -761, 812, 768, 648, 594, -702, -640, 845, 350,
      -408, 984, 870, 246, -107, 508, -860, -298, 514, 349, 960, -663, -616,
      -87, 566, -449, 161, 522, 293, 270, -276, 928, -612, 117, -263, 721, -692,
      -712, 995, 729, 115, 463, 328, 397, -781, -253, 782, -542, 71, 919, 286,
      -732, -271, 401, -820, 51, -232, -170, -189, 154, -487, -221, 632, 860,
      38, -224, 839, -227, 656, 194, -331, -422, -997, 784, 640, -367, 385, 202,
      520, -553, -44, 208,
    ],
    1826
  )
);
console.log(
  threeSumClosest(
    [
      -23, -67, 32, 21, -65, 46, 73, 42, 93, 9, -61, -79, -51, 61, -15, 49, 92,
      -34, 50, 1, 26, -12, 68, -97, -17, 51, -55, 75, -56, -95, -70, -42, 91,
      -18, -64, 20, 33, -20, 19, 61, -89, 81, -73, 82, -23, -65, 51, -88, 15,
      -48, 24, 34, 0, -24, 37, 22, 28, -67, -25, -61, -57, -74, 65, 50, -66, 24,
      99, 80, 44, 85, 20, -4, -9, -81, 87, -82, -100, 51, -83, 9, -31, 37, 23,
      -61, 53, -14, -51, 88, 56, 27, 42, -52, -97, 37, 36, -59, -45, 95, 46, -1,
      -100, -38, 66, 44, 27, -97, 12, -43, 84, -53, 93, 18, -40, -38, 34, 85,
      53, -50, -14, -6, 98, -77, -17, 50, -65, 52, -46, -94, 49, 72, -2, -82,
      45, -39, -58, 67, 82, 63, 95, -32, 47, 15, -20, 46, 5, 17, -40, -95, 97,
      -9, 11, 8, -51, -24, -50, -37, -72, -57, 26, 26, 19, 71, -42,
    ],
    -87
  )
);
