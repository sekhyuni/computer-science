// - s를 n으로 나눈 몫 구하기
// - s를 n으로 나눈 나머지 구하기
// - n만큼 loop를 순회하면서 listOfBestSet에 몫 push
// - 이 때, 끝에서부터 나머지 길이만큼은 +1을 해서 push
function solution(n, s) {
  const quotient = Math.floor(s / n);
  if (quotient === 0) {
    return [-1];
  }

  const remainder = s % n;
  const listOfBestSet = [];

  // Time Complexity: O(n), n === 10^4
  for (let i = 0; i < n; i++) {
    listOfBestSet.push(quotient + (n - i <= remainder ? 1 : 0));
  }

  // Total Time Complexity: O(n), n === 10^4
  // Total Space Complexity: O(n), n === 10^4
  return listOfBestSet;
}

console.log(solution(2, 9));
console.log(solution(2, 1));
console.log(solution(2, 8));
