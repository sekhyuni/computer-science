// 1. 문제 이해
// 1-1. 입력
//      - enroll: string[], 1 <= enroll.length <= 10,000
//      - referral: string[], 1 <= referral.length <= 10,000
//      - seller: string[], 1 <= seller.length <= 100,000
//      - amount: number[], 1 <= amount.length <= 100,000
// 1-2. 출력
//      - listOfBenefitOfAllEnroll: number[], 1 <= listOfBenefitOfAllEnroll.length === enroll.length <= 10,000
// 1-3. 제약
// 2. 구현 방식
//      - enroll 길이만큼 loop를 돌린다.
//      - hash table에 enroll[i]를 key, referral[i]를 value로 저장한다.
//      - 또 다른 hash table에 enroll[i]를 key, 0을 value로 저장한다.
//      - seller 길이만큼 loop를 돌린다.
//      - seller[i]의 할당량을 더한다.
//      - hash table get(seller[i]) recommender의 할당량을 더한다.
//      - hash table get(recommender)가 또 있으면 2차 recommender의 할당량을 더한다.
//      - 없을 때까지 반복한다.
function solution(enroll, referral, seller, amount) {
  const listOfBenefitOfAllEnroll = [];

  const hashTableOfRecommendation = new Map();
  const hashTableOfBenefitOfAllEnroll = new Map();

  // Time Complexity: O(n), n === 10,000
  for (let i = 0; i < enroll.length; i++) {
    hashTableOfRecommendation.set(enroll[i], referral[i]);
    hashTableOfBenefitOfAllEnroll.set(enroll[i], 0);
  }

  // Time Complexity: O(m), m === 100,000
  for (let i = 0; i < seller.length; i++) {
    let rest = Math.floor(amount[i] * 100 * 0.1);

    hashTableOfBenefitOfAllEnroll.set(
      seller[i],
      hashTableOfBenefitOfAllEnroll.get(seller[i]) + amount[i] * 100 - rest
    );

    let recommender = hashTableOfRecommendation.get(seller[i]);
    while (recommender !== "-") {
      const restOfRest = Math.floor(rest * 0.1);

      hashTableOfBenefitOfAllEnroll.set(
        recommender,
        hashTableOfBenefitOfAllEnroll.get(recommender) + rest - restOfRest
      );

      if (restOfRest === 0) {
        break;
      }

      rest = restOfRest;
      recommender = hashTableOfRecommendation.get(recommender);
    }
  }

  // Time Complexity: O(n), n === 10,000
  for (let i = 0; i < enroll.length; i++) {
    listOfBenefitOfAllEnroll.push(hashTableOfBenefitOfAllEnroll.get(enroll[i]));
  }

  // Total Time Complexity: O(n), n === 10,000 + O(m), m === 100,000 + O(n), n === 10,000
  // Total Space Complexity: O(n), n === 10,000 + O(n), n === 10,000 + O(n), n === 10,000
  return listOfBenefitOfAllEnroll;
}

console.log(
  solution(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["young", "john", "tod", "emily", "mary"],
    [12, 4, 2, 5, 10]
  )
);
console.log(
  solution(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["sam", "emily", "jaimie", "edward"],
    [2, 3, 5, 4]
  )
);
console.log(solution(["john", "mary"], ["-", "-"], ["john", "mary"], [2, 3]));
