// 1. 문제 이해
// 1-1. 입력
//      - want: string[], 1 <= want.length <= 10
//      - number: number[], 1 <= number.el <= 10, 1 <= number.length <= 10
//      - discount: number[], 10 <= discount.length <= 100,000
// 1-2. 출력
//      - countOfCanBuyDate: number
// 1-3. 제약
// 2. 구현 방식
//      - 각 원하는 제품을 key, 수량을 value로 갖는 hashTableOfWantProduct을 만들어 둔다.
//      - discount로 loop를 돌리면서, 해당 hashTableOfWantProduct의 key를 찾아서 value를 1씩 소거한다. (discount loop 내에서 number의 길이만큼 loop를 돌림)
//      - 모두 0이하로 소거됐는지 확인하고, 소거됐다면 countOfCanBuyDate++을 한다.
//      - countOfCanBuyDate를 반환한다.

function solution(want, number, discount) {
  let countOfCanBuyDate = 0;

  const hashTableOfWantProduct = new Map();

  want.forEach((el, idx) => {
    hashTableOfWantProduct.set(el, number[idx]);
  });

  for (let i = 0; i <= discount.length - 10; i++) {
    const newHashTableOfWantProduct = new Map(hashTableOfWantProduct);
    for (let j = 0; j < 10; j++) {
      if (
        newHashTableOfWantProduct.has(discount[i + j]) &&
        newHashTableOfWantProduct.get(discount[i + j]) > 0
      ) {
        newHashTableOfWantProduct.set(
          discount[i + j],
          newHashTableOfWantProduct.get(discount[i + j]) - 1
        );
      }
    }

    let k = 0;
    for (const [_, value] of newHashTableOfWantProduct) {
      if (value > 0) {
        break;
      }

      if (k === newHashTableOfWantProduct.size - 1) {
        countOfCanBuyDate++;
        break;
      }

      k++;
    }
  }

  return countOfCanBuyDate;
}

solution(
  ['banana', 'apple', 'rice', 'pork', 'pot'],
  [3, 2, 2, 2, 1],
  [
    'chicken',
    'apple',
    'apple',
    'banana',
    'rice',
    'apple',
    'pork',
    'banana',
    'pork',
    'rice',
    'pot',
    'banana',
    'apple',
    'banana',
  ]
);
