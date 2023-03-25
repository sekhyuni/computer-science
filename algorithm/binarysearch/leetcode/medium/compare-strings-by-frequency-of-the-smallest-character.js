/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
// 1. 문제 이해
// 1-1. 입력
//     - queries: string[], 1 <= queries.length <= 2,000, 1 <= queries[i].length <= 10
//     - words: string[], 1 <= words.length < 2,000, 1 <= words[i].length <= 10
// 1-2. 출력
//     - listOfCountOfQueryFrequencyIsSmaller: number[]
// 1-3. 제약
//     - 모두 영소문자로 이루어져 있음
//     - query, word에서 사전순으로 가장 작은 문자의 빈도를 비교
// 2. 구현 방식
//      1) binary search
//          - queries를 순회하고 각 query를 순회하면서 가장 작은 문자를 확인하여 빈도수 listOfQueryFrequency에 저장
//          - words를 순회하고 각 word를 순회하면서 가장 작은 문자를 확인하여 빈도수 listOfWordFrequency에 저장
//          - listOfQueryFrequency를 순회하면서 listOfWordFrequency에서 [1, n - 1] 범위만큼 binary search로 탐색
//          - listOfWordFrequency[mid] > listOfQueryFrequency[i] ? end = mid - 1 : start = mid + 1;
//          - listOfWordFrequency.length - start를 listOfCountOfQueryFrequencyIsSmaller에 저장
//      2) brute force
//          - queries를 순회하고 각 query를 순회하면서 가장 작은 문자를 확인하여 빈도수 저장
//          - words를 순회하고 각 word를 순회하면서 가장 작은 문자를 확인하여 빈도수 저장
//          - listOfQueryFrequency를 순회하고 listOfWordFrequency를 순회하면서 각 query의 빈도수가 더 작은 count를 listOfCountOfQueryFrequencyIsSmaller에 저장
const numSmallerByFrequency = function (queries, words) {
  // Space Complexity: O(n), n === 2,000
  const listOfCountOfQueryFrequencyIsSmaller = [];

  // Space Complexity: O(n), n === 2,000
  const listOfQueryFrequency = [];
  // Space Complexity: O(n), n === 2,000
  const listOfWordFrequency = [];

  // Time Complexity: O(n * m), n === 2,000, m === 10
  for (let i = 0; i < queries.length; i++) {
    let minCharacter = "z";
    let count = 0;
    for (let j = 0; j < queries[i].length; j++) {
      if (queries[i][j] < minCharacter) {
        minCharacter = queries[i][j];
      }
    }

    for (let j = 0; j < queries[i].length; j++) {
      if (queries[i][j] === minCharacter) {
        count++;
      }
    }
    listOfQueryFrequency.push(count);
  }

  // Time Complexity: O(n * m), n === 2,000, m === 10
  for (let i = 0; i < words.length; i++) {
    let minCharacter = "z";
    let count = 0;
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] < minCharacter) {
        minCharacter = words[i][j];
      }
    }

    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === minCharacter) {
        count++;
      }
    }
    listOfWordFrequency.push(count);
  }

  // Time Complexity: O(nlogn), n === 2,000
  listOfWordFrequency.sort((a, b) => a - b);

  // Time Complexity: O(nlogm), n === 2,000, m === 2,000
  for (let i = 0; i < listOfQueryFrequency.length; i++) {
    let start = 0;
    let end = listOfWordFrequency.length - 1;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      if (listOfWordFrequency[mid] > listOfQueryFrequency[i]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    listOfCountOfQueryFrequencyIsSmaller.push(
      listOfWordFrequency.length - start
    );
  }

  // Total Time Complexity: O(n * m), n === 2,000, m === 10 + O(n * m), n === 2,000, m === 10 + O(nlogn), n === 2,000 + O(nlogm), n === 2,000, m === 2,000
  // Total Space Complexity: O(n), n === 2,000 + O(n), n === 2,000 + O(n), n === 2,000
  return listOfCountOfQueryFrequencyIsSmaller;
};

const numSmallerByFrequencyUseBruteForce = function (queries, words) {
  // Space Complexity: O(n), n === 2,000
  const listOfCountOfQueryFrequencyIsSmaller = [];

  // Space Complexity: O(n), n === 2,000
  const listOfQueryFrequency = [];
  // Space Complexity: O(n), n === 2,000
  const listOfWordFrequency = [];

  // Time Complexity: O(n * m), n === 2,000, m === 10
  for (let i = 0; i < queries.length; i++) {
    let minCharacter = "z";
    let count = 0;
    for (let j = 0; j < queries[i].length; j++) {
      if (queries[i][j] < minCharacter) {
        minCharacter = queries[i][j];
      }
    }

    for (let j = 0; j < queries[i].length; j++) {
      if (queries[i][j] === minCharacter) {
        count++;
      }
    }
    listOfQueryFrequency.push(count);
  }

  // Time Complexity: O(n * m), n === 2,000, m === 10
  for (let i = 0; i < words.length; i++) {
    let minCharacter = "z";
    let count = 0;
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] < minCharacter) {
        minCharacter = words[i][j];
      }
    }

    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === minCharacter) {
        count++;
      }
    }
    listOfWordFrequency.push(count);
  }

  // Time Complexity: O(n * m), n === 2,000, m === 2,000
  for (let i = 0; i < listOfQueryFrequency.length; i++) {
    let count = 0;
    for (let j = 0; j < listOfWordFrequency.length; j++) {
      if (listOfQueryFrequency[i] < listOfWordFrequency[j]) {
        count++;
      }
    }
    listOfCountOfQueryFrequencyIsSmaller.push(count);
  }

  // Total Time Complexity: O(n * m), n === 2,000, m === 10 + O(n * m), n === 2,000, m === 10 + O(n * m), n === 2,000, m === 2,000
  // Total Space Complexity: O(n), n === 2,000 + O(n), n === 2,000 + O(n), n === 2,000
  return listOfCountOfQueryFrequencyIsSmaller;
};

console.log(numSmallerByFrequency(["cbd"], ["zaaaz"]));
console.log(numSmallerByFrequency(["bbb", "cc"], ["a", "aa", "aaa", "aaaa"]));
