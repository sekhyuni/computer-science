// 1. 문제 이해
// 1-1. 입력
//      - n: number, 1 <= n <= 1,000,000,000
//      - times: number[], 1 <= times[i] <= 1,000,000,000, 1 <= times.length <= 100,000
// 1-2. 출력
//      - minTimeOfAllPeoplePassed: number
// 1-3. 제약
//      - 심사관마다 동시에 한 명만 심사 가능
//      - 가장 앞에 있는 사람은 비어 있는 심사대로 갈 수 있음
// 2. 구현 방식
//      - 7, 10, 14 === 7 * 2, 20 === 10 * 2, 21 === 7 * 3, 28 === 7 * 4, 30 === 10 * 3, 35 === 7 * 5, 40 === 10 * 4, ...
function solution(n, times) {
  times.sort((a, b) => a - b);
  let start = 1;
  let end = n * times[times.length - 1];
  let minTimeOfAllPeoplePassed = end;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    let countOfPeoplePassed = 0;
    for (let i = 0; i < times.length; i++) {
      countOfPeoplePassed += Math.floor(mid / times[i]);

      if (countOfPeoplePassed >= n) {
        minTimeOfAllPeoplePassed = Math.min(mid, minTimeOfAllPeoplePassed);
        break;
      }
    }

    if (countOfPeoplePassed >= n) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return minTimeOfAllPeoplePassed;
}

console.log(solution(6, [7, 10]));
