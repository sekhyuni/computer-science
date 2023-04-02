class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // Helper Methods
  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }

  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }

  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  swap(indexOne, indexTwo) {
    const temp = this.heap[indexOne];
    this.heap[indexOne] = this.heap[indexTwo];
    this.heap[indexTwo] = temp;
  }

  peek() {
    if (this.heap.length === 0) {
      return null;
    }
    return this.heap[0];
  }

  // Removing an element will reomve the
  // top element with highest priority then
  // heapifyDown will be called
  remove() {
    if (this.heap.length === 0) {
      return null;
    }
    const item = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown();
    return item;
  }

  add(item) {
    this.heap.push(item);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (this.hasParent(index) && this.parent(index) < this.heap[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.rightChild(index) > this.leftChild(index)
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }
      if (this.heap[index] > this.heap[smallerChildIndex]) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }
}

/**
 * @param {number[]} score
 * @return {string[]}
 */
// 1. 문제 이해
// 1-1. 입력
//      - score: number[], 1 <= score.length <= 10^4, 0 <= score[i] <= 10^6
// 1-2. 출력
//      - listOfRank: string[]
// 1-3. 제약
//      - 모든 score[i]는 유일함
// 2. 구현 방식
//      - maxHeap에 score[i] 추가
//      - score 길이만큼 순회하면서 hashTableOfScoreAndRank의 key에 maxHeap.remove(), value에 순위 저장
//      - score 길이만큼 순회하면서 hashTableOfScoreAndRank의 key가 score[i]에 해당하는 value를 listOfRank에 push
//      - return listOfRank;
const findRelativeRanks = function (score) {
  // Space Complexity: O(n), n === 10^4
  const listOfRank = [];

  // Space Complexity: O(n), n === 10^4
  const maxHeap = new MaxHeap();

  // Time Complexity: O(nlogn), n === 10^4
  for (let i = 0; i < score.length; i++) {
    maxHeap.add(score[i]);
  }

  // Space Complexity: O(n), n === 10^4
  const hashTableOfScoreAndRank = new Map();

  // Time Complexity: O(nlogn), n === 10^4
  for (let i = 0; i < score.length; i++) {
    hashTableOfScoreAndRank.set(maxHeap.remove(), i + 1);
  }

  // Time Complexity: O(n), n === 10^4
  for (let i = 0; i < score.length; i++) {
    if (hashTableOfScoreAndRank.get(score[i]) === 1) {
      listOfRank.push('Gold Medal');
    } else if (hashTableOfScoreAndRank.get(score[i]) === 2) {
      listOfRank.push('Silver Medal');
    } else if (hashTableOfScoreAndRank.get(score[i]) === 3) {
      listOfRank.push('Bronze Medal');
    } else {
      listOfRank.push(String(hashTableOfScoreAndRank.get(score[i])));
    }
  }

  // Total Time Complexity: O(nlogn), n === 10^4 + O(nlogn), n === 10^4 + O(n), n === 10^4
  // Total Space Complexity: O(n), n === 10^4 + O(n), n === 10^4 + O(n), n === 10^4
  return listOfRank;
};

console.log(findRelativeRanks([5, 4, 3, 2, 1]));
console.log(findRelativeRanks([10, 3, 8, 9, 4]));
