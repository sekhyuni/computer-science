// 1. 문제 이해
// 1.1 입력
//      - digits: number[], 1 <= digits.length <= 100, 0 <= digits[i] <= 9
//      - digits의 맨 앞에는 0이 들어가지 않음
// 1.2 출력
//      - result: number[], 1 <= result.length <= 101, 0 <= result[i] <= 9
// 1.3 요건
//      - digits로 이루어진 정수 + 1의 값을 result에 담아서 반환
// 2. 구현 방식
// 2.1 digits 마지막부터 순회하면서 전 단계에서 +1이 안 된 경우 digits[i]를 result[i]에 저장
// 2.3 digits 마지막부터 순회하면서 전 단계에서 +1이 되고, digits[i]가 9가 아닌 경우, digits[i] + 1을 result[i]에 저장
// 2.3 digits 마지막부터 순회하면서 전 단계에서 +1이 되고, digits[i]가 9인 경우, result[i]에 0을 저장
const plusOne = function (digits) {
  const result = [];
  let isPrevOverNine = true;

  // 시간 복잡도: O(n)
  for (let i = digits.length - 1; i >= 0; i--) {
    if (isPrevOverNine) {
      result[i] = digits[i] + 1;

      if (result[i] === 10) {
        result[i] = 0;

        if (i === 0) {
          result.unshift(1);
        }
      } else {
        isPrevOverNine = false;
      }
    } else {
      result[i] = digits[i];
    }
  }

  return result;
};

// const plusOne = function (digits) {
//     // first join the digits with no space and add 1
//     let str = digits.join('');
//     let num = BigInt(str) + BigInt(1);
//     // convert the num into array
//     num = num.toString().split('').map((num) => parseInt(num));
//     return num;
// };

console.log(plusOne([9, 9, 9, 9]));
