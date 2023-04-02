// 1. 문제 이해
// 1.1 입력
//      - height: number[], 2 <= height <= 10^5, 0 <= height[i] <= 10^4
// 1.2 출력
//      - maxArea: number
// 1.3 요건
//      - 두 height[i]와 height[i + a] 사이의 최대 넓이를 구한다.
// 2. 구현 방식
//      - 브루트포스로 각 idx에서 최대 넓이를 구하여 그 전 최대 넓이와 비교하는 방식으로 최종 최대 넓이를 구한다.
const maxArea = function (height) {
  let maxAreaOfAll = 0;

  for (let i = 1, len = height.length; i < len; i++) {
    let maxAreaOfCurrentIdx = 0;

    for (let j = 0; j < i; j++) {
      const area = (i - j) * (height[i] < height[j] ? height[i] : height[j]);

      if (maxAreaOfCurrentIdx < area) {
        maxAreaOfCurrentIdx = area;
      }
    }

    if (maxAreaOfAll < maxAreaOfCurrentIdx) {
      maxAreaOfAll = maxAreaOfCurrentIdx;
    }
  }

  return maxAreaOfAll;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
