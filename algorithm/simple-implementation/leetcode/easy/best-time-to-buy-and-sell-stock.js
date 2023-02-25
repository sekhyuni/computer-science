/**
 * @param {number[]} prices
 * @return {number}
 */
// 1. 문제 이해
// 1-1. 입력
//      - prices: number[], 1 <= prices.length <= 10^5, 0 <= prices[i] <= 10^4
// 1-2. 출력
//      - maxProfit: number
// 1-3. 제약
//      - 어떤 이득도 취할 수 없으면 return 0;
// 2. 구현 방식
//      - 최소 가격을 minPrice, 최대 이득을 maxProfit로 둔다.
//      - prices loop를 돌면서, maxProfit을 찾는다.
const maxProfit = function (prices) {
  if (prices.length === 1) {
    return 0;
  }

  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      if (maxProfit < prices[i] - minPrice) {
        maxProfit = prices[i] - minPrice;
      }
    }
  }

  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([2, 4, 1]));
