/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
// 1. 문제 이해
// 1-1. 입력
//      - intervals: number[][], 1 <= intervals.length <= 2*10^4, intervals[i].length === 2, -10^6 <= start <= end <= 10^6
// 1-2. 출력
//      - listOfRightIntervalIndices: number[]
// 1-3. 제약
//      - intervals[i]의 right interval은 intervals[j][0] >= intervals[i][1]이고, intervals[j][0]이 최소가 되는 intervals[j]임
//      - intervals[i][0] 값은 유일함
//      - intervals.length === 1이면, [-1]을 반환함
// 2. 구현 방식
//      - intervals.length만큼 loop 돌리면서, [ithStart, ithIdx] list를 생성하여 listOfStartAndIndex에 저장
//      - listOfStartAndIndex[i][0](ithStart)를 오름차순 정렬
//      - 범위 [1, intervals.length - 1]에서 binary search를 통해 최소값 추출
const findRightInterval = function (intervals) {
  if (intervals.length === 1) {
    return [-1];
  }

  const listOfRightIntervalIndices = [];

  const listOfStartAndIndex = [];
  // Time Complexity: O(n), n === 2*10^4
  for (let i = 0; i < intervals.length; i++) {
    listOfStartAndIndex.push([intervals[i][0], i]);
  }
  // Time Complexity: O(nlogn), n === 2*10^4 === 2*(2^4*5^4), logn === 1 + 4 + log5^4
  listOfStartAndIndex.sort((a, b) => a[0] - b[0]);

  // Time Complexity: O(n), n === 2*10^4
  for (let i = 0; i < intervals.length; i++) {
    const ithEnd = intervals[i][1];

    let start = 0;
    let end = intervals.length - 1;
    let idx = -1;

    // Time Complexity: O(logn)
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      const [jthStart, jthIdx] = listOfStartAndIndex[mid];
      if (jthStart >= ithEnd) {
        idx = jthIdx;
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    listOfRightIntervalIndices.push(idx);
  }

  // Total Time Complexity: O(n) + O(nlogn) + O(nlogn) < Brute Force === O(n^2)
  return listOfRightIntervalIndices;
};

console.log(
  findRightInterval([
    [3, 4],
    [2, 3],
    [1, 2],
  ])
);
console.log(
  findRightInterval([
    [1, 4],
    [2, 3],
    [3, 4],
  ])
);
