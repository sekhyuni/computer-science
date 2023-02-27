/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// 1. 문제 이해
// 1-1. 입력
//      - numbers: number[], 2 <= numbers.length <= 3 * 10^4, -1,000 <= numbers[i] <= 1,000
//      - target: number, -1,000 <= target <= 1,000
// 1-2. 출력
//      - listOfTwoIndicesOfSumIsTarget: number[], listOfTwoIndicesOfSumIsTarget.length === 2
// 1-3. 제약
//      - numbers는 오름차순 정렬되어있음
//      - 1 <= index1 < index2 <= numbers.length
//      - 같은 element를 두 번 사용할 수 없음
// 2. 구현 방식
//      - 어떤 상태의 배열을 탐색할 것인가? -> numbers
//      - numbers 길이만큼 loop를 돌면서, target - number[i] === mid인 index를 찾는다.
const twoSum = function (numbers, target) {
  const listOfTwoIndicesOfSumIsTarget = [];

  for (let i = 0; i < numbers.length; i++) {
    const rest = target - numbers[i];
    listOfTwoIndicesOfSumIsTarget.push(i + 1);
    let start = 0;
    let end = numbers.length - 1;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      if (numbers[mid] === rest && mid !== i) {
        listOfTwoIndicesOfSumIsTarget.push(mid + 1);
        break;
      } else if (numbers[mid] > rest) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    if (listOfTwoIndicesOfSumIsTarget.length === 2) {
      return listOfTwoIndicesOfSumIsTarget;
    } else {
      listOfTwoIndicesOfSumIsTarget.pop();
    }
  }

  return listOfTwoIndicesOfSumIsTarget;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 0], -1));
